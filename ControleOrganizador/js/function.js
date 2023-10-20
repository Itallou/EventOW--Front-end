$(document).ready(function () {
    var atual_fs, next_fs, prev_fs;
    $('.next').click(function () {
        atual_fs = $(this).parent();
        next_fs = $(this).parent().next();

        $('#progress li,#progress2 li').eq($('fieldset').index(next_fs)).addClass('ativo');
        atual_fs.hide(800);
        next_fs.show(800);
    });
    $('.prev').click(function () {
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();

        $('#progress li,#progress2 li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
        atual_fs.hide(800);
        prev_fs.show(800);
    });

    //button function

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    //scroll
    var url = window.location.href;
    console.log(url);
    if (url.indexOf('#')>0) {
        window.location.replace('');
    }
});

