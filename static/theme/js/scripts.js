$(document).ready(function () {
    $('.popup .close-window, .overlay').click(function () {
        $('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
    });
    $('button.open-window').click(function (e) {
        $('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
        e.preventDefault();
    });
});