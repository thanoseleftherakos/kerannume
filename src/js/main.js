window.jQuery = $ = require('jquery');
var Packery = require('packery');

$(document).ready(function(){

    $('.menu__icon').click(function () {
        $('.nav-menu').addClass('show');
    })

    $('.close').click(function () {
        $('.nav-menu').removeClass('show');
    })

    var elem = document.querySelector('.grid');
    var pckry = new Packery( elem, {
        // options
        itemSelector: '.grid__item',
        percentPosition: true,
      });
      $('.grid__item').each(function(){
        var m = Math.floor(Math.random() * 20) + 1  ;
        var h = Math.floor(Math.random() * 20) + 1  ;
        var width = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
        $(this).css({'max-width' :450+'px',  'margin-left' : m+'em', 'margin-top' : h+'em'});
      })
      pckry.layout();
      pckry.once( 'layoutComplete', function() {
        $('.grid').css({'opacity': 1});
      });
});

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }