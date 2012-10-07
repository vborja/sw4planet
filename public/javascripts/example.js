;(function($, undefined){




  var init= function() {

    var controller = $.superscrollorama();

    controller.pin( $('.are-you'), 2000, {
      onPin: function(){
        $('.pin-spacer').height('400px')
      }
    })

    controller.addTween( '.are-you',

                         (new TimelineLite)
                         .append([
                           TweenMax.from( $('.are-you .eres'), 1,
                              {css: {left: '-120%'}, immediateRender: true}
                           )])

                         .append([
                           TweenMax.from( $('.are-you .designer'), 1,
                            {css:{
                              left:'100%'
                            }, immediateRender:true}
                           )])

                         .append([
                           TweenMax.to( $('.are-you .designer'), 1,
                            {css:{
                              top:'-200%'
                            }}
                           )])

                         .append([
                           TweenMax.fromTo( $('.are-you .programmer'), 1,
                            {css:{
                              left:'100%'
                            }, immediateRender:true},
                            {css:{
                              left:'-120%'
                            }}
                           )])

                         .append([
                           TweenMax.fromTo( $('.are-you .business'), 1,
                            {css:{
                              left:'100%'
                            }, immediateRender:true},
                            {css:{
                              left:'-120%'
                            }}
                           )])

                         .append([
                           TweenMax.fromTo( $('.are-you .innovator'), 1,
                            {css:{
                              left:'100%'
                            }, immediateRender:true},
                            {css:{
                              left:'-120%'
                            }}
                           )]),

                        5000)

  }

  $(init)


})(jQuery)
