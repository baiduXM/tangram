//var _this=this;  已经在父类文件定义过了。
//该文件是home.js文件的包含的classify模块子js文件
$.ajax({
    url: "/classify-list",
    type: "GET",
    async: false,
    dataType: "json",
    success: function(json) {
        _this.classifylist = json.data ? json.data : [];
    }
});
//父类文件 有gethtml是调用这些'gethtml_(type)'函数，实现对应type生成不同html,而type属于模块，写在对应的包含子文件
function gethtml_classifys(data) {
    var regulars=(data['regular']).split(",");
    var select_html = '<select class="form-control select_data" style="margin-bottom:5px;">';
    select_html += '<option value="">请选择</option>';
    $.each(_this.classifylist, function(k, v) {
        if (eval(regulars["0"])) {
            select_html += '<option value="' + v.id + '">' + v.name + '</option>';
            if (v.childmenu != null) {
                $.each(v.childmenu, function(k1, v1) {
                    if (eval(regulars["1"])) {
                        select_html += '<option value="' + v1.id + '">|——' + v1.name + '</option>';
                        if (v1.childmenu != null) {
                            $.each(v1.childmenu, function(k2, v2) {
                                if (eval(regulars["2"])) {
                                    select_html += '<option value="' + v2.id + '">|——|——' + v2.name + '</option>';
                                }
                            });
                        }
                    }
                });
            }
        }
    });
    select_html += '</select>';
    return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '">\n\
                <label>' + data["datatitle"] + '：</label>\n\
                <div style="display: inline-block;display: inline-block;vertical-align: top;"><div class="select_html">' + select_html + '<span class="del_classify" onclick="del_classify_select($(this));"><i class="fa fa-lg fa-minus-circle"></i></span></div>\
                <span class="add_classify" onclick="add_classify_select($(this));"><i class="fa fa-lg fa-plus-circle"></i></span></div>\n\
                <span class="promptword">(' + data["promptword"] + ')</span>\n\
                <input type="hidden" class="data"  value="" />\n\
            </li>';
}
function gethtml_list(data) {
    var select_html = '<select class="form-control select_data">';
    select_html += '<option value="">请选择</option>';
    $.each(_this.classifylist, function(k, v) {
        if (v["type"] <= 3) {
            select_html += '<option value="' + v.id + '">' + v.name + '</option>';
            if (v.childmenu != null) {
                $.each(v.childmenu, function(k1, v1) {
                    if (v1["type"] <= 3) {
                        select_html += '<option value="' + v1.id + '">|——' + v1.name + '</option>';
                        if (v1.childmenu != null) {
                            $.each(v1.childmenu, function(k2, v2) {
                                if (v2["type"] <= 3) {
                                    select_html += '<option value="' + v2.id + '">|——|——' + v2.name + '</option>';
                                }
                            });
                        }
                    }
                });
            }
        }
    });
    select_html += '</select>';
    return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '">\n\
                <label>' + data["datatitle"] + '：</label>\n\
                ' + select_html + '\
                <span class="promptword">(' + data["promptword"] + ')</span>\n\
                <input type="hidden" class="data"  value="" />\n\
            </li>';
}
function gethtml_page(data) {
    var select_html = '<select class="form-control select_data">';
    select_html += '<option value="">请选择</option>';
    $.each(_this.classifylist, function(k, v) {
        if (v["type"] == 4) {
            select_html += '<option value="' + v.id + '">' + v.name + '</option>';
        }
        if (v.childmenu != null) {
            $.each(v.childmenu, function(k1, v1) {
                if (v1["type"] == 4) {
                    select_html += '<option value="' + v1.id + '">' + v1.name + '</option>';
                }
                if (v1.childmenu != null) {
                    $.each(v1.childmenu, function(k2, v2) {
                        if (v2["type"] == 4) {
                            select_html += '<option value="' + v2.id + '">' + v2.name + '</option>';
                        }
                    });
                }
            });
        }
    });
    select_html += '</select>';
    return '<li data-role="' + data["dataname"] + '" data-type="' + data['type'] + '">\n\
                <label>' + data["datatitle"] + '：</label>\n\
                ' + select_html + '\
                <span class="promptword">(' + data["promptword"] + ')</span>\n\
                <input type="hidden" class="data" value="" />\n\
            </li>';
}
function select_data_set(data, page, role) {
//    $("ul[data-page=" + page + "] li[data-role=" + role + "] .data").val(data);
    $("ul[data-page=" + page + "] li[data-role=" + role + "] .select_data").val(data);
}
//父类文件 有gethtml是调用这些'gethtml_(type)'函数，实现对应type生成不同html,而type属于模块，写在对应的包含子文件

function data_set_page(v) {//单页数据设置赋值
    select_data_set(v['data'], v['page'], v['role']);
}
function data_set_list(v) {//列表数据设置赋值
    select_data_set(v['data'], v['page'], v['role']);
}
function data_set_classifys(v) {
    text_set(v['data'], v['page'], v['role']);
    var datas=v['data'].split(",");
    var html=$("ul[data-page=" + v['page'] + "] li[data-role=" + v['role'] + "] .select_html").first().prop("outerHTML");
    for(var i=1;i<datas.length;i++){
        $("ul[data-page=" + v['page'] + "] li[data-role=" + v['role'] + "]  .select_html").first().after(html);
    }
    for(i=0;i<datas.length;i++){
        $("ul[data-page=" + v['page'] + "] li[data-role=" + v['role'] + "]  .select_data").eq(i).val(datas[i]);
    }
}
function data_change_list() {
}
function data_change_page() {
}
function data_change_classifys() {
}
function save_list(page, role) {
    var data = {};
    data["type"] = "list";
    data["page"] = page;
    data["role"] = role;
    data["data"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".select_data").val();
    return data;
}
function save_page(page, role) {
    var data = {};
    data["type"] = "page";
    data["page"] = page;
    data["role"] = role;
    data["data"] = $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".select_data").val();
    return data;
}
function save_classifys(page, role) {
    var data = {};
    data["type"] = "classifys";
    data["page"] = page;
    data["role"] = role;
    var select_datas=[];
    var num=0;
    $("ul[data-page=" + page + "] li[data-role=" + role + "]").find(".select_data").each(function(){
        select_datas[num]=$(this).val();
        num++;
    });
    data["data"]=select_datas.join(",");
    return data;
}
window.add_classify_select=function(_this){
    var html=_this.siblings(".select_html").first().prop("outerHTML");
    _this.before(html);
}
window.del_classify_select=function(_this){
    var html=_this.parent(".select_html").siblings(".select_html");
    if(html.length>0){
        _this.parent(".select_html").remove();
    }else{
        _this.prev("select").val("");
    }
}