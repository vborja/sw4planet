;(function($,undefined){

  var init = function(){

    var fx = $.superscrollorama()
    fx.addTween('.are-you',
                TweenMax.fromTo( $('.you'), 1
                                 , { immediateRender:true,
                                     css:{ left: '-120%' }}
                                 , { css:{ left: '0px' }}),
                100)

    fx.pin( $('.are-you'), 1000, {
      offset: -150,
      onPin: function(){
      },
      onUnpin: function(){
      }
    })

    fx.addTween( 300,
                 TweenMax.fromTo( $('.designer'), 1
                                  , { immediateRender:true,
                                      css:{ left: '120%' }}
                                  , { css:{ left: '-120%' }})
                ,600)

    fx.addTween( 600,
                 TweenMax.fromTo( $('.programmer'), 1
                                  , { immediateRender:true,
                                      css:{ left: '120%' }}
                                  , { css:{ left: '-120%' }})
                ,600)


    fx.addTween( 900,
                 TweenMax.fromTo( $('.business'), 1
                                  , { immediateRender:true,
                                      css:{ left: '120%' }}
                                  , { css:{ left: '-120%' }})
                ,600)


    fx.addTween( 1200,
                 TweenMax.fromTo( $('.changer'), 1
                                  , { immediateRender:true,
                                      css:{ left: '120%' }}
                                  , { css:{ left: '0px'}})
                ,300)


  }

  $(init)

})(jQuery)
