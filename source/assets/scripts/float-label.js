/*
 * Interaction design based on:
 * http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction?list=users
 */
jQuery(document).ready(function($) {


  // Test for placeholder support
  $.support.placeholder = (function(){
      var i = document.createElement('input');
      return 'placeholder' in i;
  })();



  // Hide labels by default if placeholders are supported
  if($.support.placeholder) {
    // Caching input/text labels
    var inputs = $('.js-float').find('input, textarea');

    inputs.each(function(){
      var $this = $(this),
        $parent = $this.parent();

      if ( !$.trim( $this.val() ) ) {
        $parent.addClass('float--label-hidden');
      } else {
        $parent.addClass('float--label-defocus');
      }
    });

    // Code for adding/removing classes here
    inputs.on('keyup blur change focus', function(event){



      // Cache our selectors
      var $this = $(this),
        $parent = $this.parent();

      if (event.type == 'keyup' || event.type == 'blur') {
        if( $this.val() == '' ) {
          $parent.addClass('float--label-hidden');
        } else {
          $parent.removeClass('float--label-hidden');
        }
      }


      else if (event.type == 'focus') {
        if ( $.trim( $this.val() ) ) {
            $parent.removeClass('float--label-defocus');
        }
      }
    });
  }
  $('.js-bubble').on('click', function(){
    $(this).find('.bubble__content').toggleClass('is-hidden');
  });

  $('.js-toggle-this').on('click', function(){
    $(this).toggleClass('is-hidden');
  });


});