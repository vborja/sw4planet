;(function($,undefined){

  var init = function(){

    var fx = $.superscrollorama()
    fx.addTween('.are-you',
                TweenMax.fromTo( $('.you'), 1
                                 , { immediateRender:true,
                                     css:{ left: '-120%' }}
                                 , { css:{ left: '0px' }}),
                10)

    fx.pin( $('.are-you'), 1000, {
      offset: -150,
      onPin: function(){
        $('#come .pin-spacer').height('1500px')
        $('#come .pin-stop').css('top', '0px')
      },
      onUnpin: function(){
        $('#come .pin-spacer').height('600px')
        $('#come .pin-stop').css('top', '-700px')
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


    fx.pin('.friday', 1000, {
      offset: -50,
      anim: (new TimelineLite)
       .append([
         TweenMax.from( $('.friday .meet'), 1,
                        { immediateRender: true, css: { left: '200%' } } )
       ])
       .append([
         TweenMax.from( $('.friday .share'), 1,
                        { immediateRender: true,css: { left: '-200%' } } )
       ])
       .append([
         TweenMax.from( $('.friday .team'), 1,
                        { immediateRender: true,css: { left: '200%' } } )
       ])
       .append([
         TweenMax.from( $('.friday .work'), 1,
                        { immediateRender: true,css: { left: '-200%' } } )
       ])
    })

    fx.pin('.saturday', 1000, {
      offset: -50,
      anim: (new TimelineLite)
       .append([
         TweenMax.from( $('.saturday .validate'), 1,
                        { immediateRender: true,css: { left: '-200%' } } )
       ])
       .append([
         TweenMax.from( $('.saturday .build'), 1,
                        { immediateRender: true,css: { left: '200%' } } )
       ])
       .append([
         TweenMax.from( $('.saturday .mentor'), 1,
                        { immediateRender: true,css: { left: '-200%' } } )
       ])
    })

    fx.pin('.sunday', 1000, {
      offset: -50,
      anim: (new TimelineLite)
       .append([
         TweenMax.from( $('.sunday .finish'), 1,
                        { immediateRender: true,css: { left: '-200%' } } )
       ])
       .append([
         TweenMax.from( $('.sunday .pitch'), 1,
                        { immediateRender: true,css: { left: '-200%' } } )
       ])
       .append([
         TweenMax.from( $('.sunday .win'), 1,
                        { immediateRender: true,css: { left: '200%' } } )
       ])
    })


  }

  $(init)

})(jQuery)
