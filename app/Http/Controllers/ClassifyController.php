<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use App\Models\Classify;
use App\Models\Page;
use Smarty;

class ClassifyController extends Controller {
    /*
      |-------------------------------------------------------------------------
      | 栏目管理控制器
      |-------------------------------------------------------------------------
      |方法：
      |
      |classifyList      栏目列表
      |classifyDelete    栏目删除
      |classifyInfo      栏目信息
      |classifyModify    栏目添加、修改
      |classifyShow      栏目显隐
      |classifySort      栏目排序
      |toTree            将数组递归为树形结构
     */

    /**
     * 栏目列表
     * @return type
     */
    public function classifyList() {
        $classify = Classify::orderBy('sort')->orderBy('id')->get()->toArray();
        $result['err'] = 0;
        $result['msg'] = '';
        $result['data'] = $this->toTree($classify);
        return Response::json($result);
    }

    public function classifyDelete() {
        $failed = '';
        $id = explode(',', ltrim(Input::get('id'), ','));
        (count($id) > 1) ? $id : $id = $id[0];
        if (is_array($id)) {
            foreach ($id as $v) {
                $ids = DB::table("article")->where('c_id', $v)->lists('id');
                $d_c_result = DB::table("classify")->where('id', $v)->delete();
                DB::table("article")->where('c_id', $v)->delete();
                if ($d_c_result) {
                    $success[] = $v;
                } else {
                    $failed .= $v . ',';
                }
            }
        } else {
            $ids = DB::table("article")->where('c_id', $id)->lists('id');
            $d_c_result = DB::table("classify")->where('id', $id)->delete();
            DB::table("article")->where('c_id', $id)->delete();
            if ($d_c_result) {
                $success[] = $id;
            } else {
                return Response::json(['err' => 1001, 'msg' => '栏目' . $id . '存在子目录或文章,删除失败']);
            }
        }
        if (!$failed) {
            $result = ['err' => 0, 'msg' => '', 'data' => $success];
        } else {
            $result = ['err' => 1001, 'msg' => '删除栏目失败'];
        }
        return Response::json($result);
    }

    public function classifyInfo() {
        $customer = Auth::user()->name;
        $id = Input::get('id');
        $classify = Classify::find($id)->toArray();
        if (is_numeric($classify['page_id']) && $classify['page_id'] > 0) {
            $page = Page::where('id', $classify['page_id'])->pluck('content');
            $classify['content'] = $page[0];
        }
        $result['err'] = 0;
        $result['msg'] = '';
        $result['data'] = $classify;
        $result['data']['keywords'] = $classify['meta_keywords'];
        $result['data']['description'] = $classify['meta_description'];
        return Response::json($result);
    }

