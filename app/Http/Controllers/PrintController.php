<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Smarty;
use App\Models\Setting;
use App\Models\InfoSetting;

class PrintController extends Controller {

    public function setting() {
        if (Input::has("module")) {
            $module = Input::get("module");
        } else {
            $module = "page";
        }
        if (Input::get("do") == "get") {
            $setting = Setting::where("module", $module)->first();
            if ($setting == null || json_decode($setting->value) == "" || json_decode($setting->value) == null) {
                return Response::json(array("empty" => 1));
            } else {
                return Response::json(array("empty" => 0, "data" => json_decode($setting->value)));
            }
        }
        if (Input::get("do") == "modify") {
            $setting = Setting::where("module", $module)->first();
            if ($setting == null) {
                $setting = new Setting;
                $setting->module = $module;
            }
            $setting->value = json_encode(Input::get("value"));
            $setting->save();
            return Response::json(array("msg" => "保存成功！", "err" => 0));
        }
        if (Input::get("do") == "filemodify") {
            if (strpos($_FILES["file"]["name"], ".json") === false) {
                return Response::json(array("msg" => "保存失败！", "err" => 1));
            }
            $data = file_get_contents($_FILES["file"]["tmp_name"]);
            $setting = Setting::where("module", $module)->first();
            if ($setting == null) {
                $setting = new Setting;
                $setting->module = $module;
            }
            $setting->value = $data;
            $setting->save();
            return Response::json(array("msg" => "保存成功！", "err" => 0));
        }
    }

    public function info_setting() {
        if (Input::get("do") == "get") {
            $info = InfoSetting::where("module", "page")->first();
            if ($info == null || json_decode($info->value) == null || json_decode($info->value) == "") {
                return Response::json(array("empty" => 1));
            } else {
                return Response::json(array("empty" => 0, "data" => json_decode($info->value)));
            }
        }
        if (Input::get("do") == "modify") {
            $info = InfoSetting::where("module", "page")->first();
            $value = json_encode(Input::get("value"));
            if ($info == null) {
                InfoSetting::insert(array("module" => "page", "value" => $value));
            } else {
                InfoSetting::where("module", "page")->update(array("value" => $value));
            }
            return Response::json(array("msg" => "保存成功！", "err" => 0));
        }
    }

    public function home() {
        include "/include_function/print_classify.php";
        fun();
        $setting = new SettingController();
        $data = (array) $setting->getinfo();
        $article = new ArticleController();
        $about = $article->getArticleInfo(19);
        $aside = $article->getArticlelist(443);
        $data["about"] = $about;
        $data["aside"] = $aside;
        $data["aside"]["name"] = "侧边栏";
        $data["aside"]["en_name"] = "aside";
        $data["pro"] = $aside;
//        var_dump($data);
//        exit();
//        $data["title"]="标题";
//        $data["headscript"]="";
//        $data["keywords"]="";
//        $data["description"]="";
        $data["favicon"] = "";
        $data["site_url"] = "";
//        $data["logo"]="";
//        $data["global"]=array();
//        $data["about"]=array();
//        $data["about"]["name"]="关于我们";
//        $data["about"]["en_name"]="guan yu wo men";
//        $data["about"]["description"]="描述";
//        $data["about"]["link"]="images/banner.jpg";
//        $data["about"]["image"]="http://www.baidu.com";
        $this->display($data, "index.html");
    }

    public function getinfo($page) {
        header("Content-Type: text/html; charset=UTF-8");
        $prints = json_decode(file_get_contents(app_path("Http/print.json")));
        foreach ($prints as $vs) {
            foreach ($vs as $v) {
                include $v;
            }
        }
        $data = array();
        $pagename_setting = Setting::where("module", "pagename")->first();
        $page_infosetting = InfoSetting::where("module", "page")->first();
        $pages = json_decode($page_infosetting->value);
        $pagenames = array();
        foreach (json_decode($pagename_setting->value) as $v) {
            $pagenames[$v->filename] = $v;
        }
        $need_pages = $this->getpage($page, $pagenames);
        foreach ($need_pages as $v) {
            if (isset($pages->$v)) {
                foreach ($pages->$v as $v1) {
                    $fun = "getinfo_" . $v1->type;
                    if (function_exists($fun)) {
                        $data[$v1->role] = $fun($v1);
                    } else {
                        echo $fun . "不存在！";
                    }
                }
            }
        }
        return $data;
    }

    private function getpage($page, $pagenames) {
        $pages = array();
        if ($pagenames[$page]->includepage == "") {
            return array(str_replace('.', '-', $page));
        } else {
            $include_pages = explode(',', $pagenames[$page]->includepage);
            foreach ($include_pages as $value) {
                $pages = array_merge($pages, $this->getpage($value, $pagenames));
            }
            return array_merge(array(str_replace('.', '-', $page)), $pages);
        }
    }
    public function print_index(){
        $page="index.html";
        $result=array();
        $result=$this->getinfo($page);
//        var_dump($result);exit();
        if(Input::has("getjson")&&Input::get("getjson")){
            $result["tpl_page"]='content-news.html';
            return Response::json($result);
        }
        $smarty = new Smarty;
        $smarty->setCompileDir(resource_path('views/cache'));
        $smarty->setTemplateDir(resource_path('views'));
        $smarty->caching=false;
        $smarty->assign($result);
        @$smarty->display($page);
    }
    private function display($data, $tpl_file) {
        $smarty = new Smarty();
        $smarty->template_dir = resource_path('/views/');
        $smarty->cache_dir = resource_path('/views/cache/');
        $smarty->caching = false;
        $smarty->compile_dir = resource_path('/views/cache/');
        $smarty->assign($data);
        $smarty->display($tpl_file);
    }

    public function output_json() {
        $data = array();
        header("Content-Type: text/html; charset=UTF-8");
        $prints = json_decode(file_get_contents(app_path("Http/print.json")));
        foreach ($prints as $k => $vs) {
            foreach ($vs as $v) {
                include $v;
            }
            $fun = $k . "_" . "url";
            if (function_exists($fun)) {
                $data[$k] = $fun();
            } else {
                echo $fun . "不存在！";
            }
        }
        foreach ($data as $vs) {
            foreach ($vs as $v) {
                $json = file_get_contents("http://www.tangram.com".$v["dir"] . $v["file"] . ".html");
                if (!is_dir(public_path("/packages/" . $v["dir"]))) {
                    @mkdir(public_path("/packages/" . $v["dir"]), 0777);
                }
                file_put_contents(public_path("/packages/" . $v["dir"] . $v["file"] . ".json"), $json);
            }
        }
    }

}
