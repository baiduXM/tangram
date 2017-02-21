function homesettingController($scope, $http) {
    $scope.homesettingInit = function() {
        this._init();
    };
    $scope.homesettingInit.prototype = {
        _init: function() {
            var _this = this;
            this.typelist = {};
            $.ajax({
                url: "json/page_type.json",
                async: false,
                type: "GET",
                success: function(json) {
                    $.each(json, function(k, v) {
                        $.each(v, function(k1, v1) {
                            _this.typelist[k1] = v1;
                        });
                    });
                }
            })
            this.pagenames = {};
            this.get_setting();
            this.edit_setting();
            this.pagenamedisplay();
            this.close_cancel();
            this.show_panel();
            this.modify_fun();
            this.del_fun();
            this.import_fun();
        },
        pagenamedisplay: function() {
            var _this = this;
            var html = '<select class="form-control filename">';
            $.each(_this.pagenames, function(k, v) {
                html += '<option value="' + k + '">' + v + '</option>';
            });
            html += '</select>';
            $(".pagename_li").append(html);
        },
        get_setting: function() {
            var typelist = this.typelist;
            var _this = this;
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
                            $("#page_setting_list tbody").append('<tr><td>' + v["pagename"] + '<input type="hidden" class="pagename" value="' + v["pagename"] + '"></td><td class="text-center">' + v["filename"] + '<input type="hidden" class="filename" value="' + v["filename"] + '"></td><td class="text-center">' + v["includepage"] + '<input type="hidden" class="includepage" value="' + v["includepage"] + '"></td><td class="text-center"><a href="javascript:void(0)"><span class="delete_pagename">删除</span></a></td></tr>');
                        });
                    }
                }
            });
            $.ajax({
                url: "/page-setting",
                async: false,
                dataType: "json",
                type: "POST",
                data: {"do": "get"},
                success: function(json) {
                    if (json.empty == 0) {
                        $.each(json.data, function(k, vals) {
                            $.each(vals, function(k1, v) {
                                $("#setting_list tbody").append('<tr><td><span class="tishi">' + v["datatitle"] + '</span><input type="hidden" class="datatitle form-control" value="' + v["datatitle"] + '"></td><td class="text-center"><span class="tishi">' + v["dataname"] + '</span><input type="hidden" class="dataname form-control" value="' + v["dataname"] + '"></td><td class="text-center"><span class="tishi">' + typelist[v["type"]] + '</span><input type="hidden" class="type form-control" value="' + v["type"] + '"></td><td class="text-center"><span class="tishi">' + v["getcontent"] + '</span><input type="hidden" class="getcontent form-control" value="' + v["getcontent"] + '"></td><td class="text-center"><span class="tishi">' + _this.pagenames[v["filename"]] + '</span><input type="hidden" class="filename form-control" value="' + v["filename"] + '"></td><td class="text-center"><span class="tishi">' + v["promptword"] + '</span><input type="hidden" class="promptword form-control" value="' + v["promptword"] + '"></td><td class="text-center"><span class="tishi">' + (v["regular"]?v["regular"]:"") + '</span><input type="hidden" class="regular form-control" value="' +(v["regular"]?v["regular"]:"")+ '"></td><td class="text-center"><a href="javascript:void(0)"><span class="edit_cate">编辑</span></a><a href="javascript:void(0)"><span class="save_cate" style="display:none;">保存</span></a><a href="javascript:void(0)"><span class="delete_cate">删除</span></a></td></tr>');
                            });
                        });
                    }
                }
            });
        },
        edit_setting:function(){
            $(".edit_cate").click(function(){
                $(this).parents("tr").find(".tishi").hide();
                $(this).parents("tr").find("input").attr("type","text");
                $(this).parents("tr").find(".save_cate").show();
            });
            $(".save_cate").click(function() {
                var data = {};
                var num = 0;
                $("#setting_list tbody tr").each(function() {
                    var v = {};
                    v["dataname"] = $(this).find(".dataname").val();
                    v["datatitle"] = $(this).find(".datatitle").val();
                    v["type"] = $(this).find(".type").val();
                    v["filename"] = $(this).find(".filename").val();
                    v["promptword"] = $(this).find(".promptword").val();
                    v["regular"] = $(this).find(".regular").val();
                    v["getcontent"] = $(this).find(".getcontent").val();
                    if (typeof (data[v["filename"]]) == "undefined") {
                        data[v["filename"]] = {};
                    }
                    data[v["filename"]][num] = v;
                    num++;
                });
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    data: {"do": "modify", "value": data},
                    success: function(json) {
                        if (json.err == 0) {
                            alert("保存成功！");
                            window.location.reload();
                        } else {
                            alert("保存失败！");
                        }
                    }
                });
            });
        },
        close_cancel: function() {
            $(".cancel").click(function() {
                $(this).parents(".panel").hide();
                $(".setting-main").show();
            });
            $(".cancel_refresh").click(function() {
                window.location.reload();
            });
            $(".back_his").click(function() {
                $("#page_setting_list .list").show();
                $("#page_setting_list form").hide();
            });
        },
        show_panel: function() {
            $(".manage_setting_page").click(function() {
                $(".panel").hide();
                $(".setting-page").show();
            });
            $(".add_setting_page").click(function() {
                $(this).parents(".list").hide();
                $("#page_setting_list form").show();
            });
        },
        del_fun: function() {
            $(".delete_cate").click(function() {
                var data = {};
                var num = 0;
                $(this).parents("tr").remove();
                $("#setting_list tbody tr").each(function() {
                    var v = {};
                    v["dataname"] = $(this).find(".dataname").val();
                    v["datatitle"] = $(this).find(".datatitle").val();
                    v["type"] = $(this).find(".type").val();
                    v["filename"] = $(this).find(".filename").val();
                    v["promptword"] = $(this).find(".promptword").val();
                    v["regular"] = $(this).find(".regular").val();
                    v["getcontent"] = $(this).find(".getcontent").val();
                    if (typeof (data[v["filename"]]) == "undefined") {
                        data[v["filename"]] = {};
                    }
                    data[v["filename"]][num] = v;
                    num++;
                });
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    data: {"do": "modify", "value": data},
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("保存成功！");
                        } else {
                            var hint = new Hint_box("保存失败！");
                        }
                    }
                });
            });
            $(".delete_pagename").click(function() {
                var data = {};
                var num = 0;
                $(this).parents("tr").remove();
                $("#page_setting_list tbody tr").each(function() {
                    var v = {};
                    v["pagename"] = $(this).find(".pagename").val();
                    v["filename"] = $(this).find(".filename").val();
                    v["includepage"] = $(this).find(".includepage").val();
                    data[num] = v;
                    num++;
                });
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    data: {"do": "modify", "value": data, "module": "pagename"},
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("保存成功！");
                        } else {
                            var hint = new Hint_box("保存失败！");
                        }
                    }
                });
            });
        },
        modify_fun: function() {
            var typelist = this.typelist;
            var fthis = this;
            $(".setting_cate_form .save").click(function() {
                var _this = $(this).parents("form");
                var data = {};
                var datatitle = _this.find(".datatitle").val();
                var dataname = _this.find(".dataname").val();
                var type = _this.find(".type").val();
                var filename = _this.find(".filename").val();
                var promptword = _this.find(".promptword").val();
                var regular = (_this.find(".regular").val()==undefined?"":_this.find(".regular").val());
                var getcontent=[];
                var num=0;
                _this.find(".getcontent_li input:checked").each(function(){
                    getcontent[num]=$(this).val();
                    num++;
                });
                getcontent=getcontent.join(",");
                $("#setting_list tbody").append('<tr><td>' + datatitle + '<input type="hidden" class="datatitle" value="' + datatitle + '"></td><td class="text-center">' + dataname + '<input type="hidden" class="dataname" value="' + dataname + '"></td><td class="text-center">' + typelist[type] + '<input type="hidden" class="type" value="' + type + '"></td><td class="text-center">' + getcontent + '<input type="hidden" class="getcontent" value="' + getcontent + '"></td><td class="text-center">' + fthis.pagenames[filename] + '<input type="hidden" class="filename" value="' + filename + '"></td><td class="text-center">' + promptword + '<input type="hidden" class="promptword" value="' + promptword + '"></td><td class="text-center">' + regular + '<input type="hidden" class="regular" value="' +regular+ '"></td><td class="text-center"><span>删除</span></td></tr>');
                var num = 0;
                $("#setting_list tbody tr").each(function() {
                    var v = {};
                    v["dataname"] = $(this).find(".dataname").val();
                    v["type"] = $(this).find(".type").val();
                    v["datatitle"] = $(this).find(".datatitle").val();
                    v["filename"] = $(this).find(".filename").val();
                    v["promptword"] = $(this).find(".promptword").val();
                    v["regular"] = $(this).find(".regular").val();
                    v["getcontent"] = $(this).find(".getcontent").val();
                    if (typeof (data[v["filename"]]) == "undefined") {
                        data[v["filename"]] = {};
                    }
                    data[v["filename"]][num] = v;
                    num++;
                });
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    data: {"do": "modify", "value": data},
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("保存成功！");
                            _this.find(".datatitle").val("");
                            _this.find(".dataname").val("");
                            _this.find(".type").val("");
                            _this.find(".filename").val("");
                            _this.find(".promptword").val("");
                            _this.find(".regular").val("");
                            _this.find("input[type=checkbox]").prop("checked",false);
                            $(".panel").hide();
                            $(".setting-main").show();
                            //alert("保存成功！");
//                            window.location.reload();
                        } else {
                            alert("保存失败！");
                            window.location.reload();
                        }
                    }
                });
            });
            $(".page_form .save").click(function() {
                var data = {};
                var filename = $(".page_form .filename").val();
                var pagename = $(".page_form .pagename").val();
                var includepage = $(".page_form .includepage").val();
                $("#page_setting_list tbody").append('<tr><td>' + pagename + '<input type="hidden" class="pagename" value="' + pagename + '"></td><td class="text-center">' + filename + '<input type="hidden" class="filename" value="' + filename + '"></td><td class="text-center">' + includepage + '<input type="hidden" class="includepage" value="' + includepage + '"></td><td class="text-center">操作</td></tr>');
                var num = 0;
                $("#page_setting_list tbody tr").each(function() {
                    var v = {};
                    v["pagename"] = $(this).find(".pagename").val();
                    v["filename"] = $(this).find(".filename").val();
                    v["includepage"] = $(this).find(".includepage").val();
                    data[num] = v;
                    num++;
                });
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    data: {"do": "modify", "value": data, "module": "pagename"},
                    success: function(json) {
                        if (json.err == 0) {
                            var hint = new Hint_box("保存成功！");

                        } else {
                            var hint = new Hint_box("保存失败！");
                        }
                        $(".page_form .filename").val('');
                        $(".page_form .pagename").val('');
                        $(".page_form .includepage").val('');
                        $("#page_setting_list .list").show();
                        $("#page_setting_list form").hide();
                    }
                });
            });
        },
        import_fun: function() {
            $("#page_setting_list .config_file").change(function() {
                var data = new FormData();
                data.append("do", "filemodify");
                data.append("module", "pagename");
                data.append("file", $(this)[0].files[0]);
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    processData: false,
                    contentType: false,
                    data: data,
                    success: function(json) {
                        if (json.err == 0) {
                            alert("保存成功！");
                            window.location.reload();
                        } else {
                            alert("保存失败！");
                            window.location.reload();
                        }
                    }
                });
            });
            $("#setting_list .config_file").change(function() {
                var data = new FormData();
                data.append("do", "filemodify");
                data.append("file", $(this)[0].files[0]);
                $.ajax({
                    url: "/page-setting",
                    async: false,
                    dataType: "json",
                    type: "POST",
                    processData: false,
                    contentType: false,
                    data: data,
                    success: function(json) {
                        if (json.err == 0) {
                            alert("保存成功！");
                            window.location.reload();
                        } else {
                            alert("保存失败！");
                            window.location.reload();
                        }
                    }
                });
            });
        }
    }
    var init = new $scope.homesettingInit();
}
    