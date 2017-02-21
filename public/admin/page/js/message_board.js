function messageController($scope) {
    $scope.messageInit = function() {
        this._init();
    }
    $scope.messageInit.prototype = {
        _init: function() {
            this.getmessagelist();
        },
        getmessagelist:function(){
            $.ajax({
                url:"/get-message-list",
                type:"GET",
                dataType:"json",
                async:false,
                success:function(json){
                    var html="";
                    if(json.empty==0){
                        $.each(json.data,function(k,v){
                            html += '<tr data-id="' + v.id + '"><td class="text-center"><input type="checkbox" class="message_checked"/></td><td>' + (v.m_id?v.m_id:"非会员") + '</td><td>' + (v.name?v.name:"匿名") + '</td><td class="text-center">'+v.message+'</td><td class="text-center">'+v.tel+'</td><td class="text-center">'+v.fax_tel+'</td><td class="text-center">'+v.created_at+'</td></tr>';
                        });
                        $("#message_list tbody").html(html);
                    }else{
                        alert("暂无留言！");
                    }
                }
            });
        }
    }
    var init=new $scope.messageInit();
}