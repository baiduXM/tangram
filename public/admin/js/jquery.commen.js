/*移动提示框*/
;
(function($, window, document, undefined) {
    $.fn.MoveBox = function(options) {
        // config
        options = $.extend(true, {
            MoveNode: null,
            Trigger: null,
            XOffset: 5,
            YOffset: -10,
            context: '此栏目暂时无对应样式，无法开启展示！',
            click_close: false,
            callback: function() {
            }
        }, options);
        var _BoxDiv = $('<div class="BoxStyle">' + options.context + '</div>');
        this.each(function() {
            var _this = $(this),
                    MoveNode = (options.MoveNode != null ? $('.' + options.MoveNode) : '') || _this,
                    Trigger = (options.Trigger != null ? options.Trigger : 'click');
            MoveNode.on(Trigger, function(event) {

                $('body').append(_BoxDiv);
                _BoxDiv.css({
                    'top': (event.pageY - options.YOffset) + 'px',
                    'left': (event.pageX + options.XOffset) + 'px',
                }).fadeIn('slow');
            }).mouseleave(function() {
                _BoxDiv.fadeOut('fast', function() {
                    $(this).remove();
                });
            }).mousemove(function(event) {
                _BoxDiv.css({
                    'top': (event.pageY - options.YOffset) + 'px',
                    'left': (event.pageX + options.XOffset) + 'px',
                });
            });
            if (options.click_close) {
                MoveNode.click(function() {
                    _BoxDiv.fadeOut('fast', function() {
                        $(this).remove();
                    });
                });
            }

        });
        return this;
    }
})(jQuery, window, document);

// serializeArray()转化
$.fn.serializeJson = function() {
    var serializeObj = [];
    $(this.serializeArray()).each(function() {
        serializeObj[this.name] = this.value;
    });
    return serializeObj;
};
