(function($){

    $.fn.encode = function(options) {

        var settings = $.extend({}, $.fn.encode.defaults, options);

        return this.each(function(){
            var current_value = $(this).text();
            var newValue = '';
            var i = 0;

            if (settings.action === 'scramble') {
                for (i = 0; i < current_value.length; i++) {
                    newValue = newValue + String.fromCharCode(current_value.charCodeAt(i) + 1);
                }
                $(this).text(newValue).css('color', settings.scrambleColor);
            } // if ...

            if (settings.action === 'unscramble') {
                for (i = 0; i < current_value.length; i++) {
                    newValue = newValue + String.fromCharCode(current_value.charCodeAt(i) - 1);
                }
                $(this).text(newValue).css('color', settings.unscrambleColor);
            } // if ...

        }); /* this.each(function(){ ... */

    }; // $.fn.encode = function(action) {

    $.fn.encode.defaults = {
        scrambleColor: 'Blue',
        unscrambleColor: 'Green',
        action: 'scramble'
    };


})(jQuery);

