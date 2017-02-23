(function($){
    $(document).ready(function(){
        $('#scramble').on('click', function(e){
            $('.scramble').
            encoder();
        });

        $('#unscramble').on('click', function(e){

            $('.scramble').
            encoder({action: 'unscramble'});
        });

    });
})(jQuery);
