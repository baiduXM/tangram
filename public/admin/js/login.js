function init() {
    is_login();
    $("#login").click(function() {
        login();
    });
    key_fun();
}
function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        url: "/login-post",
        async: false,
        type: "POST",
        dataType: "json",
        data: {name: username, password: password},
        success: function(json) {
            if (json.err == 0) {
                alert(json.msg);
                location.href = "index.html/#/module";
            } else {
                alert(json.msg);
            }
        }
    });
}
function is_login() {
    $.ajax({
        url: "/is_login",
        async: false,
        type: "POST",
        dataType: "json",
        success: function(json) {
            if (json.err == 0) {
                location.href = "index.html/#/module";
            }
        }
    });
}
function key_fun() {
    $(document).keyup(function(e) {
        e = e || window.event;
        var code = e.which || e.keyCode;
        console.log(code);
        if (code == 13) {
            login();
        }
    });
}
init();