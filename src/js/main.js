window.jQuery = $ = require('jquery');

$(document).ready(function(){

    $('.menu__icon').click(function () {
        $('.nav-menu').addClass('show');
    })

    $('.close').click(function () {
        $('.nav-menu').removeClass('show');
    })

});
