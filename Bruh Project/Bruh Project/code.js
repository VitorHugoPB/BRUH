var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b454a207-35ba-45ba-8eca-b8c9f359f28d","72652484-fe4d-4e7e-a304-c4ae2f3f6e0b","4e116aa6-6bb3-47f2-afe6-e3e34a277e91","740690d3-62e6-4a40-b8d1-9a5363c4309b","c11bb08e-366a-4f06-8591-bb11bf06c4b2"],"propsByKey":{"b454a207-35ba-45ba-8eca-b8c9f359f28d":{"name":"brh","sourceUrl":null,"frameSize":{"x":88,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZEScuMh_ojVRBdJBRw_YXfJeFAlEStWo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":131},"rootRelativePath":"assets/b454a207-35ba-45ba-8eca-b8c9f359f28d.png"},"72652484-fe4d-4e7e-a304-c4ae2f3f6e0b":{"name":" h","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"loAXUHkbE975boMriNHYUx0fSI1qxLbP","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/72652484-fe4d-4e7e-a304-c4ae2f3f6e0b.png"},"4e116aa6-6bb3-47f2-afe6-e3e34a277e91":{"name":"fox","sourceUrl":"assets/api/v1/animation-library/gamelab/si6fMWPKidsNx06Vyp43ncgB2o8Ygc.x/category_animals/fox.png","frameSize":{"x":394,"y":260},"frameCount":1,"looping":true,"frameDelay":2,"version":"si6fMWPKidsNx06Vyp43ncgB2o8Ygc.x","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":260},"rootRelativePath":"assets/api/v1/animation-library/gamelab/si6fMWPKidsNx06Vyp43ncgB2o8Ygc.x/category_animals/fox.png"},"740690d3-62e6-4a40-b8d1-9a5363c4309b":{"name":"hare","sourceUrl":"assets/api/v1/animation-library/gamelab/MiwZVzWBqCz_YfappaNHyYrX7vDn.3eo/category_animals/hare.png","frameSize":{"x":282,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"MiwZVzWBqCz_YfappaNHyYrX7vDn.3eo","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MiwZVzWBqCz_YfappaNHyYrX7vDn.3eo/category_animals/hare.png"},"c11bb08e-366a-4f06-8591-bb11bf06c4b2":{"name":"turkey","sourceUrl":"assets/api/v1/animation-library/gamelab/OfL_R63KI5Xc4IVbur5epsW6yYGTYMn9/category_animals/turkey.png","frameSize":{"x":398,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"OfL_R63KI5Xc4IVbur5epsW6yYGTYMn9","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OfL_R63KI5Xc4IVbur5epsW6yYGTYMn9/category_animals/turkey.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var h = createSprite(200,200);
h.setAnimation(" h");
var enemy1 = createSprite(200, 250, 10, 10);
enemy1.setAnimation("fox");
enemy1.scale = .1;
var enemy2 = createSprite(200, 150, 10, 10);
enemy2.setAnimation("hare");
enemy2.scale = .1;
var enemy3 = createSprite(200, 50, 10, 10);
enemy3.setAnimation("turkey");
enemy3.scale = .1;
var net = createSprite(200,5,200,20)
net.shapeColor="white_brown";

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);
var goal =0;
var death = 0
var Bruh = createSprite(200, 345, 200, 345);
Bruh.setAnimation("brh");
Bruh.scale = .5;
function draw() {
  if (keyDown("up_arrow")) {
    Bruh.y = Bruh.y - 3;
  }
  if (keyDown("down_arrow")) {
    Bruh.y = Bruh.y + 3;
  }
  if (keyDown("right_arrow")) {
    Bruh.x = Bruh.x + 3;
  }
  if (keyDown("left_arrow")) {
    Bruh.x = Bruh.x - 3;
  }
  if(Bruh.isTouching(enemy1)|| Bruh.isTouching(enemy2)|| Bruh.isTouching(enemy3)){
  playSound("assets/category_explosion/playful_game_explosion_5.mp3");
  Bruh.x=200
  Bruh.y=350
  death = death+1
  }
  if(Bruh.isTouching(net)){
  playSound("assets/category_pop/deep_bubble_notification.mp3");
  Bruh.x=200
  Bruh.y=345
  goal=goal+1
  }
  createEdgeSprites()
  Bruh.bounceOff(edges);
  enemy1.bounceOff(edges);
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
  textSize(20);
  fill("blue")
  text("Objetivos:"+goal,320,350);
  
  
  textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