    /**
     * 栏目添加、修改
     * @return type
     */
    public function classifyModify() {
        $id = Input::get('id');
        $is_passed = true;
        if ($id != NULL) {
            $classify = Classify::where('id', $id)->first();
            $page_id = Classify::where('id', $id)->pluck('page_id');
        } else {
            $classify = new Classify();
            $maxsort = Classify::max('sort');
            $classify->sort = ($maxsort === NULL) ? 0 : $maxsort + 1;
            $page_id = false;
        }
        if (Input::has("is_forced")) {
            $is_forced = Input::get("is_forced");
        } else {
            $is_forced = false;
        }
        $classify->p_id = (Input::get('p_id')) ? Input::get('p_id') : 0;
        $classify->type = Input::get('type');
        $classify->form_id = Input::get('form_id');
        if ($classify->p_id > 0) {
            if ($this->checkClassifyLevel($classify->p_id, 1)) {
                $p_c_info = Classify::find($classify->p_id);
                if (in_array($p_c_info->type, array(6))) {
                    $result = ['err' => 1001, 'msg' => '该类型不允许添加子栏目', 'data' => []];
                    $is_passed = false;
                } else {
                    $c_c_ids = Classify::where('p_id', $p_c_info->id)->lists('id');
                    if (!count($c_c_ids)) {
                        $a_ids = DB::table("article")->where('c_id', $p_c_info->id)->lists('id');
                        if (count($a_ids)) {
                            if (in_array($classify->type, array(4, 6))) {
                                $result = ['err' => 1001, 'msg' => '存在文章的栏目不允许添加该类型子栏目', 'data' => []];
                                $is_passed = false;
                            } else {
                                $result = ['err' => 1002, 'msg' => '该栏目存在文章，需转移才能创建子栏目', 'data' => []];
                                $is_passed = false;
                            }
                        }
                    }
                }
            } else {
                $result = ['err' => 1001, 'msg' => '添加失败，超过最大限制层级', 'data' => []];
                $is_passed = false;
            }
        }

        if ($is_passed) {
            $classify->name = trim(Input::get('name'));
            $classify->en_name = trim(Input::get('en_name'));
            $images = Input::get('img'); //===新图片
            $classify->img = $images;
            $icon = Input::get('icon');
            if (!empty($icon) && $icon != 'undefined') {
                $classify->icon = $icon;
            } else {
                $classify->icon = '';
            }
            $classify->article_type = (Input::get('article_type') != "undefined") ? Input::get('article_type') : 1;
            $classify->meta_keywords = trim(Input::get('keywords'));
            $classify->meta_description = trim(Input::get('description'));
            $classify->url = trim(Input::get('url'));
            $classify->open_page = trim(Input::get('open_page')) ? trim(Input::get('open_page')) : 1;
            $classify->pc_show = Input::get('pc_show');
            $classify->footer_show = Input::get('footer_show');
//            $classify->content = Input::get('content');
            if (Input::has('content') && Input::get('content') != 'undefined') {
                $page_content = Input::get('content');
                //===ueditor保存===
                $page = DB::table("page")->find($page_id);
//                if (empty($page)) {
//                    $page_file_array = '';
//                } else {
//                    $page_file_array = $page->file_array;
//                }
                //===end===
                if ($page_id && $page != null) {
                    DB::table("page")->where('id', $page_id)->update(array('content' => $page_content));
                } else {
                    $page_id = DB::table("page")->insertGetId(array('content' => $page_content));
                    if ($page_id) {
                        $classify->page_id = $page_id;
                    } else {
                        return Response::json(['err' => 10001, 'msg' => '页面内容无法保存']);
                    }
                }
            }
            if ($classify->save()) {
                $data['id'] = $classify->id;
                if ($is_forced) {
                    DB::table("article")->whereIn('id', $a_ids)->update(array('c_id' => $classify->id));
                }

                if ($id != NULL) {
                    $result = ['err' => 0, 'msg' => '栏目修改成功', 'data' => $data];
                } else {
                    $result = ['err' => 0, 'msg' => '创建栏目成功', 'data' => $data];
                }
            } else {
                if ($id != NULL) {
                    $result = ['err' => 1001, 'msg' => '修改栏目失败', 'data' => []];
                } else {
                    $result = ['err' => 1001, 'msg' => '创建栏目失败', 'data' => []];
                }
            }
        }
        return Response::json($result);
    }

    //确认分类支持级数
    public function checkClassifyLevel($pid, $level) {
        if ($pid == 0 && $level < 4) {
            return true;
        } else {
            $p_id = Classify::where('id', $pid)->pluck('p_id');
            $level+=1;
            if ($level < 4) {
                return $this->checkClassifyLevel($p_id[0], $level);
            } else {
                return false;
            }
        }
    }

    public function classifyShow() {
        $id = Input::get('id');
        $operate = Input::get('operate');
        $value = Input::get('value');
        $operate_array = ['pc_show', 'mobile_show', 'wechat_show'];
        $classify = Classify::where('id', $id)->first();
        if (in_array($operate, $operate_array)) {
            $update = [$operate => $value];
            if (!$value) {
                $this->closeChildClassify($id, $update, $operate);
                if (Classify::where('id', $id)->update($update)) {
                    $result = ['err' => 0, 'msg' => ''];
                } else {
                    $result = ['err' => 1001, 'msg' => '栏目关闭操作失败'];
                }
            } else {
                $is_passed = true;
                if ($classify->p_id != 0) {
                    $p_c_info = Classify::where('id', $classify->p_id)->first();
                    if ($p_c_info->$operate == 0) {
                        $result = ['err' => 1001, 'msg' => '父级栏目未开启,栏目开启失败'];
                        $is_passed = false;
                    }
                }
                if ($is_passed) {
                    if (Classify::where('id', $id)->update($update)) {
                        $result = ['err' => 0, 'msg' => ''];
                    } else {
                        $result = ['err' => 1001, 'msg' => '栏目开启操作失败'];
                    }
                }
            }
        } else {
            $result = ['err' => 1001, 'msg' => '栏目显隐控制错误操作'];
        }
        return Response::json($result);
    }

