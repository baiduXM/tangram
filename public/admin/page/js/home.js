function homeController($scope, $http) {
    $scope.homeInit = function() {
        this._init();
    };
    $scope.homeInit.prototype = {
        _init: function() {
            var _this = this;
            this.pagenames = {};
            this.classifylist = [];
            this.setting = {};
            var data;
            
            function gethtml_imgs(data) {
                return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '" style="min-height:56px;">\n\
                                    <label>' + data["datatitle"] + '： <br /><span class="promptword" style="max-width:120px;display: inline-block;">(' + data["promptword"] + ')</span></label>\n\
                                    <div class="img-container" style="display: inline;"></div>\n\
                                    <div class="img-add-button">\n\
                                        <i class="fa fa-plus"></i>\n\
                                        <input type="file" class="imgschange"  accept="image/jpeg,image/png" multiple="multiple"/>\n\
                                    </div><input type="hidden" class="data" value="" />\n\
                                </li>';
            }

            function gethtml_img(data) {
                return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '" style="min-height:56px;">\n\
                                    <label>' + data["datatitle"] + '： <br /><span class="promptword" style="max-width:120px;display: inline-block;">(' + data["promptword"] + ')</span></label>\n\
                                    <div class="img-container" style="display: inline;"></div>\n\
                                    <div class="img-add-button">\n\
                                        <i class="fa fa-plus"></i>\n\
                                        <input type="file" class="imgchange"  accept="image/jpeg,image/png" />\n\
                                    </div><input type="hidden" class="data" value="" />\n\
                                </li>';
            }
            function gethtml_text(data) {
                return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '">\n\
                <label>' + data["datatitle"] + '：</label>\n\
                <input type="text" placeholder="' + data["promptword"] + '" data-regular="' + data["regular"] + '" class="form-control data"/>\n\
            </li>';
            }
            function gethtml_textarea(data) {
                return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '">\n\
                <label>' + data["datatitle"] + '：</label>\n\
                <textarea placeholder="' + data["promptword"] + '" class="form-control data"  data-regular="' + data["regular"] + '" style="width:80%;height:100px;"></textarea>\n\
            </li>';
            }
            function imgs_data_set(imgs, page, role) {
//    var data = imgs;
//    imgs = imgs.split(',');
                $.each(imgs, function(k, v) {
                    $("ul[data-page=" + page + "] li[data-role=" + role + "] .img-container").append('<div style="position: relative;display: inline-block;" class="imgpre_div">\
<img class="imgpre" src="' + v.img + '" /><i class="fa fa-edit imgedit"  onclick="imgedit($(this));"></i><i class="fa fa-times-circle imgclose" onclick="imgclose($(this));"></i>\
<div style="position: absolute;display: none;background:rgba(218, 218, 218, 0.95);z-index: 2;width: 270px;border: 1px solid #e0dede;border-radius: 5px;padding: 8px;">\
<span style="display: inline-block;width: 10px;height: 10px;position: absolute;border-top: 10px solid rgba(242, 242, 242, 0);border-right: 10px solid rgba(218, 218, 218, 0.9);border-bottom: 10px solid rgba(31, 28, 28, 0);left: -8px;"></span>\
<label>名称:</label> <input type="text" class="form-control imgtitle" style="margin:5px;" value="' + v.title + '"/>\
<label>链接:</label> <input type="text" class="form-control imghref" style="margin:5px;" value="' + v.url + '"/>\
<label>打开方式:</label> <select class="form-control openway"><option value="1" ' + (v.openway == 1 ? "selected" : "") + '>本页打开</option><option value="2"  ' + (v.openway == 2 ? "selected" : "") + '>新增页打开</option></select>\n\
<button class="btn btn-primary" onclick="$(this).parent(\'div\').hide();"> 隐 藏</button><i class="fa fa-long-arrow-up imgsort" style="top: 5px;" onclick="imgpre_up($(this));"></i>前移<i class="fa fa-long-arrow-down imgsort" style="top: 7px;" onclick="imgpre_down($(this));"></i>后移</div></div>');
                });
                //data = imgs.join(',');
//    $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").val(data);
            }
            function img_data_set(img, page, role) {
                if (typeof (img) == "undefined" || img == "") {
                    return false;
                }
                $("ul[data-page=" + page + "] li[data-role=" + role + "] .img-container").html('<div style="position: relative;display: inline-block;" class="imgpre_div">\
<img class="imgpre" src="' + img.img + '" /><i class="fa fa-edit imgedit" onclick="imgedit($(this));"></i><i class="fa fa-times-circle imgclose" onclick="imgclose($(this));"></i>\
<div  style="position: absolute;display: none;background:rgba(218, 218, 218, 0.95);z-index: 2;width: 270px;border: 1px solid #e0dede;border-radius: 5px;padding: 8px;">\n\
<span style="display: inline-block;width: 10px;height: 10px;position: absolute;border-top: 10px solid rgba(242, 242, 242, 0);border-right: 10px solid rgba(218, 218, 218, 0.9);border-bottom: 10px solid rgba(31, 28, 28, 0);left: -8px;"></span>\n\
<label>名称:</label> <input type="text" class="form-control imgtitle" style="margin:5px;" value="' + img.title + '"/>\
<label>链接:</label> <input type="text" class="form-control imghref" style="margin:5px;" value="' + img.url + '"/>\
<label>打开方式:</label> <select class="form-control openway"><option value="1" ' + (img.openway == 1 ? "selected" : "") + '>本页打开</option><option value="2"  ' + (img.openway == 2 ? "selected" : "") + '>新增页打开</option></select>\n\
<button class="btn btn-primary" onclick="$(this).parent(\'div\').hide();"> 隐 藏</button></div></div>');
//    $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").val(img);
            }
            function text_set(text, page, role) {
                $("ul[data-page=" + page + "] li[data-role=" + role + "] .data").val(text);
            }
            function data_set_imgs(v) {//多图数据设置赋值
                imgs_data_set(v['data'], v['page'], v['role']);
            }
            function data_set_img(v) {//单图数据设置赋值
                img_data_set(v['data'], v['page'], v['role']);
            }
            function data_set_text(v) {
                text_set(v['data'], v['page'], v['role']);
            }
            function data_set_textarea(v) {
                text_set(v['data'], v['page'], v['role']);
            }
            function data_change_imgs() {
            }
            function data_change_img() {
            }
            function data_change_textarea() {
            }
            function data_change_text() {
                $(".imgchange").change(function() {
                    var data = new FormData();
                    var page = $(this).parents("ul").data("page");
                    var role = $(this).parents("li").data("role");
                    if ($(this)[0].files.length > 0) {
                        data.append("image" + 0, $(this)[0].files[0]);
                        $.ajax({
                            url: "/upload-image",
                            type: "POST",
                            cache: false,
                            processData: false,
                            contentType: false,
                            data: data,
                            success: function(json) {
                                if (json.err === 0) {
                                    var img = {};
                                    img["img"] = json.url;
                                    img["title"] = "";
                                    img["url"] = "";
                                    img["openway"] = 1;
                                    img_data_set(img, page, role);
                                } else {
                                    alert(json.msg);
                                }
                            }
                        });
                    }
                });
                $(".imgschange").change(function() {
                    var data = new FormData();
                    var page = $(this).parents("ul").data("page");
                    var role = $(this).parents("li").data("role");
                    var cthis = $(this);
                    if ($(this)[0].files.length > 0) {
                        $.each($(this)[0].files, function(k, v) {
                            data.append("image" + k, v);
                        });
                        $.ajax({
                            url: "/upload-image",
                            type: "POST",
                            cache: false,
                            processData: false,
                            contentType: false,
                            data: data,
                            success: function(json) {
                                var imgs = [];
                                if (json.length > 1) {
                                    $.each(json, function(k, v) {
                                        if (v.err === 0) {
                                            imgs[k] = {};
                                            imgs[k]["img"] = v.url;
                                            imgs[k]["title"] = "";
                                            imgs[k]["url"] = "";
                                            imgs[k]["openway"] = 1;
                                        } else {
                                            alert(v.msg);
                                        }
                                    });
                                } else {
                                    if (json.err === 0) {
                                        imgs["0"] = {};
                                        imgs["0"]["img"] = json.url;
                                        imgs["0"]["title"] = "";
                                        imgs["0"]["url"] = "";
                                        imgs["0"]["openway"] = 1;
                                    } else {
                                        alert(json.msg);
                                    }
                                }
                                imgs_data_set(imgs, page, role);
                            }
                        });
                    }
                });
                $("li[data-type=text] .data,li[data-type=textarea] .data").change(function() {
                    var reg = new RegExp($(this).data("regular"));
                    var v = $(this).val();
                    if (!reg.test(v)) {
                        alert("不符合规定!");
                        $(this).parent("li").addClass("error");
                        $(this).parent("li").append('<span class="errorMsg"></span>');
                        $(this).parent("li").click(function() {
                            $(this).removeClass("error");
                            $(this).find(".errorMsg").remove();
                        });
                    }
                });
            }
            function save_imgs(page, role) {
                var data = {};
                var imgs = [];
                var num = 0;
                data["type"] = "imgs";
                data["page"] = page;
                data["role"] = role;
                $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".img-container .imgpre_div").each(function() {
                    imgs[num] = {};
                    imgs[num]["img"] = $(this).find(".imgpre").attr("src");
                    imgs[num]["title"] = $(this).find(".imgtitle").val();
                    imgs[num]["url"] = $(this).find(".imghref").val();
                    imgs[num]["openway"] = $(this).find(".openway").val();
                    num++;
                });
                data["data"] = imgs;
                return data;
            }
            function save_img(page, role) {
                var data = {};
                data["type"] = "img";
                data["page"] = page;
                data["role"] = role;
//    data["data"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".imgpre_div:first-child").attr("src");

                var img = {};
//    if($("ul[data-page=" + page + "] li[data-role=" + role + "] .imgpre_div").length)
                img["img"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".imgpre_div:first-child").find(".imgpre").attr("src");
                img["title"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".imgpre_div:first-child").find(".imgtitle").val();
                img["url"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".imgpre_div:first-child").find(".imghref").val();
                img["openway"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".imgpre_div:first-child").find(".openway").val();
                data["data"] = img;
                return data;
            }
            function save_text(page, role) {
                var reg = new RegExp($("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").data("regular"));
                var v = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").val();
                if (!reg.test(v)) {
                    return "undefined";
                }
                var data = {};
                data["type"] = "text";
                data["page"] = page;
                data["role"] = role;
                data["data"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").val();
                return data;
            }
            function save_textarea(page, role) {
                var reg = new RegExp($("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").data("regular"));
                var v = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").val();
                if (!reg.test(v)) {
                    return "undefined";
                }
                var data = {};
                data["type"] = "textarea";
                data["page"] = page;
                data["role"] = role;
                data["data"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".data").val();
                return data;
            }
            window.imgedit = function(_this) {
                _this.siblings("div").css("display", "inline-block");
            }
            /**
             * 删除图片
             * @param  _this
             */
            window.imgclose = function(_this) {
                _this.parent("div").remove();
            }
            window.imgpre_up = function(_this) {
                var html = _this.parents(".imgpre_div").prev(".imgpre_div").prop("outerHTML");
                _this.parents(".imgpre_div").prev(".imgpre_div").remove();
                _this.parents(".imgpre_div").after(html);
            }
            window.imgpre_down = function(_this) {
                var html = _this.parents(".imgpre_div").next(".imgpre_div").prop("outerHTML");
                _this.parents(".imgpre_div").next(".imgpre_div").remove();
                _this.parents(".imgpre_div").before(html);
            }
            $.ajax({
                url: "/page-setting",
                async: false,
                dataType: "json",
                type: "POST",
                data: {"do": "get", "module": "pagename"},
                success: function(json) {
                    if (json.empty == 0) {
                        $.each(json.data, function(k, v) {
                            _this.pagenames[v["filename"]] = v["pagename"];
                        });
                    }
                }
            });
//            这里是模块js加载
            var js_htmls = [];
            $.ajax({
                url: "json/home.json",
                async: false,
                success: function(json) {
                    var num = 0;
                    $.each(json, function(k, v) {
                        if (v.js != "") {
                            $.ajax({
                                url: "page/js/include_js/" + v.js,
                                async: false,
                                type: "GET",
                                dataType: "html",
                                success: function(data) {
                                    js_htmls[num] = data;
                                    num++;
                                }
                            });
                        }
                    });
                }
            });
            for (var i = 0; i < js_htmls.length; i++) {
                eval(js_htmls[i]);
            }
//            模块加载结束
            $.ajax({
                url: "/page-setting",
                async: false,
                dataType: "json",
                type: "POST",
                data: {"do": "get"},
                success: function(json) {
                    if (json.empty == 0) {
                        _this.setting = json.data;
                        $.each(json.data, function(k, v) {
                            var html = '<label class="bold">' + _this.pagenames[k] + '设置:</label>\
                                        <hr />\
                                        <ul class="nav" data-page="' + k.replace(".", "-") + '">';
                            $.each(v, function(k1, v1) {
                                eval("html +=gethtml_" + v1["type"] + "(v1);"); //对应模块，对应子js文件，对应type的html
                                //html+='<li><label>'+v1["datatitle"]+'： </label><input type="text" class="form-control '+v1["dataname"]+'" data-role="'+v1["dataname"]+'"/><span class="promptword">('+v1["promptword"]+')</span></li>';
                            });
                            html += '</ul>';
                            $("#page_setting .form-group").append(html);
                        });
                    }
                }
            });
            $.ajax({
                url: "/page-info-setting",
                async: false,
                data: {do: "get"},
                type: "POST",
                success: function(json) {
                    if (json.empty == 0) {
                        $.each(json.data, function(k, v) {
                            $.each(v, function(k1, v1) {
                                eval("data_set_" + v1['type'] + "(v1);"); //对应模块，对应子js文件，对应type数据赋值，控件上显示
                            });
                        });
                    }
                }
            });
            $(".save").removeAttr("disabled"); //先是按钮保存点击停用，然后在加载完时启用，避免在数据还未加载完成，就点击保存，导致数据丢失
            $.ajax({
                url: "json/page_type.json",
                async: false,
                success: function(json) {
                    $.each(json, function(k, v) {
                        $.each(v, function(k1, v1) {
                            eval("data_change_" + k1 + "();");
                        })
                    });
                }
            });
//            $.each(this.classifylist, function(k, v) {
//                eval("data_change_" + k + "();");
//            });
            $(".setting .save").click(function() {
                var num = 0;
                var err = 0;
                var save_data = {};
                $(".setting li").each(function() {
                    if ($(this).data("type") != undefined) {
                        var role = $(this).data("role");
                        var page = $(this).parents("ul").data("page");
                        var type = $(this).data("type");
                        var data;
                        eval("data=save_" + type + "(page,role);");
                        if (data == "undefined") {
                            $(this).addClass("error");
                            $(this).append('<span class="errorMsg"></span>');
                            err = 1;
                            $(this).click(function() {
                                $(this).removeClass("error");
                                $(this).find(".errorMsg").remove();
                            });
                        }
                        if (typeof (save_data[page]) == "undefined") {
                            save_data[page] = {};
                        }
                        save_data[page][num] = data;
                        num++;
                    }
                });
                if (err == 0) {
                    save(save_data);
                } else {
                    alert("提交数据不正确！");
                }
                function save(data) {
                    $.ajax({
                        url: "/page-info-setting",
                        async: false,
                        data: {do: "modify", value: data},
                        type: "POST",
                        success: function(json) {
                            if (json.err == 0) {
                                var hint = new Hint_box(json.msg);
                            } else {
                                alert("保存失败");
                            }
                        }
                    });
                }
            });
            $(".setting .cancel").click(function() {
                window.location.reload();
            });
        }
    }
    var init = new $scope.homeInit();
}
    