$(function() {
    var nav = $(".hidden");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= innerHeight) {
            nav.removeClass('hidden');
        } else {
            nav.addClass('hidden');
        }
    });
});
