// File: jquery.tcb.encoder.js
//
(function($){
    $.fn.encode = function (options) {
        var settings = $.extend({}, $.fn.encode.defaults, options);

        return this.each(function(){

            var $this = $(this);

            var currentValue = $this.text();
            var newValue = '';
            var i = 0;

            for (i = 0; i < currentValue.length; i++) {
                if (settings.action === 'scramble') {
                    newValue = newValue + String.fromCharCode(currentValue.charCodeAt(i) + 1);
                }
                else if (settings.action == 'unscramble') {
                    newValue = newValue + String.fromCharCode(currentValue.charCodeAt(i) - 1);
                }
            }
            $this.text(newValue).css('color', settings.action === 'scramble' ? settings.scrambleColor : settings.unscrambleColor);

        });
    };

    $.fn.encode.defaults = {
        action: 'scramble',
        scrambleColor: 'Blue',
        unscrambleColor: 'Black'
    }
})(jQuery);

