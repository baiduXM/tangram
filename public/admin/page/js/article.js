function articleController($scope, $http) {
    if (typeof ($scope.$parent.articleEditor) == "undefined") {
        $scope.$parent.articleEditor = false;
    }
    $scope.articleInit = function() {
        this._init();
    };
    $scope.articleInit.prototype = {
        _init: function() {
            //当前所在页码
            this.cur_page = 1;
            this.pageCount = 0;
            this.get_article_list();
            //this.page();
            //this.edit_article();
        },
        /**
         * 
         * 分页
         */
        page: function() {
            var _this = this;
            $("#article_list .page_num").unbind();
            $("#article_list .page_num").createPage({
                pageCount: _this.pageCount,
                current: _this.cur_page,
                backFn: function(p) {
                    _this.cur_page = p;
                    _this.get_article_list(p);
                }
            });
        },
        /**
         * 
         *获取文章列表
         */
        get_article_list: function() {
            var _this = this;
            $.ajax({
                url: "/article-list",
                async: false,
                data: {per_page: 3, page: this.cur_page},
                dataType: "json",
                type: "GET",
                success: function(json) {
                    $("#article_list tbody").html("");
                    if (json.err === 0) {
                        $.each(json.data.data, function(k, v) {
                            $("#article_list tbody").append('<tr data-id="' + v.id + '"><td class="text-center"><input type="checkbox" class="article_checked" /></td><td><input type="text" class="title" value="' + v.title + '"></td><td class="text-center">' + v.c_name + '</td><td class="text-center"><img src="' + v.img[0] + '" style="width:100px;height:56px;" /></td><td class="text-center is_star"><input type="hidden" class="is_star_control" value="'+v.is_star+'"><i class="fa fa-lg' + (v.is_star? " fa-star" : "") + '"></i></td><td class="text-center is_top"><input type="hidden" class="is_top_control" value="'+v.is_top+'"><i class="fa fa-lg' + (v.is_top? " fa-long-arrow-up" : "") + '"></i></td><td class="text-center"><input type="text" class="sort" value="' + ((v.sort == 1000000) ? "" : v.sort) + '"></td><td class="text-center pc_show"><input type="hidden" class="pc_show_control" value="'+v.pc_show+'"><i class="fa fa-lg fa-desktop' + (v.pc_show? " show" : " noshow") + '"></i></td><td class="text-center"><a href="javascript:void(0);"><i class="fa fa-lg fa-edit edit_article"></i></a><a href="javascript:void(0);"><i class="fa fa-lg fa-trash del_article"></i></a></td></tr>');
                        });
                        _this.article_checked_all();
                        _this.pageCount = json.data.last_page;
                        _this.page();
                    } else {
                        alert(json.msg);
                    }
                }
            });
            this.edit_article();
            this.article_sort();
            this.article_star();
            this.article_top();
            this.article_show();
            this.article_title();
            this.article_del();
        },
        /**
         * 
         *文章删除
         */
        article_del:function(){
            $("#article_list .del_article").unbind("click");
            $("#article_list .del_article").click(function(){
                var id = $(this).parents("tr").data("id");
                var _this=$(this);
                $.ajax({
                    url: "/article-delete",
                    async: false,
                    type: "POST",
                    data: {id: id},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("删除成功！");
                            _this.parents("tr").remove();
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
            $("#article_list .batch_del_article").unbind("click");
            $("#article_list .batch_del_article").click(function(){
                var id="";
                var num=0;
                $("#article_list .article_checked:checked").parents("tr").each(function(){
                    if(num==0){
                        id +=$(this).data("id");
                    }else{
                        id +=","+$(this).data("id");
                    }
                    num++;
                });
                $.ajax({
                    url: "/article-delete",
                    async: false,
                    type: "POST",
                    data: {id: id},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("删除成功！");
                            $("#article_list .article_checked:checked").parents("tr").remove();
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
        },
        /**
         * 
         *排序修改
         */
        article_sort: function() {
            $("#article_list .sort").unbind("change");
            $("#article_list .sort").change(function() {
                var id = $(this).parents("tr").data("id");
                var sort = $(this).val();
                $.ajax({
                    url: "/article-sort-modify",
                    async: false,
                    type: "POST",
                    data: {id: id, sort: sort},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("修改排序成功！");
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
        },
        /**
         * 
         *标题修改
         */
        article_title: function() {
            $("#article_list .title").unbind("change");
            $("#article_list .title").change(function() {
                var id = $(this).parents("tr").data("id");
                var title = $(this).val();
                $.ajax({
                    url: "/article-title-modify",
                    async: false,
                    type: "POST",
                    data: {id: id, title: title},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("修改成功！");
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
        },
        /**
         * 
         *置顶修改
         */
        article_top: function() {
            $("#article_list .is_top").unbind("click");
            $("#article_list .is_top").click(function() {
                var id = $(this).parents("tr").data("id");
                var is_top=($(this).find("input").val()==1)?0:1;
                var _this=$(this);
                $.ajax({
                    url: "/article-batch-modify",
                    async: false,
                    type: "POST",
                    data: {id: id, action: "set_top",values:is_top},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("修改成功！");
                            _this.find("input").val(is_top);
                            if(is_top==1){
                                _this.find("i").addClass("fa-long-arrow-up");
                            }else{
                                _this.find("i").removeClass("fa-long-arrow-up");
                            }
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
        },
        /**
         * 
         *推荐修改
         */
        article_star: function() {
            $("#article_list .is_star").unbind("click");
            $("#article_list .is_star").click(function() {
                var id = $(this).parents("tr").data("id");
                var is_star=($(this).find("input").val()==1)?0:1;
                var _this=$(this);
                $.ajax({
                    url: "/article-batch-modify",
                    async: false,
                    type: "POST",
                    data: {id: id, action: "set_star",values:is_star},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("修改成功！");
                            _this.find("input").val(is_star);
                            if(is_star==1){
                                _this.find("i").addClass("fa-star");
                            }else{
                                _this.find("i").removeClass("fa-star");
                            }
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
        },
        /**
         * 
         *推荐修改
         */
        article_show: function() {
            $("#article_list .pc_show").unbind("click");
            $("#article_list .pc_show").click(function() {
                var id = $(this).parents("tr").data("id");
                var pc_show=($(this).find("input").val()==1)?0:1;
                var _this=$(this);
                $.ajax({
                    url: "/article-batch-modify",
                    async: false,
                    type: "POST",
                    data: {id: id, action: "set_pcshow",values:pc_show},
                    dataType: "json",
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("修改成功！");
                            _this.find("input").val(pc_show);
                            if(pc_show==1){
                                _this.find("i").addClass("show");
                                _this.find("i").removeClass("noshow");
                            }else{
                                _this.find("i").addClass("noshow");
                                _this.find("i").removeClass("show");
                            }
                        } else {
                            var hint = new Hint_box(json.msg);
                        }
                    }
                });
            });
        },
        /**
         * 
         * 全选操作
         */
        article_checked_all: function() {
            $("#article_list .article_checked_all").unbind("change");
            $("#article_list .article_checked_all").change(function() {
                var ret = $(this).is(":checked");
                if (ret) {
                    $("#article_list .article_checked").prop("checked", true);
                } else {
                    $("#article_list .article_checked").prop("checked", false);
                }
            });
        },
        /**
         * 
         *编辑文章，添加文章
         */
        edit_article: function() {
            var ue;
            var html = "";
            var _this = this;
            if ($scope.$parent.articleEditor == true) {
                UE.getEditor('article_content').destroy();
                $scope.$parent.articleEditor = false;
            }
            /**
             * 文章分类栏目
             */
            $.ajax({
                url: "/classify-list",
                async: false,
                dataType: "json",
                type: "GET",
                success: function(json) {
                    $.each(json.data, function(k, v) {
                        html += '<li role="presentation" data-cid="' + v.id + '" ' + ((v.childmenu != null)||(v.type==4||v.type==6) ? ' class="disabled"' : "") + '><a href="javascript:void(0);">' + v.name + '</a></li>';
                        if (v.childmenu != null) {
                            $.each(v.childmenu, function(k1, v1) {
                                html += '<li role="presentation" data-cid="' + v1.id + '" ' + ((v1.childmenu != null)||(v1.type==4||v1.type==6) ? ' class="disabled"' : "") + '><a href="javascript:void(0);"><font style="color:#337AB7;">&nbsp;&nbsp;&nbsp;|--</font>' + v1.name + '</a></li>';
                                if (v1.childmenu != null) {
                                    $.each(v1.childmenu, function(k2, v2) {
                                        html += '<li role="presentation" data-cid="' + v2.id + '" ' + ((v2.type==4||v2.type==6) ? ' class="disabled"' : "") + '><a href="javascript:void(0);"><font style="color:#337AB7;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--|--</font>' + v2.name + '</a></li>';
                                    });
                                }
                            });
                        }
                    });
                }
            });
            $(".c_id_menu").html(html);
            /**
             * 分类栏目不可选
             */
            $(".c_id_menu .disabled").MoveBox({
                Trigger: 'mouseenter',
                context: '不可选择',
                click_close: true
            });
            $(".c_id_menu li").unbind();
            /**
             * 文章分类选择
             */
            $(".c_id_menu li").click(function() {
                if($(this).hasClass("disabled")){
                    return false;
                }
                var c_id = $(this).data("cid");
                var txt = $(this).find("a").html();
                $("#article_edit .c_id_text").html(txt);
                $("#article_edit .c_id").val(c_id);
            });
            $("#article_manager .edit_article").unbind();
            /**
             * 编辑文章
             */
            $("#article_manager .edit_article").click(function() {
                ue = UE.getEditor('article_content', {
                    initialFrameHeight: 300,
                    autoHeightEnabled: false
                });
                $scope.$parent.articleEditor = true;
                var id = $(this).parents("tr").data("id");
                $("#article_manager").fadeOut();
                $("#article_edit").fadeIn();
                /**
                 * 赋值
                 */
                $.ajax({
                    url: "/article-info",
                    type: "GET",
                    dataType: "json",
                    async: false,
                    data: {id: id},
                    success: function(json) {
                        if (json.err == 0) {
                            $("#article_edit .c_id").val(json.data.c_id);
                            $("#article_edit .c_id_text").html($(".c_id_menu li[data-cid='" + json.data.c_id + "']").find("a").html());
                            $("#article_edit .title").val(json.data.title);
                            $("#article_edit .viewcount").val(json.data.viewcount);
                            $("#article_edit .pc_show").prop("checked", (json.data.pc_show ? true : false));
                            $("#article_edit .use_url").prop("checked", (json.data.use_url ? true : false));
                            switch_botton($(".switch_botton[data-checkid='pc_show']"));
                            switch_botton($(".switch_botton[data-checkid='use_url']"));
                            json.data.use_url ? $("#article_edit .url").parents("li").show() : $("#article_edit .url").parents("li").hide();
                            $("#article_edit .url").val(json.data.url);
                            $("#article_edit .keywords").val(json.data.keywords);
                            $("#article_edit .txts").val(json.data.introduction);
                            $("#dateinfo").val(json.data.updated_at);
                            $("#article_edit .img-container").html("");
                            $.each(json.data.img, function(k, v) {
                                $("#article_edit .img-container").append('<img class="imgpre" src="' + v + '"/><i class="fa fa-times-circle imgclose" onclick="imgclose($(this));"></i>');
                            });
                            ue.addListener("ready", function() {
                                ue.setContent(json.data.content);
                            });
                        } else {
                            alert(json.msg);
                        }
                    }
                });
                $("#article_edit .save").unbind();
                /**
                 * 保存文章
                 */
                $("#article_edit .save").click(function() {
                    var data = {};
                    data["id"] = id;
                    if ($("#article_edit .c_id").val().length > 0) {
                        data["c_id"] = $("#article_edit .c_id").val();
                    } else {
                        alert("请选择栏目分类");
                        return false;
                    }
                    if ($("#article_edit .title").val().length > 0) {
                        data["title"] = $("#article_edit .title").val();
                    } else {
                        alert("请填写标题");
                        return false;
                    }
                    if ($.isNumeric($("#article_edit .viewcount").val())) {
                        data["viewcount"] = $("#article_edit .viewcount").val();
                    } else {
                        alert("访问次数填写格式出错");
                        return false;
                    }
                    data["pc_show"] = $("#article_edit .pc_show").is(":checked") ? 1 : 0;
                    data["use_url"] = $("#article_edit .use_url").is(":checked") ? 1 : 0;
                    data["url"] = $("#article_edit .url").val();
                    data["keywords"] = $("#article_edit .keywords").val();
                    data["introduction"] = $("#article_edit .txts").val();
                    data["content"] = UE.getEditor('article_content').getContent();
                    var img = "";
                    $("#article_edit .imgpre").each(function() {
                        img += "," + $(this).attr("src");
                    });
                    data["img"] = img;
                    $.ajax({
                        url: "/article-create",
                        data: data,
                        type: "POST",
                        dataType: "json",
                        async: false,
                        success: function(json) {
                            if (json.err == 0) {
                                var hint = new Hint_box("修改成功！");
                            } else {
                                var hint = new Hint_box(json.msg);
                            }
                        }
                    });
                    if ($("#article_content").length > 0) {
                        UE.getEditor('article_content').destroy();
                        $scope.$parent.articleEditor = false;
                    }
                    $("#article_edit").fadeOut();
                    $("#article_manager").fadeIn();
                    _this.get_article_list();
                });
                $("#article_edit .cancel").unbind();
                /**
                 * 取消保存文章
                 */
                $("#article_edit .cancel").click(function() {
                    if ($("#article_content").length > 0) {
                        UE.getEditor('article_content').destroy();
                        $scope.$parent.articleEditor = false;
                    }
                    $("#article_edit").fadeOut();
                    $("#article_manager").fadeIn();
                });
            });
            $("#article_manager .add_article").unbind();
            /**
             * 添加文章
             */
            $("#article_manager .add_article").click(function() {
                ue = UE.getEditor('article_content', {
                    initialFrameHeight: 300,
                    autoHeightEnabled: false
                });
                $scope.$parent.articleEditor = true;
                $("#article_manager").fadeOut();
                $("#article_edit").fadeIn();
                $("#dateinfo").val("");
                $("#article_edit .c_id").val("");
                $("#article_edit .c_id_text").html("请选择");
                $("#article_edit .title").val("");
                $("#article_edit .viewcount").val(0);
                $("#article_edit .pc_show").prop("checked", false);
                $("#article_edit .use_url").prop("checked", false);
                switch_botton($(".switch_botton[data-checkid='pc_show']"));
                switch_botton($(".switch_botton[data-checkid='use_url']"));
                $("#article_edit .url").parents("li").hide();
                $("#article_edit .url").val("");
                $("#article_edit .keywords").val("");
                $("#article_edit .txts").val("");
                $("#article_edit .img-container").html("");
                ue.addListener("ready", function() {
                    ue.setContent("");
                });
                $("#article_edit .save").unbind();
                /**
                 * 保存文章
                 */
                $("#article_edit .save").click(function() {
                    var data = {};
                    if ($("#article_edit .c_id").val().length > 0) {
                        data["c_id"] = $("#article_edit .c_id").val();
                    } else {
                        alert("请选择栏目分类");
                        return false;
                    }
                    if ($("#article_edit .title").val().length > 0) {
                        data["title"] = $("#article_edit .title").val();
                    } else {
                        alert("请填写标题");
                        return false;
                    }
                    if ($.isNumeric($("#article_edit .viewcount").val())) {
                        data["viewcount"] = $("#article_edit .viewcount").val();
                    } else {
                        alert("访问次数填写格式出错");
                        return false;
                    }
                    data["pc_show"] = $("#article_edit .pc_show").is(":checked") ? 1 : 0;
                    data["use_url"] = $("#article_edit .use_url").is(":checked") ? 1 : 0;
                    data["url"] = $("#article_edit .url").val();
                    data["keywords"] = $("#article_edit .keywords").val();
                    data["introduction"] = $("#article_edit .txts").val();
                    data["content"] = UE.getEditor('article_content').getContent();
                    data["pubdate"] = $("#dateinfo").val();
                    var img = "";
                    $("#article_edit .imgpre").each(function() {
                        img += "," + $(this).attr("src");
                    });
                    data["img"] = img;
                    $.ajax({
                        url: "/article-create",
                        data: data,
                        type: "POST",
                        dataType: "json",
                        async: false,
                        success: function(json) {
                            if (json.err == 0) {
                                var hint = new Hint_box("添加成功！");
                            } else {
                                var hint = new Hint_box(json.msg);
                            }
                        }
                    });
                    if ($("#article_content").length > 0) {
                        UE.getEditor('article_content').destroy();
                        $scope.$parent.articleEditor = false;
                    }
                    $("#article_edit").fadeOut();
                    $("#article_manager").fadeIn();
                    _this.get_article_list();
                });
                $("#article_edit .cancel").unbind();
                /**
                 * 取消保存文章
                 */
                $("#article_edit .cancel").click(function() {
                    if ($("#article_content").length > 0) {
                        UE.getEditor('article_content').destroy();
                        $scope.$parent.articleEditor = false;
                    }
                    $("#article_edit").fadeOut();
                    $("#article_manager").fadeIn();
                });
            });
            $(".switch_botton").unbind();
            /**
             * 开关按钮
             */
            $(".switch_botton").click(function() {
                var id = $(this).data("checkid");
                if ($("#" + id).is(":checked")) {
                    $("input[data-checkid=" + id + "]").css({"background": "#efefef"});
                    $("#" + id).prop("checked", false);
                    $(this).animate({left: "-70px"});
                } else {
                    $("input[data-checkid=" + id + "]").css({"background": "#B4DAFA"});
                    $("#" + id).prop("checked", true);
                    $(this).animate({left: "-40px"});
                }
            });
            function switch_botton(_this) {
                var id = _this.data("checkid");
                if ($("#" + id).is(":checked")) {
                    $("input[data-checkid=" + id + "]").css({"background": "#B4DAFA"});
                    _this.css({"left": "-40px"});
                } else {
                    $("input[data-checkid=" + id + "]").css({"background": "#efefef"});
                    _this.css({"left": "-70px"});
                }
            }
            /**
             * 是否是链接
             */
            $("span[data-checkid=use_url]").click(function() {
                var id = $(this).data("checkid");
                if ($("#" + id).is(":checked")) {
                    $(".url").parents("li").fadeIn();
                } else {
                    $(".url").parents("li").fadeOut();
                }
            });
            $(".img-add-button .imgchange").unbind();
            /**
             * 上传缩略图片
             */
            $(".img-add-button .imgchange").change(function() {
                var data = new FormData();
                if ($(".imgchange")[0].files.length > 0) {
                    $.each($(".imgchange")[0].files, function(k, v) {
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
                            if (json.length > 1) {
                                $.each(json, function(k, v) {
                                    if (v.err === 0) {
                                        $("#article_edit .img-container").append('<img class="imgpre" src="' + v.url + '"/><i class="fa fa-times-circle imgclose" onclick="imgclose($(this));"></i>');
                                    } else {
                                        alert(v.msg);
                                    }
                                });
                            } else {
                                if (json.err === 0) {
                                    $("#article_edit .img-container").append('<img class="imgpre" src="' + json.url + '"/><i class="fa fa-times-circle imgclose" onclick="imgclose($(this));"></i>');
                                } else {
                                    alert(json.msg);
                                }
                            }
                        }
                    });
                }
            });
        }
    };
    var init = new $scope.articleInit();
}
/**
 * 删除图片
 * @param  _this
 */
function imgclose(_this) {
    _this.prev("img").remove();
    _this.remove();
}
/**
 * 时间插件设置
 */
jeDate({
    dateCell: "#dateinfo",
    format: "YYYY-MM-DD hh:mm:ss",
    isinitVal: true,
    isTime: true
});