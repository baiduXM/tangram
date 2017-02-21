function uploadsettingController($scope, $http) {
    $scope.uploadsettingInit = function() {
        this._init();
    };
    $scope.uploadsettingInit.prototype = {
        _init: function() {
            this.uploadsettingcancel(this);
            this.getuploadsetting();
            this.setuploadsetting();
            this.uploadimgtest();
            this.uploadfiletest();

        },
        getuploadsetting: function() {
            $.ajax({
                url: "/upload-setting",
                type: "POST",
                dataType: "json",
                async: false,
                data: {do: "get"},
                success: function(json) {
                    if (json.empty == 0) {
                        $("#upload_setting .imgdir").val(json.data.imgdir);
                        $("#upload_setting .imgmaxsize").val(json.data.imgmaxsize);
                        $("#upload_setting .filedir").val(json.data.filedir);
                        $("#upload_setting .filemaxsize").val(json.data.filemaxsize);
                    }
                }
            });
        },
        setuploadsetting: function() {
            $("#upload_setting .save").click(function() {
                var data = {};
                data["imgdir"] = $("#upload_setting .imgdir").val();
                data["imgmaxsize"] = $("#upload_setting .imgmaxsize").val();
                data["filedir"] = $("#upload_setting .filedir").val();
                data["filemaxsize"] = $("#upload_setting .filemaxsize").val();
                $.ajax({
                    url: "/upload-setting",
                    type: "POST",
                    dataType: "json",
                    async: false,
                    data: {do: "modify", value: data},
                    success: function(json) {
                        var hint = new Hint_box(json.msg);
                    }
                });
            });

        },
        uploadimgtest: function() {
            $("#upload_img_test .sumbit").click(function() {
                var data = new FormData();
                if ($(".imgtest")[0].files.length > 0) {
                    data.append("image", $(".imgtest")[0].files[0]);
                    $.ajax({
                        url: "/upload-image",
                        type: "POST",
                        cache: false,
                        processData: false,
                        contentType: false,
                        data: data,
                        success: function(json) {
                            alert(json.msg);
                        }
                    });
                } else {
                    alert("请选择图片");
                }
            });
        },
        uploadfiletest: function() {
            $("#upload_file_test .sumbit").click(function() {
                var data = new FormData();
                if ($(".filetest")[0].files.length > 0) {
                    data.append("file", $(".filetest")[0].files[0]);
                    $.ajax({
                        url: "/upload-file",
                        type: "POST",
                        cache: false,
                        processData: false,
                        contentType: false,
                        data: data,
                        success: function(json) {
                            alert(json.msg);
                        }
                    });
                } else {
                    alert("请选择文件");
                }
            });
        },
        uploadsettingcancel: function(_this) {
            $("#upload_setting .cancel").click(function() {
                _this.getuploadsetting();
                var hint = new Hint_box("取消修改！");
            });
        }
    }
    var init = new $scope.uploadsettingInit();
}

