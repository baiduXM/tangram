//保存提示效果
var Hint_box = function(text) {
    if (text == undefined) {
        text = '保存成功！';
    }
    $('body').append('<div class="hint_box">' + text + '</div>');
    setTimeout(function() {
        $('.hint_box').remove();
    }, 2000);
};
/**
 * 浮窗
 */
var Mask_panel = function(json) {
    var show_mask = 0;
    var html = '<div class="mask">\n\
                    <div class="panel panel-primary mask_panel ' + json.class + '">\n\
                        <div class="panel-heading">\n\
                            <h5 class="panel-title" style="display:inline;"><i class="fa fa-edit"></i> ' + json.title + '</h5><div class="myclose" style="float:right;"><i class="fa fa-lg fa-close"  alt="关闭"></i></div>\n\
                        </div>\n\
                        <div class="panel-body" style="height:500px;overflow:auto;">' + json.html + '</div>\n\
                        <div class="navbar-nav text-center" style="width:100%;"><button type="button" class="btn btn-primary save" style="margin: 10px;width:80px;">保存</button><button type="button" class="btn btn-primary cancel"  style="margin: 10px;width:80px;">取消</button></div>\n\
                    </div>\n\
                </div>';
    $("body").append(html);
    show_mask = 1;
    /**
     * 鼠标悬停关闭按钮上，提示关闭
     */
    $('.myclose').MoveBox({
        Trigger: 'mouseenter',
        context: '关闭',
        click_close: true
    });
    /**
     * 点击取消，退出
     */
    $(".mask .cancel").click(function() {
        if ($('.edui-default').length > 0) {
            $('.edui-editor').parents(".edui-default").each(function() {
                var id = $(this).attr("id");
                UE.getEditor(id).destroy();
            });
        }
        $(".mask").remove();
        show_mask = 0;
    });
    /**
     * 点击关闭按钮退出编辑
     */
    $('.mask .myclose').click(function() {
        if ($('.edui-default').length > 0) {
            $('.edui-editor').parents(".edui-default").each(function() {
                var id = $(this).attr("id");
                UE.getEditor(id).destroy();
            });
        }
        $(".mask").remove();
        show_mask = 0;
    });
    $(document).click(function(e) {
        if (show_mask == 1) {
            e = window.event || e;
            var obj = e.srcElement || e.target;
            if ($(obj).is(".mask")) {
                if ($('.edui-default').length > 0) {
                    $('.edui-editor').parents(".edui-default").each(function() {
                        var id = $(this).attr("id");
                        UE.getEditor(id).destroy();
                    });
                }
                $(".mask").remove();
                show_mask = 0;
            }
        }
    });
    /**
     * 点击esc退出编辑
     */
    $(document).keyup(function(e) {
        if (show_mask == 1) {
            e = e || window.event;
            var code = e.which || e.keyCode;
            if (code == 27) {
                if ($('.edui-default').length > 0) {
                    $('.edui-editor').parents(".edui-default").each(function() {
                        var id = $(this).attr("id");
                        UE.getEditor(id).destroy();
                    });
                }
                $(".mask").remove();
                show_mask = 0;
            }
        }
    });
}
function init() {
    is_login();
}
function is_login() {
    $.ajax({
        url: "/is_login",
        async: false,
        type: "POST",
        dataType: "json",
        success: function(json) {
            if (json.err == 2001) {
                alert(json.msg);
                location.href = "login.html";
            }
        }
    });
}
function change_option(router) {
//    alert(1);
    $(".side-nav li").removeClass("active");
    $(".side-nav li").find("ul").removeClass("in");
    $(".side-nav li").find("ul").attr("aria-expanded", "false");
    $(".side-nav li").find("ul").css("height", "0px");
    $(".side-nav li[data-url=" + router + "]").addClass("active");
    $(".side-nav li[data-url=" + router + "]").parents("li ul").addClass("in");
    $(".side-nav li[data-url=" + router + "]").parents("li ul").css("height", "");
    $(".side-nav li[data-url=" + router + "]").parents("li ul").attr("aria-expanded", "true");
}
init();

