function moduleController($scope, $http) {
    $scope.moduleInit = function() {
        this._init();
    };
    $scope.moduleInit.prototype = {
        _init: function() {
            this.getModule();       //获取模块列表
            this.change_option();   //模块上传,列表切换
            this.submit_module();   //上传模块
            this.delete_module();   //删除模块
            this.module_info();     //模块详情
            this.open_module();     //开启模块
        },
        /**
         * 获取模块列表
         * 
         */
        getModule: function() {
            $.ajax({
                url: "/getmodule",
                type: "GET",
                async: false,
                dataType: "json",
                success: function(json) {
                    $.each(json, function(k, v) {
                        $("#read_module tbody").append("<tr  data-id='" + v.id + "'><td>" + v.name + "</td><td>" + v.description + "</td>\n\
                                                            <td class='text-center'>" + v.p_name + "</td>\n\
                                                            <td class='text-center'>" + (v.play == 1 ? '<i class="fa fa-lg fa-check" style="margin-right:5px;color:#337AB7;"></i>' : '<i class="fa fa-lg fa-remove" style="margin-right:5px;color:#DA3327;"></i>') + "</td>\n\
                                                            <td class='text-center switch'><a href='javascript:void(0);'><span class='module_open " + (v.open == 1 ? "selected" : "") + "' style='margin:10px;'>开启</span></a>|<a href='javascript:void(0);'><span class='module_close " + (v.open == 0 ? "selected" : "") + "'  style='margin:10px;'>关闭</span></a></td>\n\
                                                            <td class='text-center'>" + (v.settingurl ? ("<a href='" + v.settingurl + "'><i class='fa fa-lg fa-cogs'></i></a>") : "") + "<a href='javascript:void(0);'><i class='fa fa-lg fa-eye module_info'></i></a><a href='javascript:void(0);'><i class='fa fa-lg fa-arrow-up up_module'></i></a><a href='javascript:void(0);'><i class='fa fa-lg fa-trash del_module'></i></a></td></tr>");
                    });
                }
            });
        },
        /**
         * 模块上传,列表切换
         * 
         */
        change_option: function() {
            $("#edit_module li").click(function() {
                var id = $(this).data("id");
                $("#edit_module li").removeClass("active");
                $(this).addClass("active");
                $("#module_info .panel-body").hide();
                $("#module_info #" + id).show();
            })
        },
        /**
         * 
         * 删除模块
         */
        delete_module: function() {
            $(".del_module").click(function() {
                var _this = $(this);
                var id = $(this).parents("tr").data("id");
                $.ajax({
                    url: "/deletemodule?id=" + id,
                    type: "GET",
                    dataType: "json",
                    success: function(json) {
                        alert(json.msg);
                        _this.parents("tr").remove();
                    }
                });
            });
        },
        /**
         * 
         * 编辑模块
         */
        module_info: function() {
            $(".module_info").click(function() {
                var op_html = '<ul class="nav">\n\
                                <form class="navbar-form navbar-left">\n\
                                    <div class="form-group">';
                var id = $(this).parents("tr").data("id");
                $.ajax({
                    url: "/moduleinfo?id=" + id,
                    type: "GET",
                    async: false,
                    dataType: "json",
                    success: function(json) {
                        op_html += '<li><div class="panel panel-default"><label>模块名</label>: ' + json.name + '</div></li>';
                        op_html += '<li><div class="panel panel-default"><label>关联模块名</label>: ' + (json.p_name == "" ? "顶级模块" : json.p_name) + '</div></li>';
                        $.each(json.files, function(key, item) {
                            op_html += '<li><div class="panel panel-default"><label>' + key + '文件</label>： <ul class="nav" style="margin-left:50px;">';
                            $.each(item, function(k, v) {
                                op_html += '<li>' + v + '</li>';
                            })
                            op_html += '</ul></div></li>';
                        });
                        $.each(json.router, function(key, item) {
                            op_html += '<li><div class="panel panel-default"><label>后台界面路由</label>： <ul class="nav" style="margin-left:50px;">';
                            $.each(item, function(k, v) {
                                op_html += '<li><label>' + k + '</label>： ' + v + '</li>';
                            })
                            op_html += '</ul></div></li>';
                        });

                        op_html += '<li><div class="panel panel-default"><label>路由接口</label>： <ul class="nav" style="margin-left:50px;">';
                        $.each(json.routes, function(k, v) {
                            op_html += '<li>' + v.toString() + '</li>';
                        });
                        op_html += '</ul></div></li>';

                        op_html += '<li><div class="panel panel-default"><label>描  述</label>: ' + (json.description ? json.description : "") + '</div></li>';
                        op_html += '<li><div class="panel panel-default"><label>使用说明</label>: ' + (json.instructions ? json.instructions : "") + '</div></li>';
                    }
                });
                op_html += "</div></form></ul>";
                var json = {title: "查看模块详情", class: "module_info", html: op_html};
                var edit_module = Mask_panel(json);
//                $(".module_info .save").hide();
                $(".module_info .save").text("打印");
                $(".module_info .save").click(function() {
                    $(".module_info").css("top", "0px");
                    $(".module_info").css("margin-top", "0px");
                    $(".module_info .panel-body").css("height", "");
                    $(".module_info .panel-body").css("overflow", "");
                    $(".module_info .panel-body").print();
                    if ($('.content').length) {
                        UE.getEditor('content').destroy();
                    }
                    $(".mask").remove();
                });
            });
            $(".up_module").click(function() {
                var op_html = "";
                var id = $(this).parents("tr").data("id");
                $.ajax({
                    url: "/moduleinfo?id=" + id,
                    type: "GET",
                    async: false,
                    dataType: "json",
                    success: function(json) {
                        op_html += '<li data-role="name"><label>模块名</label>: <div class="top_align"><input type="text" class="form-control data"  value="' + json.name + '"><input type="hidden" class="module_id" value="' + id + '"/></div></li>';
                        var p_name_html = "";
                        var p_names = [];
                        p_names = json.p_name.split(",");
                        $.each(p_names, function(k, v) {
                            p_name_html += "<div class='p_name_div'><input type='text' class='form-control data' value='" + v + "'><span class='del_i del_p_name' onclick='del_div($(this));'><i class='fa fa-minus-circle'></i></span></div>";
                        });
                        p_name_html += '<div><span class="add_i add_p_name" onclick="add_p_name($(this));"><i class="fa fa-plus-circle"></i></span></div>';
                        op_html += '<li data-role="p_name"><label>关联模块名</label>: <div class="top_align">' + p_name_html + '</div></li>';
                        var files_html = '';
                        $.each(json.files, function(key, item) {
                            var file_html = '';
                            $.each(item, function(k, v) {
                                file_html += '<div class="file_div"><input type="text" class="form-control data" style="width:80%;" value="' + v + '" /><span class="del_i" onclick="del_div($(this));"><i class="fa fa-minus-circle"></i></span></div>';
                            });
                            files_html += '<div class="files_div"><span class="del_div del_i del_files_div" onclick="del_div($(this));"><i class="fa fa-times-circle-o"></i></span><label>名称：</label><input type="text" class="form-control top_align title" value="' + key + '" /><br /><label>文件：</label><div class="top_align"  style="width:80%;display: inline-block;margin-top:5px;">' + file_html + '<div><span class="add_i add_file" onclick="add_file($(this));"><i class="fa fa-plus-circle"></i></span></div></div></div>'
                        });
                        op_html += '<li data-role="files"><label>涉及文件</label>：<div class="top_align"  style="width:80%">' + files_html + '<div><span class="add_i add_files" onclick="add_files($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                        var router_html = '';
                        var router_names = {};
                        router_names["router"] = "名称";
                        router_names["url"] = "路由";
                        router_names["templateUrl"] = "模板文件";
                        router_names["jsurl"] = "js文件";
                        router_names["pagecontroller"] = "js控制器名称";
                        var router_place = {};
                        router_place["router"] = "(例:article)";
                        router_place["url"] = "(例：/article)";
                        router_place["templateUrl"] = "(例:page/article.html)";
                        router_place["jsurl"] = "(例：page/js/article.js)";
                        router_place["pagecontroller"] = "(例：articleController)";
                        $.each(json.router, function(key, item) {
                            router_html += '<div class="router_div"><span class="del_i del_div del_router_div" onclick="del_div($(this));"><i class="fa fa-times-circle-o"></i></span>';
                            $.each(item, function(k, v) {
                                router_html += '<div data-title="' + k + '" style="margin-bottom:5px;"><label>' + router_names[k] + '</label>：<input type="text" class="form-control data" value="' + v + '" style="margin-left:5px;" placeholder="' + router_place[k] + '" /></div>';
                            })
                            router_html += '</div>';

                        });
                        op_html += '<li data-role="router"><label>后台界面路由</label>：<div class="top_align"  style="width:80%">' + router_html + '<div><span class="add_i add_router" onclick="add_router($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                        var routes_html = "";
                        $.each(json.routes, function(k, v) {
                            routes_html += '<div class="routes_div"><input type="text" class="form-control data" style="width:80%;margin-bottom:5px;" value="' + v + '" /><span class="del_i del_routes" onclick="del_div($(this));"><i class="fa fa-minus-circle"></i></span></div>';
                        });
                        op_html += '<li data-role="routes"><label>路由接口</label>： <div class="top_align" style="width:80%;">' + routes_html + '<div><span class="add_i add_routes" onclick="add_routes($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                        var json_html = "";
                        $.each(json.json, function(k, v) {
                            json_html += '<div class="json_div" style="margin-bottom:20px;"><span class="del_i del_div del_json_div" onclick="del_div($(this));"><i class="fa fa-times-circle-o"></i></span><label>文件路径:</label><input type="text" class="form-control top_align title" style="margin-bottom:5px;width:80%;max-width:300px;" value="' + k + '" /><br /><label>json内容:</label><textarea class="form-control top_align data" style="width:80%;height:100px;">' + JSON.stringify(v) + '</textarea></div>';
                        });
                        op_html += '<li data-role="json"><label>json文件配置</label>： <div class="top_align" style="width:80%;">' + json_html + '<div><span class="add_i add_json" onclick="add_json($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                        op_html += '<li data-role="settingurl"><label>模块设置路由</label>: <div class="top_align"><input type="text" class="form-control data" placeholder="(例:#/homesetting)"  value="' + json.settingurl + '"></div></li>';
                        op_html += '<li data-role="description"><label>描  述</label>: <div class="top_align"  style="width:80%"><textarea class="form-control data" style="width:100%;height:100px;">' + (json.description ? json.description : "") + '</textarea></div></li>';
                        op_html += '<li data-role="instructions"><label>使用说明</label>: <div class="top_align"  style="width:80%"><textarea class="form-control data" style="width:100%;height:100px;">' + (json.instructions ? json.instructions : "") + '</textarea></div></li>';
                    }
                });
                $(".upgrade_module_ul").html(op_html);
                $(".upgrade_module_panel").show();
                $(".upgrade_module_panel .save").attr("disabled", false);
            });
            $(".create_module").click(function() {
                var op_html = "";
                var id = 0;
                var json = {name: "", p_name: "", files: "", router: "", routes: "", json: "", description: "", instructions: "", settingurl: ""};
                op_html += '<li data-role="name"><label>模块名</label>: <div class="top_align"><input type="text" class="form-control data"  value="' + json.name + '"><input type="hidden" class="module_id" value="' + id + '"/></div></li>';
                var p_name_html = "";
                var p_names = [];
                p_names = json.p_name.split(",");
                $.each(p_names, function(k, v) {
                    p_name_html += "<div class='p_name_div'><input type='text' class='form-control data' value='" + v + "'><span class='del_i del_p_name' onclick='del_div($(this));'><i class='fa fa-minus-circle'></i></span></div>";
                });
                p_name_html += '<div><span class="add_i add_p_name" onclick="add_p_name($(this));"><i class="fa fa-plus-circle"></i></span></div>';
                op_html += '<li data-role="p_name"><label>关联模块名</label>: <div class="top_align">' + p_name_html + '</div></li>';
                var files_html = '';
                $.each(json.files, function(key, item) {
                    var file_html = '';
                    $.each(item, function(k, v) {
                        file_html += '<div class="file_div"><input type="text" class="form-control data" style="width:80%;" value="' + v + '" /><span class="del_i" onclick="del_div($(this));"><i class="fa fa-minus-circle"></i></span></div>';
                    });
                    files_html += '<div class="files_div"><span class="del_div del_i del_files_div" onclick="del_div($(this));"><i class="fa fa-times-circle-o"></i></span><label>名称：</label><input type="text" class="form-control top_align title" value="' + key + '" /><br /><label>文件：</label><div class="top_align"  style="width:80%;display: inline-block;margin-top:5px;">' + file_html + '<div><span class="add_i add_file" onclick="add_file($(this));"><i class="fa fa-plus-circle"></i></span></div></div></div>'
                });
                op_html += '<li data-role="files"><label>涉及文件</label>：<div class="top_align"  style="width:80%">' + files_html + '<div><span class="add_i add_files" onclick="add_files($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                var router_html = '';
                var router_names = {};
                router_names["router"] = "名称";
                router_names["url"] = "路由";
                router_names["templateUrl"] = "模板文件";
                router_names["jsurl"] = "js文件";
                router_names["pagecontroller"] = "js控制器名称";
                var router_place = {};
                router_place["router"] = "(例:article)";
                router_place["url"] = "(例：/article)";
                router_place["templateUrl"] = "(例:page/article.html)";
                router_place["jsurl"] = "(例：page/js/article.js)";
                router_place["pagecontroller"] = "(例：articleController)";
                $.each(json.router, function(key, item) {
                    router_html += '<div class="router_div"><span class="del_i del_div del_router_div" onclick="del_div($(this));"><i class="fa fa-times-circle-o"></i></span>';
                    $.each(item, function(k, v) {
                        router_html += '<div data-title="' + k + '" style="margin-bottom:5px;"><label>' + router_names[k] + '</label>：<input type="text" class="form-control data" value="' + v + '" style="margin-left:5px;" placeholder="' + router_place[k] + '" /></div>';
                    })
                    router_html += '</div>';

                });
                op_html += '<li data-role="router"><label>后台界面路由</label>：<div class="top_align"  style="width:80%">' + router_html + '<div><span class="add_i add_router" onclick="add_router($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                var routes_html = "";
                $.each(json.routes, function(k, v) {
                    routes_html += '<div class="routes_div"><input type="text" class="form-control data" style="width:80%;margin-bottom:5px;" value="' + v + '" /><span class="del_i del_routes" onclick="del_div($(this));"><i class="fa fa-minus-circle"></i></span></div>';
                });
                op_html += '<li data-role="routes"><label>路由接口</label>： <div class="top_align" style="width:80%;">' + routes_html + '<div><span class="add_i add_routes" onclick="add_routes($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                var json_html = "";
                $.each(json.json, function(k, v) {
                    json_html += '<div class="json_div" style="margin-bottom:20px;"><span class="del_i del_div del_json_div" onclick="del_div($(this));"><i class="fa fa-times-circle-o"></i></span><label>文件路径:</label><input type="text" class="form-control top_align title" style="margin-bottom:5px;width:80%;max-width:300px;" value="' + k + '" /><br /><label>json内容:</label><textarea class="form-control top_align data" style="width:80%;height:100px;">' + JSON.stringify(v) + '</textarea></div>';
                });
                op_html += '<li data-role="json"><label>json文件配置</label>： <div class="top_align" style="width:80%;">' + json_html + '<div><span class="add_i add_json" onclick="add_json($(this));"><i class="fa fa-plus-circle"></i></span></div></div></li>';
                op_html += '<li data-role="settingurl"><label>模块设置路由</label>: <div class="top_align"><input type="text" class="form-control data" placeholder="(例:#/homesetting)"  value="' + json.settingurl + '"></div></li>';
                op_html += '<li data-role="description"><label>描  述</label>: <div class="top_align"  style="width:80%"><textarea class="form-control data" style="width:100%;height:100px;">' + (json.description ? json.description : "") + '</textarea></div></li>';
                op_html += '<li data-role="instructions"><label>使用说明</label>: <div class="top_align"  style="width:80%"><textarea class="form-control data" style="width:100%;height:100px;">' + (json.instructions ? json.instructions : "") + '</textarea></div></li>';

                $(".upgrade_module_ul").html(op_html);
                $(".upgrade_module_panel").show();
                $(".upgrade_module_panel .save").attr("disabled", false);
            });
            $(".upgrade_module_panel .save").click(function() {
                $(".upgrade_module_panel .save").attr("disabled", true);
                $(".upgrade_module_panel").hide();
            });
            $(".upgrade_module_panel .cancel").click(function() {
                $(".upgrade_module_panel .save").attr("disabled", true);
                $(".upgrade_module_panel").hide();
            });
            window.del_div = function(_this) {
                _this.parent("div").remove();
            }
            window.add_p_name = function(_this) {
                var html = '<div class="p_name_div">\n\
                                <input type="text" class="form-control data" placeholder="(例:Upload)" value="">\n\
                                <span class="del_i del_p_name" onclick="del_div($(this));">\n\
                                    <i class="fa fa-minus-circle"></i>\n\
                                </span>\n\
                            </div>';
                _this.parent("div").before(html);
            }
            window.add_file = function(_this) {
                var html = '<div class="file_div">\n\
                                <input type="text" class="form-control data" placeholder="(例:app/Http/Controllers/ClassifyController.php)" style="width:80%;" value="">\n\
                                <span class="del_i" onclick="del_div($(this));">\n\
                                    <i class="fa fa-minus-circle"></i>\n\
                                </span>\n\
                            </div>';
                _this.parent("div").before(html);
            }
            window.add_files = function(_this) {
                var html = '<div class="files_div">\n\
                                <span class="del_div del_i del_files_div" onclick="del_div($(this));">\n\
                                    <i class="fa fa-times-circle-o"></i>\n\
                                </span>\n\
                                <label>名称：</label><input type="text" class="form-control top_align title" placeholder="(例:include_function)" value=""><br />\n\
                                <label>文件：</label><div class="top_align" style="width:80%;display: inline-block;margin-top:5px;">\n\
                                <div class="file_div">\n\
                                    <input type="text" class="form-control data" style="width:80%;" placeholder="(例:app/Http/Controllers/include_function/print_classify.php)" value="">\n\
                                    <span class="del_i" onclick="del_div($(this));">\n\
                                        <i class="fa fa-minus-circle"></i>\n\
                                    </span>\n\
                                </div>\n\
                                <div>\n\
                                    <span class="add_i add_file" onclick="add_file($(this));">\n\
                                        <i class="fa fa-plus-circle"></i>\n\
                                    </span>\n\
                                </div>\n\
                            </div>';
                _this.parent("div").before(html);
            }
            window.add_router = function(_this) {
                var html = '<div class="router_div">\n\
                                <span class="del_i del_div del_router_div" onclick="del_div($(this));">\n\
                                    <i class="fa fa-times-circle-o"></i>\n\
                                </span>\n\
                                <div data-title="router" style="margin-bottom:5px;">\n\
                                    <label>名称</label>：<input type="text" class="form-control data" value="" style="margin-left:5px;" placeholder="(例:article)">\n\
                                </div>\n\
                                <div data-title="url" style="margin-bottom:5px;">\n\
                                    <label>路由</label>：<input type="text" class="form-control data" value="" style="margin-left:5px;" placeholder="(例：/article)">\n\
                                </div>\n\
                                <div data-title="templateUrl" style="margin-bottom:5px;">\n\
                                    <label>模板文件</label>：<input type="text" class="form-control data" value="" style="margin-left:5px;" placeholder="(例:page/article.html)">\n\
                                </div>\n\
                                <div data-title="jsurl" style="margin-bottom:5px;">\n\
                                    <label>js文件</label>：<input type="text" class="form-control data" value="" style="margin-left:5px;" placeholder="(例：page/js/article.js)">\n\
                                </div>\n\
                                <div data-title="pagecontroller" style="margin-bottom:5px;">\n\
                                    <label>js控制器名称</label>：<input type="text" class="form-control data" value="" style="margin-left:5px;" placeholder="(例：articleController)">\n\
                                </div>\n\
                            </div>';
                _this.parent("div").before(html);
            }
            window.add_routes = function(_this) {
                var html = '<div class="routes_div">\n\
                                <input type="text" class="form-control data" style="width:80%;margin-bottom:5px;" value="" placeholder="(例:Route::post(\'classify-sort\', [\'as\' => \'classify-list\',\'middleware\' => \'auth\',\'uses\' => \'ClassifyController@classifySort\']);//不可使用双引号)">\n\
                                <span class="del_i del_routes" onclick="del_div($(this));">\n\
                                    <i class="fa fa-minus-circle"></i>\n\
                                </span>\n\
                            </div>';
                _this.parent("div").before(html);
            }
            window.add_json = function(_this) {
                var html = '<div class="json_div" style="margin-bottom:20px;">\n\
                                <span class="del_i del_div del_json_div" onclick="del_div($(this));">\n\
                                    <i class="fa fa-times-circle-o"></i>\n\
                                </span>\n\
                                <label>文件路径:</label>\n\
                                <input type="text" class="form-control top_align title" style="margin-bottom:5px;width:80%;max-width:300px;" placeholder="/public/admin/json/page_type.json" value=""><br />\n\
                                <label>json内容:</label><textarea class="form-control top_align data" placeholder=\'(例:{"list":"列表","page":"单页"})\' style="width:80%;height:100px;"></textarea>\n\
                            </div>';
                _this.parent("div").before(html);
            }
            window.save_upgrad = function(_this) {
                var data = {};
                var id = $("#upgrade-module .module_id").val();
                data['name'] = $("#upgrade-module li[data-role=name] .data").val();
                var p_names = [];
                var num = 0;
                var err = 0;
                var msg = "";
                $("#upgrade-module li[data-role=p_name] .data").each(function() {
                    if ($(this).val() != "") {
                        p_names[num] = $(this).val();
                        num++;
                    }
                });
                data['p_name'] = p_names.join(",");
                var files = {};
                $("#upgrade-module li[data-role=files] .files_div").each(function() {
                    var title = $(this).find(".title").val();
                    if (title == "" && $(this).find(".data").length > 0) {
                        err = 1;
                        msg = "涉及文件-名称，不可为空！";
                    } else if (title != "" && $(this).find(".data").length > 0) {
                        files[title] = {};
                        num = 1;
                        $(this).find(".data").each(function() {
                            files[title][num] = $(this).val();
                            num++;
                        });
                    }
                });
                data['files'] = files;
                var router = {};
                num = 1;
                $("#upgrade-module li[data-role=router] .router_div").each(function() {
                    router[num] = {};
                    router[num]["url"] = $(this).find("div[data-title=url]").length > 0 ? $(this).find("div[data-title=url] .data").val() : "";
                    router[num]["router"] = $(this).find("div[data-title=router]").length > 0 ? $(this).find("div[data-title=router] .data").val() : "";
                    router[num]["templateUrl"] = $(this).find("div[data-title=templateUrl]").length > 0 ? $(this).find("div[data-title=templateUrl] .data").val() : "";
                    router[num]["jsurl"] = $(this).find("div[data-title=jsurl]").length > 0 ? $(this).find("div[data-title=jsurl] .data").val() : "";
                    router[num]["pagecontroller"] = $(this).find("div[data-title=pagecontroller]").length > 0 ? $(this).find("div[data-title=pagecontroller] .data").val() : "";
                    num++;
                });
                data['router'] = router;
                var routes = {};
                num = 1;
                $("#upgrade-module li[data-role=routes] .routes_div").each(function() {
                    $(this).find(".data").val != "" ? (routes[num++] = $(this).find(".data").val()) : "";
                });
                data['routes'] = routes;
                var json_data = {};
                $("#upgrade-module li[data-role=json] .json_div").each(function() {
                    var title = $(this).find(".title").val();
                    if (title != "") {
                        json_data[title] = $(this).find(".data").val() != "" ? JSON.parse($(this).find(".data").val()) : "";
                    } else {
                        err = 1;
                        msg = "json文件配置-文件路径，不可为空！";
                    }
                });
                if (err == 1) {
                    alert(msg);
                }
                data['json'] = json_data;
                data['settingurl'] = $("#upgrade-module li[data-role=settingurl] .data").val();
                data['description'] = $("#upgrade-module li[data-role=description] .data").val();
                data['instructions'] = $("#upgrade-module li[data-role=instructions] .data").val();
                $.ajax({
                    url: "/upgrade_module",
                    type: "POST",
                    data: {id: id, open: 0, data: data},
                    dataType: "json",
                    async: false,
                    success: function(json) {
                        alert(json.msg);
                        if (err == 0) {
                            window.location.reload();
                        }
                    }
                });

            }
        },
        /**
         * 上传模块
         * 
         */
        submit_module: function() {
            $("#add_module #add_submit").click(function() {
                var data = new FormData();
                var files = $('#module_file')[0].files;
                var file = files[0];
                data.append("module_file", file);
                $.ajax({
                    url: "/addmodule",
                    type: "POST",
                    data: data,
                    dataType: "json",
                    cache: false,
                    contentType: false, //告诉jQuery不要去处理发送的数据
                    processData: false, //不将传输数据转为对象，告诉jQuery不要去设置Content-Type请求头
                    success: function(json) {
                        alert(json.msg);
                        location.reload();
                    }
                });
            });
        },
        /**
         * 开启关闭模块
         */
        open_module: function() {
            $("#read_module .module_open").click(function() {
                if (!$(this).hasClass("selected")) {
                    var id = $(this).parents("tr").data("id");
                    var _this = $(this);
                    $.ajax({
                        url: "/openmodule",
                        aysnc: false,
                        data: {id: id, open: 1},
                        type: "POST",
                        dataType: "json",
                        success: function(json) {
                            if (json.err == 0) {
                                _this.parents("tr").find("span").removeClass("selected");
                                _this.addClass("selected");
                                var hint = new Hint_box(json.msg);
                            } else {
                                var hint = new Hint_box(json.msg);
                            }
                        }
                    });
                }
            });
            $("#read_module .module_close").click(function() {
                if (!$(this).hasClass("selected")) {
                    var id = $(this).parents("tr").data("id");
                    var _this = $(this);
                    $.ajax({
                        url: "/openmodule",
                        aysnc: false,
                        data: {id: id, open: 0},
                        type: "POST",
                        dataType: "json",
                        success: function(json) {
                            if (json.err == 0) {
                                _this.parents("tr").find("span").removeClass("selected");
                                _this.addClass("selected");
                                var hint = new Hint_box(json.msg);
                            } else {
                                var hint = new Hint_box(json.msg);
                            }
                        }
                    });
                }
            });
        }
    }
    var init = new $scope.moduleInit();
}

