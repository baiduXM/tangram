<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;
use Smarty;

class CustomerController extends Controller {

    public function index() {
//        if(Auth::attempt(array('name' => 'test','email'=>'949460716@qq.com', 'password' =>'test'))){
//            echo '11';
//        }else{
//            echo '2';
//        }
//        Auth::loginUsingId(11);
//        var_dump(Auth::user());
//        Auth::logout();
//        var_dump(Auth::check());
//        $auth=new Auth();
//        var_dump($auth);
//        echo 12312313212;
//        $customer=new Customer();
//        $result=$customer->getInfo();
//        var_dump($result);
//        exit();
//        var_dump(__DIR__);
//        $result=file_get_contents(__DIR__.'/../routes.php');
//        $regex = "/get('index',/";    
//        $str = $result;
//        $matches = array();
//
//        if(preg_match($regex, $str, $matches)){
//            print_r($matches);
//        }
//        var_dump(resource_path(''));
        $smarty=new Smarty();
        $smarty->template_dir = resource_path('/views/');
//        $smarty->cache_dir = resource_path('/views/cache/');
        $smarty->compile_dir = resource_path('/views/cache/');
//      $smarty->config_dir = VIEWPATH;
//        $smarty->assign($vars);
        $smarty->display('welcome.blade.php');
        exit();
    }
    public function customerInfo(){
        $username=Auth::user()->name;
        return json_encode(array("username"=>$username));
    }
}
