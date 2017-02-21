<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;
use App\Models\Module;
use Illuminate\Support\Facades\Schema;
use ZipArchive;

class ModuleController extends Controller {

    private $database = "1tangram";
    private $mysql_dir = 'E:\wamp\bin\mysql\mysql5.6.17';

    /**
     * 添加模块
     * @return json
     */
    public function addModule() {
        set_time_limit(0);
        $file = Input::file('module_file');
        if ($file->isValid()) {
            $type = $file->getClientOriginalExtension();
            $name = $file->getClientOriginalName();
            $modules = explode('.', $name);
            $module = $modules[0];
            if ($type == "zip") {
                $up_result = $file->move(public_path('/packages'), $name);
                if ($up_result) {
                    $zip = new ZipArchive;
                    if ($zip->open(public_path('/packages/' . $name)) === true) {
                        $file_info = pathinfo($name);
                        @mkdir(public_path('packages/' . $file_info['filename']));
                        $zip->extractTo(public_path('/packages/' . $file_info['filename']));
                    }
                    $zip->close();
                    @unlink(public_path("/packages/" . $name));

                    $json_string = file_get_contents(public_path('/packages/' . $file_info['filename'] . "/config.json"));
                    $data = json_decode($json_string, true);
//                    if(count($data["files"])>0){
//                        foreach ($data["files"] as $key => $val) {
//                            if(count($val)>0){
//                                foreach ($val as $k => $v) {
//                                    if (file_exists(public_path("/packages/" . $module . "/" . $v))) {
//                                        if (file_exists(base_path($v))) {
//                                            return json_encode(array("err" => 1, "msg" => "添加模块失败，该{$v}文件已存在！"));
//                                        }
//                                    } else {
//                                        return json_encode(array("err" => 1, "msg" => "添加模块失败，文件包中{$v}文件不存在！"));
//                                    }
//                                }
//                            }
//                        }
//                    }
                    if (isset($data["sql"]) && ($data["sql"] != "" || $data["sql"] != NULL)) {
                        $condata = require config_path("database.php");
                        $bat_str = $this->mysql_dir . "\bin\mysql -u{$condata['connections'][$condata['default']]["username"]} -p{$condata['connections'][$condata['default']]["password"]} -s {$condata['connections'][$condata['default']]["database"]} < " . public_path("/packages/" . $module . "/" . $data["sql"]);
                        file_put_contents(public_path("/packages/" . $module . "/" . "sql.bat"), $bat_str);
                        exec(public_path("/packages/" . $module . "/" . "sql.bat"));
                    }
                    if (count($data["files"]) > 0) {
                        foreach ($data["files"] as $key => $val) {
                            if (count($val) > 0) {
                                foreach ($val as $k => $v) {
                                    $this->dir_exist(base_path($v));
                                    @copy(public_path("/packages/" . $module . "/" . $v), base_path($v));
                                }
                            }
                        }
                    }
//                    $left_sidebar = file_get_contents(public_path("/admin/json/left_sidebar.json"));
//                    $left_sidebar = json_decode($left_sidebar, true);
//                    $left_sidebar[$module] = $data['left_sidebar'];
//                    file_put_contents(public_path("/admin/json/left_sidebar.json"), json_encode($left_sidebar));
//                    $top_sidebar = file_get_contents(public_path("/admin/json/top_sidebar.json"));
//                    $top_sidebar = json_decode($top_sidebar, true);
//                    $top_sidebar[$module] = $data['top_sidebar'];
//                    file_put_contents(public_path("/admin/json/top_sidebar.json"), json_encode($top_sidebar));
//                    
//                    $json_routes = file_get_contents(app_path("/Http/routes.json"));
//                    $routes = json_decode($json_routes, true);
//                    $routes[$module] = $data['route'];
//                    file_put_contents(app_path("/Http/routes.json"), json_encode($routes));
//                    $this->product_routes($routes);
//                    
//
//                    $json_router = file_get_contents(public_path("/admin/json/router.json"));
//                    $router = json_decode($json_router, true);
//                    $router[$module] = $data['page'];
//                    
//                    $router = json_encode($router);
//                    $router = str_replace("\/", "/", $router);
//                    file_put_contents(public_path("/admin/json/router.json"), $router);
                    @$this->deldir(public_path("/packages/" . $module));
                    $have_module = Module::where("name", $module)->get()->toArray();
                    if (!empty($have_module)) {
                        $module_id = Module::where("name", $module)->Update(array("name" => $data["name"], "files" => json_encode(isset($data["files"])?$data["files"]:[]), "routes" => json_encode(isset($data["routes"])?$data["routes"]:[]), "router" => json_encode(isset($data["router"])?$data["router"]:[]), "description" => $data["description"], "instructions" => $data["instructions"], "p_name" => $data["p_name"], "json" => json_encode(isset($data["json"])?$data["json"]:[]), "settingurl" => $data["settingurl"], "open" => 0));
                    } else {
                        $module_id = Module::insertGetId(array("name" => $module, "files" => json_encode(isset($data["files"])?$data["files"]:[]), "routes" => json_encode(isset($data["routes"])?$data["routes"]:[]), "router" => json_encode(isset($data["router"])?$data["router"]:[]), "description" => $data["description"], "instructions" => $data["instructions"], "p_name" => $data["p_name"], "json" => json_encode(isset($data["json"])?$data["json"]:[]), "settingurl" => $data["settingurl"], "open" => 0));
                    }
                    if ($module_id) {
                        return json_encode(array("err" => 0, "msg" => "添加模块成功"));
                    } else {
                        return json_encode(array("err" => 1, "msg" => "添加模块失败，插入数据库失败！"));
                    }
                }
            }
        }
    }

