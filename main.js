// File: main.js
//
(function($){
    $(document).ready(function(){
        $.fn.encode.defaults.scrambleColor = 'Gray';

        $('#scramble').on('click', function(e){
            $('.scramble').encode().css('font-size', '32px');
        });

        $('#unscramble').on('click', function(e){
            $('.scramble').encode({action: 'unscramble', unscrambleColor: 'Green'});
        });

    });
})(jQuery);