    //关闭子栏目显示
    private function closeChildClassify($id, $update, $operate) {
        $c_cids = Classify::where('p_id', $id)->lists('id');
        if (count($c_cids)) {
            foreach ($c_cids as $c_id) {
                $this->closeChildClassify($c_id, $update, $operate);
                Classify::where('id', $c_id)->update($update);
            }
        }
    }

    public function classifySort() {
        $indexlist = Input::get('indexlist');
        foreach ($indexlist as $key => $value) {
            $classify = Classify::find($value['id']); //dd($classify);
            $classify->sort = $value['index'];
            $classify->save();
        }
        $result = ['err' => 0, 'msg' => ''];
        return Response::json($result);
    }

    private function toTree($arr, $pid = 0) {
        $tree = array();
        foreach ($arr as $k => $v) {
            if ($v['p_id'] == $pid) {
                $tree[] = $v;
            }
        }
        if (empty($tree)) {
            return null;
        }
        foreach ($tree as $k => $v) {
            $tree[$k]['childmenu'] = $this->toTree($arr, $v['id']);
        }
        return $tree;
    }

    //删除分类及其子类
    private function delChildClassify($c_id) {
        $child_ids = Classify::where('p_id', $c_id)->lists('id');
        if (count($child_ids)) {
            foreach ($child_ids as $id) {
                $ids = DB::table("article")->where('c_id', $id)->lists('id');
                Classify::where('id', $id)->delete();
                DB::table("article")->where('c_id', $id)->delete();
                $this->delChildClassify($id);
            }
        }
    }

    public function classifyNameModify() {
        $id = Input::get('id');
        $name = Input::get('name');
        $result = Classify::where('id', $id)->update(['name' => $name, 'pushed' => 1]);
        if ($result) {
            return Response::json(['err' => 0, 'msg' => '修改成功']);
        } else {
            return Response::json(['err' => 3001, 'msg' => '修改失败']);
        }
    }
  public function getAllClassifyList() {
        $classify = Classify::orderBy('sort')->orderBy('id')->get()->toArray();
        return $classify;
    }
    public function getChildClassifyList($id) {
        $result = Classify::find($id)->toArray();
        if ($result["type"] == 6) {
            $result["link"] = $result["url"];
        } else {
            $result["link"] = "/classify/" . $id . ".html";
        }
        $classify = Classify::orderBy('sort')->orderBy('id')->get()->toArray();
        foreach ($classify as $k => &$v) {
            if ($v["type"] == 6) {
                $v["link"] = $v["url"];
            } else {
                $v["link"] = "/classify/" . $v["id"] . ".html";
            }
        }
        $result["childmenu"] = $this->toTree($classify, $id);
        return $result;
    }

    public function getClassifyPage($id) {
        $result = Classify::find($id)->toArray();
        $result["link"] = "/classify/" . $id . ".html";
        return $result;
    }

    public function display($id) {
        $page = "category.html";
        $classify = Classify::find($id)->toArray();
        $result = array();
        $print_control = new PrintController();
        $result = $print_control->getinfo($page);
        $result["classify"] = $classify;
//        var_dump($result);
//        exit();
        if (Input::has("getjson") && Input::get("getjson")) {
            return Response::json($result);
        }
        $smarty = new Smarty;
        $smarty->setCompileDir(resource_path('stviews/cache'));
        $smarty->setTemplateDir(resource_path('views'));
        $smarty->caching = false;
//        $smarty->registerPlugin('function', 'mapExt', array('PrintController', 'createMap'));
//        $smarty->registerPlugin('function', 'shareExt', array('PrintController', 'createShare'));
        $smarty->assign($result);
        @$smarty->display('list-image.html');
    }

}