    /**
     * 生成laravel接口路由
     * @param array $routes
     */
    private function product_routes($routes) {
        $str = "<?php \r\n";
        foreach ($routes as $val) {
            foreach ($val as $v) {
                $str .=$v . "\r\n";
            }
        }
        file_put_contents(app_path("/Http/routes.php"), $str);
    }

    private function dir_exist($path) {
        $dir = dirname($path);
        if (is_dir($dir)) {
            return true;
        } else {
            $this->dir_exist($dir);
            mkdir($dir, 0777, true);
        }
    }

    /**
     * 删除模块
     * @return json
     */
    public function deleteModule() {
        $id = input::get("id");
        $datas = Module::where("id", $id)->get()->toArray();
        $data = $datas[0];
        $module = $data["name"];
        foreach (json_decode($data["files"]) as $vals) {
            foreach ($vals as $k => $v) {
                if (file_exists(base_path($v))) {
                    @unlink(base_path($v));
                }
            }
        }
        foreach (json_decode($data["json"], true) as $k => $v) {
            $json = file_get_contents(base_path($k));
            $json = json_decode($json, true);
            unset($json[$module]);
            $json = json_encode($json);
            $json = str_replace("\/", "/", $json);
            file_put_contents(base_path($k), $json);
        }
//        $left_sidebar = file_get_contents(public_path("/admin/json/left_sidebar.json"));
//        $left_sidebar = json_decode($left_sidebar, true);
//        unset($left_sidebar[$module]);
//        $left_sidebar = json_encode($left_sidebar);
//        $left_sidebar = str_replace("\/", "/", $left_sidebar);
//        file_put_contents(public_path("/admin/json/left_sidebar.json"), $left_sidebar);
//
//        $top_sidebar = file_get_contents(public_path("/admin/json/top_sidebar.json"));
//        $top_sidebar = json_decode($top_sidebar, true);
//        unset($top_sidebar[$module]);
//        $top_sidebar = json_encode($top_sidebar);
//        $top_sidebar = str_replace("\/", "/", $top_sidebar);
//        file_put_contents(public_path("/admin/json/top_sidebar.json"), $top_sidebar);

        $json_routes = file_get_contents(app_path("/Http/routes.json"));
        $routes = json_decode($json_routes, true);
        unset($routes[$module]);
        $this->product_routes($routes);
        $routes = json_encode($routes);
        $routes = str_replace("\/", "/", $routes);
        file_put_contents(app_path("/Http/routes.json"), $routes);


        $json_router = file_get_contents(public_path("/admin/json/router.json"));
        $router = json_decode($json_router, true);
        unset($router[$module]);
        $router = json_encode($router);
        $router = str_replace("\/", "/", $router);
        file_put_contents(public_path("/admin/json/router.json"), $router);

        Module::where("name", $module)->delete();
        return json_encode(array("err" => 0, "msg" => "删除模块成功"));
    }

