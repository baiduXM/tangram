var routerApp = angular.module('tangramApp', ['ui.router']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
/**
 * 配置路由。
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {
//    $urlRouterProvider.otherwise('/index');
//    $.ajax({
//        url: 'json/config.json',
//        async: false,
//        success: function(data) {
//            $.each(data, function(k, v) {
//                $.each(v, function(key, val) {
//                    console.log("key:" + key + ";val:" + val);
//                })
//            });
//        }
//    });
    var json;
    $.ajax({
        url: 'json/router.json',
        async: false,
        success: function(data) {
            json = data;
            $.each(data, function(k, routes) {
                $.each(routes, function(key, val) {
                    $stateProvider
                            .state(val.router, {
                                url: val.url,
                                templateUrl: val.templateUrl,
                                controller: function($scope, $rootScope, $injector) {
                                    is_login();
                                    change_option(val.router);
                                    if (val.jsurl) {
                                        var elem = document.createElement('script');
                                        elem.setAttribute('type', 'text/javascript');
                                        elem.setAttribute('src', val.jsurl);
                                        (document.body || document.getElementsByTagName('body')[0] || document.head || document.getElementsByTagName('head')[0] || document.documentElement).appendChild(elem);

                                        elem.onload = elem.onreadystatechange = function() {

                                            if (!elem.readyState || /loaded|complete/.test(elem.readyState)) {
                                                elem.onload = elem.onreadystatechange = null;
                                                if (eval('typeof ' + val.pagecontroller + ' == "function"')) {
                                                    //var prevMenuShow = $scope.$parent.menu.length > 0;
                                                    var pageController = eval(val.pagecontroller);
                                                    // Read pageController Params
                                                    var pageCtrlParamsNameArr = pageController.toString().match(/function.*\(([^(]*)\)/)[1].split(',');
                                                    var pageCtrlParamsArr = [], pageCtrlParamsArrNameArr = [];
                                                    for (var k in pageCtrlParamsNameArr) {
                                                        pageCtrlParamsNameArr[k] = pageCtrlParamsNameArr[k].trim();
                                                        if ($injector.has(pageCtrlParamsNameArr[k])) {
                                                            pageCtrlParamsArr[k] = $injector.get(pageCtrlParamsNameArr[k]);
                                                            pageCtrlParamsArrNameArr[k] = 'pageCtrlParamsArr[' + k + ']';
                                                        } else {
                                                            pageCtrlParamsArrNameArr[k] = eval("typeof " + pageCtrlParamsNameArr[k] + "!=='undefined'") ? pageCtrlParamsNameArr[k] : 'null';
                                                        }
                                                    }
                                                    eval("pageController(" + pageCtrlParamsArrNameArr.join(',') + ");")
                                                    $scope.$apply();
                                                    elem.parentNode.removeChild(elem);
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                });
            });

        }
    });
});
routerApp.controller('mainController', function($scope, $http) {
    $.ajax({
        url: '/customerInfo',
        async: false,
        dataType: "json",
        type: "POST",
        success: function(json) {
            $scope.username = json.username;
        }
    });
    $.ajax({
        url: 'json/left_sidebar.json',
        async: false,
        success: function(json) {
            var html = "";
            $.each(json, function(module, item) {
                $.each(item, function(k, v) {
                    if (typeof (v.childmenu) != "undefined" && v.childmenu.length > 0) {
                        html += '<li>\n\
                            <a href="javascript:void(0)" data-toggle="collapse" data-target="#' + v.en_name + '"><i class="fa fa-fw ' + v.icon + '"></i> ' + v.name + '<small>(' + v.en_name + ') </small> <i class="fa fa-fw fa-caret-down"></i></a>\n\
                            <ul id="' + v.en_name + '" class="collapse">';
                        $.each(v.childmenu, function(key, val) {
                            html += '<li data-url="' + val.dataurl + '">\n\
                                    <a href="' + val.url + '"><i class="fa ' + val.icon + '"></i><small> ' + val.name + '</small></a>\n\
                                </li>';
                        });

                        html += '</ul>\n\
                        </li>';
                    } else {
                        html += '<li data-url="' + v.dataurl + '">\n\
                            <a href="' + v.url + '" ><i class="fa fa-fw ' + v.icon + '"></i> ' + v.name + '<small>(' + v.en_name + ') </small></a>\n\
                        </li>';
                    }
                });
            });
            $(".navbar-collapse .side-nav").append(html);
        }
    });
    $.ajax({
        url: 'json/top_sidebar.json',
        async: false,
        success: function(json) {
            var html = "";
//            console.log($scope.username);
            $.each(json, function(module, item) {
                $.each(item, function(k, v) {
                    var s = v.name;
                    var reg = /\{\{(.*)\}\}/;
                    var bls = s.match(reg);
                    if (bls != null) {
                        v.name = eval('$scope.' + bls[1]);
                    }
                    if (typeof (v.childmenu) != "undefined" && v.childmenu.length > 0) {
                        html += '<li class="dropdown">\n\
                            <a href="javascript:void(0)"  class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw ' + v.icon + '"></i> ' + v.name + '<i class="fa fa-fw fa-caret-down"></i></a>\n\
                            <ul class="dropdown-menu">';
                        var num = 0;
                        var len = v.childmenu.length;
                        $.each(v.childmenu, function(key, val) {
                            html += '<li>\n\
                                    <a href="' + val.url + '"><i class="fa ' + val.icon + '"></i>' + val.name + '</a>\n\
                                </li>';
                            num++;
                            if (num < len) {
                                html += '<li class="divider"></li>';
                            }
                        });

                        html += '</ul>\n\
                        </li>';
                    } else {
                        html += '<li class="dropdown" >\n\
                            <a href="' + v.url + '" class="dropdown-toggle"><i class="fa fa-fw ' + v.icon + '"></i> ' + v.name + '</a>\n\
                        </li>';
                    }
                });
            });
            $(".navbar-fixed-top .top-nav").append(html);
        }
    });
});
