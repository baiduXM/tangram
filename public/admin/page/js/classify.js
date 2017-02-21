function classifyController($scope) {
    $scope.classifyInit = function() {
        this._init();
    }
    $scope.classifyInit.prototype = {
        _init: function() {
            this.classifylist();
            this.classify_checked_all();
            this.classify_sort();
            this.classify_show();
            this.edit_classify();
            this.add_classify();
            this.del_classify();
        },
        /**
         * 
         * 分类列表
         */
        classifylist: function() {
            var type = {};
            type[1] = "文字列表";
            type[2] = "图片列表";
            type[3] = "图文列表";
            type[4] = "内容单页";
//            type[5] = "留言板";
            type[6] = "外链";
//            type[9] = "万用表单";
            $.ajax({
                url: "/classify-list",
                async: false,
                dataType: "json",
                type: "GET",
                success: function(json) {
                    var html = '';
                    if (json.data != null) {
                        $.each(json.data, function(k, v) {
                            html += '<tr data-id="' + v.id + '"><td class="text-center"><input type="checkbox" class="classify_checked"/></td><td><input type="text" class="classify_name classify_deep_1" value="' + v.name + '" /></td><td>' + type[v.type] + '</td><td class="text-center"><img src="' + v.img + '" style="width:100px;height:56px;"/></td><td class="text-center"><i class="iconfont ' + v.icon + '"></i></td><td class="text-center"><input type="text" style="width:30px;" class="classify_sort" value="' + v.sort + '" /></td><td class="switch text-center"><a href="javascript:void(0)" class="classify_show ' + (v.pc_show == 1 ? "selected" : "") + '">显示</a>|<a href="javascript:void(0)" class="classify_hide ' + (v.pc_show == 0 ? "selected" : "") + '">隐藏</a></td><td class="text-center"><a href="javascript:void(0);"><i class="fa fa-lg fa-edit edit_classify"></i></a><a href="javascript:void(0);"><i class="fa fa-lg fa-trash del_classify"></i></a></td></tr>';
                            if (v.childmenu != null) {
                                $.each(v.childmenu, function(k1, v1) {
                                    html += '<tr data-id="' + v1.id + '" data-tid="' + v.id + '"><td class="text-center" ><input type="checkbox" class="classify_checked" /></td><td><div class="text-right classify_deep_2_div">|——</div><input type="text" class="classify_name  classify_deep_2" value="' + v1.name + '" /></td><td>' + type[v1.type] + '</td><td class="text-center"><img src="' + v1.img + '" style="width:100px;height:56px;"/></td><td class="text-center"><i class="iconfont ' + v1.icon + '"></i></td><td class="text-center"><input type="text" style="width:30px;" class="classify_sort" value="' + v1.sort + '" /></td><td class="switch text-center"><a href="javascript:void(0)" class="classify_show ' + (v1.pc_show == 1 ? "selected" : "") + '">显示</a>|<a href="javascript:void(0)" class="classify_hide ' + (v1.pc_show == 0 ? "selected" : "") + '">隐藏</a></td><td class="text-center"><a href="javascript:void(0);"><i class="fa fa-lg fa-edit edit_classify"></i></a><a href="javascript:void(0);"><i class="fa fa-lg fa-trash del_classify"></i></a></td></tr>';
                                    if (v1.childmenu != null) {
                                        $.each(v1.childmenu, function(k2, v2) {
                                            html += '<tr data-id="' + v2.id + '" data-tid="' + v1.id + '"><td class="text-center"><input type="checkbox" class="classify_checked"/></td><td><div class="text-right classify_deep_3_div">|——|——</div><input type="text" class="classify_name classify_deep_3" value="' + v2.name + '" /></td><td>' + type[v2.type] + '</td><td class="text-center"><img src="' + v2.img + '" style="width:100px;height:56px;"/></td><td class="text-center"><i class="iconfont ' + v2.icon + '"></i></td><td class="text-center"><input type="text" style="width:30px;" class="classify_sort" value="' + v2.sort + '" /></td><td class="switch text-center"><a href="javascript:void(0)" class="classify_show ' + (v2.pc_show == 1 ? "selected" : "") + '">显示</a>|<a href="javascript:void(0)" class="classify_hide ' + (v2.pc_show == 0 ? "selected" : "") + '">隐藏</a></td><td class="text-center"><a href="javascript:void(0);"><i class="fa fa-lg fa-edit edit_classify"></i></a><a href="javascript:void(0);"><i class="fa fa-lg fa-trash del_classify"></i></a></td></tr>';
                                        });
                                    }
                                });
                            }
                        });
                    }
                    $("#classify_list tbody").html(html);
                }
            });
        },
        /**
         * 
         * 全选操作
         */
        classify_checked_all: function() {
            $("#classify_list .classify_checked_all").change(function() {
                var ret = $(this).is(":checked");
                if (ret) {
                    $("#classify_list .classify_checked").prop("checked", true);
                } else {
                    $("#classify_list .classify_checked").prop("checked", false);
                }
            });
            $("#classify_list .classify_checked").change(function() {
                var ret = $(this).is(":checked");
                var id = $(this).parents("tr").data("id");
                if (ret) {
                    $("#classify_list tr[data-tid=" + id + "]").find(".classify_checked").prop("checked", true);
                    $("#classify_list tr[data-tid=" + id + "]").each(function() {
                        var id = $(this).data("id");
                        $("#classify_list tr[data-tid=" + id + "]").find(".classify_checked").prop("checked", true);
                    });
                } else {
                    $("#classify_list tr[data-tid=" + id + "]").find(".classify_checked").prop("checked", false);
                    $("#classify_list tr[data-tid=" + id + "]").each(function() {
                        var id = $(this).data("id");
                        $("#classify_list tr[data-tid=" + id + "]").find(".classify_checked").prop("checked", false);
                    });
                }
            });
        },
        /**
         * 
         * 分类栏目排序
         */
        classify_sort: function() {
            $("#classify_list .classify_sort").change(function() {
                $.ajax({
                    url: "/classify-sort",
                    async: false,
                    type: "POST",
                    data: {indexlist: [{id: $(this).parents("tr").data("id"), index: $(this).val()}]},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("修改成功");
                        } else {
                            var hint = new Hint_box("修改失败");
                        }
                    }
                });
            });
        },
        /**
         * 
         * 分类显示
         */
        classify_show: function() {
            $("#classify_list .classify_show").click(function() {
                if (!$(this).hasClass("selected")) {
                    var id = $(this).parents("tr").data("id");
                    var _this = $(this);
                    $.ajax({
                        url: "/classify-show",
                        aysnc: false,
                        data: {id: id, operate: "pc_show", value: 1},
                        type: "POST",
                        dataType: "json",
                        success: function(json) {
                            if (json.err == 0) {
                                _this.parents("tr").find(".switch a").removeClass("selected");
                                _this.addClass("selected");
                                var hint = new Hint_box();
                            } else {
                                var hint = new Hint_box(json.msg);
                            }
                        }
                    });
                }
            });
            $("#classify_list .classify_hide").click(function() {
                if (!$(this).hasClass("selected")) {
                    var id = $(this).parents("tr").data("id");
                    var _this = $(this);
                    $.ajax({
                        url: "/classify-show",
                        aysnc: false,
                        data: {id: id, operate: "pc_show", value: 0},
                        type: "POST",
                        dataType: "json",
                        success: function(json) {
                            if (json.err == 0) {
                                _this.parents("tr").find(".switch a").removeClass("selected");
                                _this.addClass("selected");
                                var hint = new Hint_box();
                            } else {
                                var hint = new Hint_box(json.msg);
                            }
                        }
                    });
                }
            });
        },
        /**
         * 
         * 分类编辑
         */
        edit_classify: function() {
            $("#classify_list .edit_classify").click(function() {
                var html = '<option value="0">顶级栏目</option>';
                $.ajax({
                    url: "/classify-list",
                    async: false,
                    dataType: "json",
                    type: "GET",
                    success: function(json) {
                        $.each(json.data, function(k, v) {
                            html += '<option value="' + v.id + '">' + v.name + '</option>';
                            if (v.childmenu != null) {
                                $.each(v.childmenu, function(k1, v1) {
                                    html += '<option value="' + v1.id + '">&nbsp;&nbsp;&nbsp;|--' + v1.name + '</option>';
                                    if (v1.childmenu != null) {
                                        $.each(v1.childmenu, function(k2, v2) {
                                            html += '<option value="' + v2.id + '" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--|--' + v2.name + '</option>';
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
                var id = $(this).parents("tr").data("id");
                var edit_html = '<form class="navbar-form navbar-left">\n\
                                        <div class="form-group">\n\
                                            <ul class="nav classify-info">';
                edit_html += '<li class="class_all"><label>父级栏目</label>: <select class="form-control p_id" disabled>' + html + '</select></li>';
                edit_html += '<li style="display:none;"><input type="hidden" name="id" class="id" /></li>';
                edit_html += '<li class="class_all"><label>栏目名称</label>: <input type="text" name="name" class="name form-control" /></li>';
                edit_html += '<li class="class_all"><label>英文名称</label>: <input type="text" name="en_name" class="en_name form-control"  /></li>';
                edit_html += '<li class="class_all"><label>栏目类型</label>: \n\
                                            <select name="type" class="form-control type">\n\
                                                <option selected="selected" value="选择">请选择</option>\n\
                                                <option value="1">文字列表</option>\n\
                                                <option value="2">图片列表</option>\n\
                                                <option value="3">图文列表</option>\n\
                                                <option value="4">内容单页</option>\n\
                                                <option value="6">外链</option>\n\
                                            </select></li>';
                edit_html += '<li class="class_9"><label>表单关联</label>: <input type="text" name="form_id" class="form_id form-control"  /></li>';
                edit_html += '<li class="class_all"><label>站点展示</label>: \n\
                                                <div class="checkbox"><label><input type="checkbox" name="pc_show" class="pc_show" />显示 </label></div>\n\
                                                <div class="checkbox"><label> <input type="checkbox" name="footer_show" class="footer_show" />底部导航</label></div>\n\
                                            </li>';
                edit_html += '<li class="class_6"><label>链接地址</label>: <input type="text" name="url" class="url form-control"  />&nbsp&nbsp&nbsp<select id="open_page" class="open_page"><option value="1">本页打开</option><option value="2">新增页打开</option></select></li>';
                edit_html += '<li class="class_1 class_2 class_3"><label>内页版本</label>: <select id="article_type" class="article_type form-control"><option value="1">新闻正文</option><option value="2">产品正文</option></select></li>';
                edit_html += '<li class="class_all"><label>关 键 字</label>: <input type="text" name="meta_keywords" class="meta_keywords form-control"  /></li>';
                edit_html += '<li class="class_all"><label>栏目图标</label>: <button class="btn btn-default classify_icon" role="iconpicker"></button></li>';
                edit_html += '<li class="class_all" style="height:56px;"><label>栏目图片</label>: <input type="text" name="img" class="img form-control"  style="display:none;"/><img class="imgpre" src=""/><div class="img-add-button"><i class="fa fa-plus"></i><input type="file" class="imgchange"  accept="image/jpeg,image/png"/></div></li>';
                edit_html += '<li class="class_all"><label>栏目简介</label>: <textarea name="meta_description" class="form-control meta_description"></textarea></li>';
                edit_html += '<li class="class_4"><label>单页编辑</label>: <script id="content" type="text/plain"></script></li>';
                edit_html += '</ul></div></form>';
                var json = {title: "编辑栏目", class: "edit_classify_panel", html: edit_html};
                var edit_classify = Mask_panel(json);
                myiconselected();
                var ue = UE.getEditor('content');
                /**
                 * 对数据进行赋值
                 */
                $.ajax({
                    url: "/classify-info",
                    type: "GET",
                    data: {id: id},
                    async: false,
                    dataType: "json",
                    success: function(json) {
                        $(".edit_classify_panel .p_id").val(json.data.p_id);
                        $(".edit_classify_panel .id").val(json.data.id);
                        $(".edit_classify_panel .name").val(json.data.name);
                        $(".edit_classify_panel .en_name").val(json.data.en_name);
                        $(".edit_classify_panel .type").val(json.data.type);
                        $(".edit_classify_panel .open_page").val(json.data.open_page);
                        $(".edit_classify_panel .form_id").val(json.data.form_id);
                        $(".edit_classify_panel .url").val(json.data.url);
                        $(".edit_classify_panel .article_type").val(json.data.article_type);
                        $(".edit_classify_panel .meta_keywords").val(json.data.meta_keywords);
                        $(".edit_classify_panel .img").val(json.data.img);
                        $(".edit_classify_panel .classify_icon").find("input").val(json.data.icon);
                        $(".edit_classify_panel .classify_icon").find("i").addClass("iconfont " + json.data.icon);
                        $(".edit_classify_panel .imgpre").attr("src", json.data.img);
                        $(".edit_classify_panel .meta_description").text(json.data.meta_description);
                        ue.addListener("ready", function() {
                            ue.setContent(json.data.content);
                        });
                        if (json.data.pc_show == 1) {
                            $(".edit_classify_panel .pc_show").prop("checked", true);
                        }
                        if (json.data.footer_show == 1) {
                            $(".edit_classify_panel .footer_show").prop("checked", true);
                        }
                        $(".classify-info li").hide();
                        $(".classify-info .class_all").show();
                        $(".classify-info .class_" + json.data.type).show();
                    }
                });
                /**
                 * 改变分类类型
                 */
                $(".edit_classify_panel .type").change(function() {
                    var type = $(this).val();
                    $(".edit_classify_panel li").hide();
                    $(".edit_classify_panel .class_all").show();
                    $(".edit_classify_panel .class_" + type).show();
                });
                /**
                 * 上传栏目图片
                 */
                $(".img-add-button .imgchange").change(function() {
                    var data = new FormData();
                    if ($(".imgchange")[0].files.length > 0) {
                        data.append("image", $(".imgchange")[0].files[0]);
                        $.ajax({
                            url: "/upload-image",
                            type: "POST",
                            cache: false,
                            processData: false,
                            contentType: false,
                            data: data,
                            success: function(json) {
                                if (json.err == 0) {
                                    $(".edit_classify_panel .img").val(json.url);
                                    $(".edit_classify_panel .imgpre").attr("src", json.url);
                                }
                                alert(json.msg);
                            }
                        });
                    }
                });
                /**
                 * 点击保存，保存分类
                 */
                $(".edit_classify_panel .save").click(function() {
                    var data = {};
                    data['id'] = $(".edit_classify_panel .id").val();
                    data['p_id'] = $(".edit_classify_panel .p_id").val();
                    data['name'] = $(".edit_classify_panel .name").val();
                    data['en_name'] = $(".edit_classify_panel .en_name").val();
                    data['type'] = $(".edit_classify_panel .type").val();
                    data['open_page'] = $(".edit_classify_panel .open_page").val();
                    data['form_id'] = $(".edit_classify_panel .form_id").val();
                    data['url'] = $(".edit_classify_panel .url").val();
                    data['article_type'] = $(".edit_classify_panel .article_type").val();
                    data['keywords'] = $(".edit_classify_panel .meta_keywords").val();
                    data['img'] = $(".edit_classify_panel .img").val();
                    data['description'] = $(".edit_classify_panel .meta_description").val();
                    data['icon'] = $(".edit_classify_panel .classify_icon").find("input").val();
                    data["content"] = ue.getContent();
                    data['pc_show'] = ($(".pc_show[type='checkbox']").is(':checked')) ? 1 : 0;
                    data['footer_show'] = ($(".footer_show[type='checkbox']").is(':checked')) ? 1 : 0;
                    $.ajax({
                        url: "/classify-modify",
                        data: data,
                        type: "POST",
                        async: false,
                        dataType: "json",
                        success: function(json) {
                            alert(json.msg);
                            if (ue)
                                ue.destroy();
                            $(".mask").remove();
                            location.reload();
                        }
                    });
                });
            });
        },
        /**
         * 
         * 删除分类
         */
        del_classify: function() {
            $("#classify_list .del_classify").click(function() {
                var id = $(this).parents("tr").data("id");
                var _this = $(this);
                if ($("tr[data-tid=" + id + "]").length > 0) {
                    alert("该栏目有子类，不能删除！");
                } else {
                    $.ajax({
                        url: "/classify-delete",
                        async: false,
                        type: "POST",
                        data: {id: id},
                        dataType: "json",
                        success: function(json) {
                            if (json.err == 0) {
                                var hint = new Hint_box("删除成功");
                                _this.parents("tr").remove();
                            } else {
                                var hint = new Hint_box("删除失败");
                            }
                        }
                    });
                }
            });
            $("#classify_list .batch_del_classify").click(function() {
                var id = '';
                $("tbody .classify_checked:checked").each(function() {
                    id += ',' + $(this).parents("tr").data("id");
                });
                $.ajax({
                    url: "/classify-delete",
                    async: false,
                    type: "POST",
                    data: {id: id},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("删除成功");
                            $("tbody .classify_checked:checked").parents("tr").remove();
                        } else {
                            var hint = new Hint_box("删除失败");
                        }
                    }
                });
            });
        },
        /**
         * 
         * 添加分类
         */
        add_classify: function() {
            $("#classify_list .add_classify").click(function() {
                var html = '<option value="0">顶级栏目</option>';
                $.ajax({
                    url: "/classify-list",
                    async: false,
                    dataType: "json",
                    type: "GET",
                    success: function(json) {
                        if (json.data != null) {
                            $.each(json.data, function(k, v) {
                                html += '<option value="' + v.id + '">' + v.name + '</option>';
                                if (v.childmenu != null) {
                                    $.each(v.childmenu, function(k1, v1) {
                                        html += '<option value="' + v1.id + '">&nbsp;&nbsp;&nbsp;|--' + v1.name + '</option>';
                                        if (v1.childmenu != null) {
                                            $.each(v1.childmenu, function(k2, v2) {
                                                html += '<option value="' + v2.id + '" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--|--' + v2.name + '</option>';
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
                var edit_html = '<form class="navbar-form navbar-left">\n\
                                        <div class="form-group">\n\
                                            <ul class="nav classify-info">';
                edit_html += '<li class="class_all"><label>父级栏目</label>: <select class="form-control p_id">' + html + '</select></li>';
                edit_html += '<li style="display:none;"><input type="hidden" name="id" class="id" /></li>';
                edit_html += '<li class="class_all"><label>栏目名称</label>: <input type="text" name="name" class="name form-control" /></li>';
                edit_html += '<li class="class_all"><label>英文名称</label>: <input type="text" name="en_name" class="en_name form-control"  /></li>';
                edit_html += '<li class="class_all"><label>栏目类型</label>: \n\
                                            <select name="type" class="type form-control">\n\
                                                <option selected="selected" value="选择">请选择</option>\n\
                                                <option value="1">文字列表</option>\n\
                                                <option value="2">图片列表</option>\n\
                                                <option value="3">图文列表</option>\n\
                                                <option value="4">内容单页</option>\n\
                                                <option value="6">外链</option>\n\
                                            </select></li>';
                edit_html += '<li class="class_9"><label>表单关联</label>: <input type="text" name="form_id" class="form_id form-control"  /></li>';
                edit_html += '<li class="class_all"><label>站点展示</label>: \n\
                                                <div class="checkbox"><label><input type="checkbox" name="pc_show" class="pc_show" />显示 </label></div>\n\
                                                <div class="checkbox"><label> <input type="checkbox" name="footer_show" class="footer_show" />底部导航</label></div>\n\
                                            </li>';
                edit_html += '<li class="class_6"><label>链接地址</label>: <input type="text" name="url" class="url form-control"  />&nbsp&nbsp&nbsp<select id="open_page" class="open_page form-control"><option value="1">本页打开</option><option value="2">新增页打开</option></select></li>';
                edit_html += '<li class="class_1 class_2 class_3"><label>内页版本</label>: <select id="article_type" class="article_type form-control"><option value="1">新闻正文</option><option value="2">产品正文</option></select></li>';
                edit_html += '<li class="class_all"><label>关 键 字</label>: <input type="text" name="meta_keywords" class="meta_keywords form-control"  /></li>';
                edit_html += '<li class="class_all"><label>栏目图标</label>: <button class="btn btn-default classify_icon" role="iconpicker"></button></li>';
                edit_html += '<li class="class_all" style="height:56px;"><label>栏目图片</label>: <input type="text" name="img" class="img form-control"  style="display:none;"/><img class="imgpre" src=""/><div class="img-add-button"><i class="fa fa-plus"></i><input type="file" class="imgchange"  accept="image/jpeg,image/png"/></div></li>';
                edit_html += '<li class="class_all"><label>栏目简介</label>: <textarea name="meta_description" class="form-control meta_description"></textarea></li>';
                edit_html += '<li class="class_4"><label>单页编辑</label>: <script id="content" type="text/plain"></script></li>';
                edit_html += '</ul></div></form>';
                var json = {title: "添加栏目", class: "add_classify_panel", html: edit_html};
                var add_classify = Mask_panel(json);
                myiconselected();
                var ue = UE.getEditor('content');
                /**
                 * 改变分类类型
                 */
                $(".add_classify_panel .type").change(function() {
                    var type = $(this).val();
                    $(".add_classify_panel li").hide();
                    $(".add_classify_panel .class_all").show();
                    $(".add_classify_panel .class_" + type).show();
                });

                /**
                 * 上传栏目图片
                 */
                $(".img-add-button .imgchange").change(function() {
                    var data = new FormData();
                    if ($(".imgchange")[0].files.length > 0) {
                        data.append("image", $(".imgchange")[0].files[0]);
                        $.ajax({
                            url: "/upload-image",
                            type: "POST",
                            cache: false,
                            processData: false,
                            contentType: false,
                            data: data,
                            success: function(json) {
                                if (json.err == 0) {
                                    $(".add_classify_panel .img").val(json.url);
                                    $(".add_classify_panel .imgpre").attr("src", json.url);
                                }
                                alert(json.msg);
                            }
                        });
                    }
                });
                /**
                 * 点击保存，保存分类
                 */
                $(".add_classify_panel .save").click(function() {
                    var data = {};
                    data['p_id'] = $(".add_classify_panel .p_id").val();
                    data['id'] = $(".add_classify_panel .id").val();
                    data['name'] = $(".add_classify_panel .name").val();
                    data['en_name'] = $(".add_classify_panel .en_name").val();
                    data['type'] = $(".add_classify_panel .type").val();
                    data['open_page'] = $(".add_classify_panel .open_page").val();
                    data['form_id'] = $(".add_classify_panel .form_id").val();
                    data['url'] = $(".add_classify_panel .url").val();
                    data['article_type'] = $(".add_classify_panel .article_type").val();
                    data['keywords'] = $(".add_classify_panel .meta_keywords").val();
                    data['img'] = $(".add_classify_panel .img").val();
                    data['icon'] = $(".add_classify_panel .classify_icon").find("input").val();
                    data['description'] = $(".add_classify_panel .meta_description").val();
                    data["content"] = ue.getContent();
                    data['pc_show'] = ($(".pc_show[type='checkbox']").is(':checked')) ? 1 : 0;
                    data['footer_show'] = ($(".footer_show[type='checkbox']").is(':checked')) ? 1 : 0;
                    $.ajax({
                        url: "/classify-modify",
                        data: data,
                        type: "POST",
                        async: false,
                        dataType: "json",
                        success: function(json) {
                            if (json.err == "1002") {
                                data["is_forced"] = confirm(json.msg);
                                if (data["is_forced"]) {
                                    $.ajax({
                                        url: "/classify-modify",
                                        data: data,
                                        type: "POST",
                                        async: false,
                                        dataType: "json",
                                        success: function(json) {
                                            alert(json.msg);
                                            if (json.err == 0) {
                                                if (ue)
                                                    ue.destroy();
                                                $(".mask").remove();
                                                location.reload();
                                            }
                                        }
                                    });
                                }
                            } else {
                                alert(json.msg);
                                if (json.err == 0) {
                                    if (ue)
                                        ue.destroy();
                                    $(".mask").remove();
                                    location.reload();
                                }
                            }
                        }
                    });
                });
            });
        },
    }
    var init = new $scope.classifyInit();
}