    /**
     * 删除文件夹
     * @param string $dir
     * @return boolean
     */
    private function deldir($dir) {
        $dh = opendir($dir);
        while ($file = readdir($dh)) {
            if ($file != "." && $file != "..") {
                $fullpath = $dir . "/" . $file;
                if (!is_dir($fullpath)) {
                    @unlink($fullpath);
                } else {
                    $this->deldir($fullpath);
                }
            }
        }
        closedir($dh);
        if (rmdir($dir)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取功能模块
     * @return json
     */
    public function getModule() {
        $result = Module::get();
        $names = Module::where("open", 1)->lists("name")->toArray();
        foreach ($result as $key => $data) {
            $result[$key]["files"] = json_decode($data["files"]);
            $result[$key]["routes"] = json_decode($data["routes"]);
            $result[$key]["router"] = json_decode($data["router"]);
            $str = "";
            $play = 1;
            if ($data["p_name"] != "") {
                $p_names = explode(',', $data["p_name"]);
                foreach ($p_names as $p_name) {
                    if (in_array($p_name, (array) $names)) {
                        $str.='<font style="color:#337AB7;">' . $p_name . '</font>&nbsp&nbsp&nbsp';
                    } else {
                        $str.='<font style="color:#DA3327;">' . $p_name . '</font>&nbsp&nbsp&nbsp';
                        $play = 0;
                    }
                }
            } else {
                $str.='顶级模块';
            }
            $result[$key]["p_name"] = $str;
            $result[$key]["play"] = $play;
            $result[$key]["open"] = ($data["open"] == 1 ? 1 : 0);
        }
        return Response::json($result);
    }

    /**
     * 功能模块详情
     * @return json
     */
    public function ModuleInfo() {
        $id = input::get("id");
        $result = Module::where("id", $id)->first();
        $result->files = json_decode($result->files);
        $result->routes = json_decode($result->routes);
        $result->router = json_decode($result->router);
        $result->json = json_decode($result->json);
        $result->p_name = $result->p_name;
        return Response::json($result);
    }

    /**
     * 功能模块开启关闭
     * @return json
     */
    public function OpenModule() {
        $id = input::get("id");
        $module = Module::where("id", $id)->first();
        $module_name = $module->name;
        $open = input::get("open");
        if ($open == 0) {
            foreach (json_decode($module->json, true) as $k => $v) {
                $json = file_get_contents(base_path($k));
                $json = json_decode($json, true);
                unset($json[$module_name]);
                $json = json_encode($json);
                $json = str_replace("\/", "/", $json);
                file_put_contents(base_path($k), $json);
            }
//            $left_sidebar = file_get_contents(public_path("/admin/json/left_sidebar.json"));
//            $left_sidebar = json_decode($left_sidebar, true);
//            unset($left_sidebar[$module_name]);
//            $left_sidebar = json_encode($left_sidebar);
//            $left_sidebar = str_replace("\/", "/", $left_sidebar);
//            file_put_contents(public_path("/admin/json/left_sidebar.json"), $left_sidebar);
//
//            $top_sidebar = file_get_contents(public_path("/admin/json/top_sidebar.json"));
//            $top_sidebar = json_decode($top_sidebar, true);
//            unset($top_sidebar[$module_name]);
//            $top_sidebar = json_encode($top_sidebar);
//            $top_sidebar = str_replace("\/", "/", $top_sidebar);
//            file_put_contents(public_path("/admin/json/top_sidebar.json"), $top_sidebar);

            $json_routes = file_get_contents(app_path("/Http/routes.json"));
            $routes = json_decode($json_routes, true);
            unset($routes[$module_name]);
            $this->product_routes($routes);
            $routes = json_encode($routes);
            $routes = str_replace("\/", "/", $routes);
            file_put_contents(app_path("/Http/routes.json"), $routes);


            $json_router = file_get_contents(public_path("/admin/json/router.json"));
            $router = json_decode($json_router, true);
            unset($router[$module_name]);
            $router = json_encode($router);
            $router = str_replace("\/", "/", $router);
            file_put_contents(public_path("/admin/json/router.json"), $router);
        } else {
            foreach (json_decode($module->json, true) as $k => $v) {
                $json = file_get_contents(base_path($k));
                $json = json_decode($json, true);
                if ($v) {
                    $json[$module_name] = $v;
                }
                $json = json_encode($json);
                $json = str_replace("\/", "/", $json);
                file_put_contents(base_path($k), $json);
            }
//            $left_sidebar = file_get_contents(public_path("/admin/json/left_sidebar.json"));
//            $left_sidebar = json_decode($left_sidebar, true);
//            if ($module->left_sidebar) {
//                $left_sidebar[$module_name] = json_decode($module->left_sidebar, true);
//            }
//            $left_sidebar = json_encode($left_sidebar);
//            $left_sidebar = str_replace("\/", "/", $left_sidebar);
//            file_put_contents(public_path("/admin/json/left_sidebar.json"), $left_sidebar);
//
//            $top_sidebar = file_get_contents(public_path("/admin/json/top_sidebar.json"));
//            $top_sidebar = json_decode($top_sidebar, true);
//            if ($module->top_sidebar) {
//                $top_sidebar[$module_name] = json_decode($module->top_sidebar, true);
//            }
//            $top_sidebar = json_encode($top_sidebar);
//            $top_sidebar = str_replace("\/", "/", $top_sidebar);
//            file_put_contents(public_path("/admin/json/top_sidebar.json"), $top_sidebar);

            $json_routes = file_get_contents(app_path("/Http/routes.json"));
            $routes = json_decode($json_routes, true);
            $routes[$module_name] = json_decode($module->routes, true);
            $this->product_routes($routes);
            $routes = json_encode($routes);
            $routes = str_replace("\/", "/", $routes);
            file_put_contents(app_path("/Http/routes.json"), $routes);


            $json_router = file_get_contents(public_path("/admin/json/router.json"));
            $router = json_decode($json_router, true);
            $router[$module_name] = json_decode($module->router, true);
            $router = json_encode($router);
            $router = str_replace("\/", "/", $router);
            file_put_contents(public_path("/admin/json/router.json"), $router);
        }
        $ret = Module::where("id", $id)->update(array("open" => $open));
        if ($ret) {
            return Response::json(array("err" => 0, "msg" => "修改成功"));
        } else {
            return Response::json(array("err" => 0, "msg" => "修改失败"));
        }
    }

    public function upgrade_module() {
//        var_dump(Input::get("data"));exit();
        $id = Input::get("id");
        $data = Input::get("data");
        $path=  public_path("/packages/".$data["name"].".zip");
        if ($id > 0) {
            $this->OpenModule();
        }
        file_put_contents( public_path("/packages/config.json"), json_encode($data));
        $zip = new ZipArchive;
        if ($zip->open($path, ZipArchive::CREATE) === TRUE) {
            foreach ($data["files"] as $files) {
                foreach ($files as $file_dir) {
                    $zip->addFile(base_path($file_dir), $file_dir);
                }
            }
            $zip->addFile(public_path("/packages/config.json"), "config.json");
            $zip->close();
        }
        if ($id > 0) {
            $module_id = Module::where("id", $id)->Update(array("name" => $data["name"], "files" => json_encode(isset($data["files"])?$data["files"]:[]), "routes" => json_encode(isset($data["routes"])?$data["routes"]:[]), "router" => json_encode(isset($data["router"])?$data["router"]:[]), "description" => $data["description"], "instructions" => $data["instructions"], "p_name" => $data["p_name"], "json" => json_encode(isset($data["json"])?$data["json"]:[]), "settingurl" => $data["settingurl"], "open" => 0));
            return Response::json(array("err"=>0,"msg"=>"升级功能模块成功！"));
        } else {
            $module_id = Module::insertGetId(array("name" => $data["name"], "files" => json_encode(isset($data["files"])?$data["files"]:[]), "routes" => json_encode(isset($data["routes"])?$data["routes"]:[]), "router" => json_encode(isset($data["router"])?$data["router"]:[]), "description" => $data["description"], "instructions" => $data["instructions"], "p_name" => $data["p_name"], "json" => json_encode(isset($data["json"])?$data["json"]:[]), "settingurl" => $data["settingurl"], "open" => 0));
            return Response::json(array("err"=>0,"msg"=>"创建功能模块成功！"));
        }
        
    }

}
