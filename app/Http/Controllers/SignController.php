<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;

class SignController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | 登录控制器
      |--------------------------------------------------------------------------
      |方法：
      |
      |loginPost          用户登录
      |loginOut           用户登出
      |remindPost         重设密码
     */

    /**
     * 用户登录
     * @param type $name
     * @param type $password
     * @return type
     */
    public function loginPost() {
        $name = Input::get('name');
        $password = Input::get('password');
        $cus_id = Customer::where('name', $name)->where('status', '1')->pluck('id');
        if (!$cus_id) {
            return Response::json(['err' => 2001, 'msg' => '用户不存在!']);
//            echo '<meta charset="UTF-8"><script language="javascript">alert("用户不存在!");window.history.back(-1);</script> ';
//            exit();
        }
        if (Auth::attempt(array('name' => $name, 'password' => $password))) {
            $customername = Auth::user()->name;
            return Response::json(['err' => 0, 'msg' => '登录成功!']);
//            return Redirect::to('admin/index.html');
        } else {
            return Response::json(['err' => 2001, 'msg' => '登录失败!']);
//            echo '<meta charset="UTF-8"><script language="javascript">alert("登录失败!");window.history.back(-1);</script> ';
//            exit();
            //$result = ['err'=>1001,'msg'=>'登录失败'];
            //return Response::json($result);
        }
    }

    public function isLogin() {
        if (Auth::check()) {
            return Response::json(['err' => 0, 'msg' => '已经登录']);
        } else {
            return Response::json(['err' => 2001, 'msg' => '未登录']);
        }
    }

    public function logOut() {
        Auth::logout();
        return Redirect::to('/admin/login.html');
    }

    public function remindPost() {
        Password::remind(Input::only('email'), function($message) {
            $message->subject('Password Reminder');
        });
    }

    public function modifyPassword() {
        $oldpassword = Input::get('oldpassword');
        $newpassword = Input::get('newpassword');
        if (Auth::check()) {
            if (Hash::check($oldpassword, Auth::user()->password)) {
                $result = Customer::where('id', Auth::id())->update(['password' => Hash::make($newpassword)]);
            }
        }
        Auth::logout();
        if (isset($result) && ($result)) {
            return Response::json(['err' => 0, 'msg' => '修改成功', 'success' => 1]);
        } else {
            return Response::json(['err' => 0, 'msg' => '密码错误', 'success' => 0]);
        }
    }

    /**
     * 自动登陆绑定账户
     */
    public function autoLogin() {
        $bind_id = Input::get('switch_cus_id');
        if (!empty($bind_id)) {
            $user = Customer::find($bind_id);
            Auth::login($user);
        } else {
            $result = ['err' => 1001, 'msg' => '未绑定'];
            return Response::json($result);
        }
        if (Auth::check()) {
            Session::put('isAdmin', TRUE);
            $result = ['err' => 0, 'msg' => '/admin/index.html'];
        } else {
            $result = ['err' => 1001, 'msg' => '登录失败'];
        }
        return Response::json($result);
    }

    public function clearCache() {
        $dir = resource_path("/views/cache/");
        $this->clearAllFiles($dir);
        clearstatcache();
        return redirect()->guest('/admin/index.html#/home');
    }

    private function clearAllFiles($dir) {
        $dh = opendir($dir);
        while ($file = readdir($dh)) {
            if ($file != "." && $file != "..") {
                $fullpath = $dir . "/" . $file;
                if (!is_dir($fullpath)) {
                    unlink($fullpath);
                }
            }
        }
        closedir($dh);
    }

}
