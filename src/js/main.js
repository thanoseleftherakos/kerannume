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
              
              var m = Math.floor(Math.random() * 10) + 1  ;
              var h = Math.floor(Math.random() * 10) + 1  ;
                
              if ($(window).width() < 769 ) {
                var m = Math.floor(Math.random() * 10) + 1  ;
                var h = Math.floor(Math.random() * 5) + 1  ;
                $(this).css({'max-width' :30+'vw',  'margin-left' : m+'em', 'margin-top' : h+'em'});
              } else if ($(window).width() > 769 ) {
                  $(this).css({'max-width' :450+'px',  'margin-left' : m+'em', 'margin-top' : h+'em'});
              } else {
                  return;
              }
          })

      pckry.layout();
      pckry.once( 'layoutComplete', function() {
        $('.grid').css({'opacity': 1});
      });
});

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }