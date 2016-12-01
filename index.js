$(function() {  
  var scrollMagicController = new ScrollMagic.Controller();
  
  var tween1 = TweenMax.to('#animation-1', 0.3, {
    backgroundColor: 'rgb(255, 255, 255)',
    scale: 10,
    display: 'none',
    transition: 'opacity 2s ease-out',
    rotation: 360
  });
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#scene-1',
    offset: 50
  })
  .setClassToggle('body', 'scene-1-active')
  .setTween(tween1)
  .addTo(scrollMagicController);

  var scene1b = new ScrollMagic.Scene({
    triggerElement: '#scene-1',
    offset: 50
  })
  .setClassToggle('#text-1', "active-text-hidden")
  .setTween(tween1)
  .addTo(scrollMagicController);

  var scene1c = new ScrollMagic.Scene({
    triggerElement: '#scene-1',
    offset: 70
  })
  .setClassToggle('#text-1', "active-text-visible")
  .setTween(tween1)
  .addTo(scrollMagicController);


  var scene1d = new ScrollMagic.Scene({
    triggerElement: '#scene-1',
    offset: 50
  })
  .setClassToggle('#title-1', "chapter-title-1-active")
  .setTween(tween1)
  .addTo(scrollMagicController);

  
    // Create Animation for 0.5s
  var tween2 = TweenMax.to('#animation-2', 0.3, {
    backgroundColor: 'rgb(255, 255, 255)',
    scale: 10,
    display: 'none',
    transition: 'opacity 2s ease-out',
    rotation: 360
  });
  
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#scene-2',
        offset: 50
  })
  .setClassToggle('body', 'scene-2-active')
  .setTween(tween2)
  .addTo(scrollMagicController);

  var scene2b = new ScrollMagic.Scene({
    triggerElement: '#scene-2',
    offset: 50
  })
  .setClassToggle('#text-2', "active-text-hidden")
  .setTween(tween2)
  .addTo(scrollMagicController);

  var scene2c = new ScrollMagic.Scene({
    triggerElement: '#scene-2',
    offset: 70
  })
  .setClassToggle('#text-2', "active-text-visible")
  .setTween(tween2)
  .addTo(scrollMagicController);


  var scene2d = new ScrollMagic.Scene({
    triggerElement: '#scene-2',
    offset: 50
  })
  .setClassToggle('#title-2', "chapter-title-2-active")
  .setTween(tween2)
  .addTo(scrollMagicController);
  
  
  
      // Create Animation for 0.5s
  var tween3 = TweenMax.to('#animation-3', 0.3, {
    backgroundColor: 'rgb(255, 255, 255)',
    scale: 10,
    display: 'none',
    transition: 'opacity 2s ease-out',
    rotation: 360
  });
  
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '#scene-3',
        offset: 50
  })
  .setClassToggle('body', 'scene-3-active')
  .setTween(tween3)
  .addTo(scrollMagicController);
  
  var scene3b = new ScrollMagic.Scene({
    triggerElement: '#scene-3',
    offset: 50
  })
  .setClassToggle('#text-3', "active-text-hidden")
  .setTween(tween3)
  .addTo(scrollMagicController);

  var scene3c = new ScrollMagic.Scene({
    triggerElement: '#scene-3',
    offset: 70
  })
  .setClassToggle('#text-3', "active-text-visible")
  .setTween(tween3)
  .addTo(scrollMagicController);


  var scene3d = new ScrollMagic.Scene({
    triggerElement: '#scene-3',
    offset: 50
  })
  .setClassToggle('#title-3', "chapter-title-3-active")
  .setTween(tween3)
  .addTo(scrollMagicController);
  
  
      // Create Animation for 0.5s
  var tween4 = TweenMax.to('#animation-4', 0.3, {
    backgroundColor: 'rgb(255, 255, 255)',
    scale: 10,
    display: 'none',
    transition: 'opacity 2s ease-out',
    rotation: 360
  });
  
  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#scene-4',
        offset: 50
  })
  .setClassToggle('body', 'scene-4-active')
  .setTween(tween4)
  .addTo(scrollMagicController);
  
  var scene4b = new ScrollMagic.Scene({
    triggerElement: '#scene-4',
    offset: 50
  })
  .setClassToggle('#text-4', "active-text-hidden")
  .setTween(tween4)
  .addTo(scrollMagicController);

  var scene4c = new ScrollMagic.Scene({
    triggerElement: '#scene-4',
    offset: 70
  })
  .setClassToggle('#text-4', "active-text-visible")
  .setTween(tween4)
  .addTo(scrollMagicController);


  var scene4d = new ScrollMagic.Scene({
    triggerElement: '#scene-4',
    offset: 50
  })
  .setClassToggle('#title-4', "chapter-title-4-active")
  .setTween(tween4)
  .addTo(scrollMagicController);  

      // Create Animation for 0.5s
  var tween5 = TweenMax.to('#animation-5', 0.3, {
    backgroundColor: 'rgb(255, 255, 255)',
    scale: 10,
    display: 'none',
    transition: 'opacity 2s ease-out',
    rotation: 360
  });
  
  var scene5 = new ScrollMagic.Scene({
    triggerElement: '#scene-5',
        offset: 50
  })
  .setClassToggle('body', 'scene-5-active')
  .setTween(tween5)
  .addTo(scrollMagicController);
  
  var scene5b = new ScrollMagic.Scene({
    triggerElement: '#scene-5',
    offset: 50
  })
  .setClassToggle('#text-5', "active-text-hidden")
  .setTween(tween5)
  .addTo(scrollMagicController);

  var scene5c = new ScrollMagic.Scene({
    triggerElement: '#scene-5',
    offset: 70
  })
  .setClassToggle('#text-5', "active-text-visible")
  .setTween(tween5)
  .addTo(scrollMagicController);


  var scene5d = new ScrollMagic.Scene({
    triggerElement: '#scene-5',
    offset: 50
  })
  .setClassToggle('#title-5', "chapter-title-5-active")
  .setTween(tween5)
  .addTo(scrollMagicController);  


        // Create Animation for 0.5s
  var tween6 = TweenMax.to('#animation-6', 0.3, {
    backgroundColor: 'rgba(214, 206, 206, 0.54)',
    scale: 10,
    display: 'none',
    transition: 'opacity 2s ease-out',
    rotation: 360
  });
  
  var scene6 = new ScrollMagic.Scene({
    triggerElement: '#scene-6',
        offset: 50
  })
  .setClassToggle('body', 'scene-6-active')
  .setTween(tween6)
  .addTo(scrollMagicController);
  
  var scene6b = new ScrollMagic.Scene({
    triggerElement: '#scene-6',
    offset: 50
  })
  .setClassToggle('#text-6', "active-text-hidden")
  .setTween(tween6)
  .addTo(scrollMagicController);

  var scene6c = new ScrollMagic.Scene({
    triggerElement: '#scene-6',
    offset: 70
  })
  .setClassToggle('#text-6', "active-text-visible")
  .setTween(tween6)
  .addTo(scrollMagicController);


  var scene6d = new ScrollMagic.Scene({
    triggerElement: '#scene-6',
    offset: 50
  })
  .setClassToggle('#title-6', "chapter-title-6-active")
  .setTween(tween6)
  .addTo(scrollMagicController);  

  // Add debug indicators fixed on right side
   scene1.addIndicators();
    scene2.addIndicators();
  scene3.addIndicators();
  scene4.addIndicators()
  scene5.addIndicators()
  scene6.addIndicators()
  
});
