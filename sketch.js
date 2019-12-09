let rex;
let uImg;
let tImg;
let bImg;
let cactus = [];

function preload() {
  const options = {
    probabilityThreshold: 0.95  };
  uImg = loadImage('pa2.png');
  tImg = loadImage('cactus3.png');
  bImg = loadImage('suelo.png');
}

function setup() {
  createCanvas(800, 450);
  rex = new Rex();
}


function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    rex.jump();
  }
}


function keyPressed() {
  if (key == ' ') {
    rex.jump();
  }
}

function draw() {
  
  if (random(1) < 0.005) {
    cactus.push(new Cactus());
  }
  
  background(bImg);
  for (let t of cactus) {
    t.move();
    t.show();
    if (rex.hits(t)) {
      console.log('GAME OVER');
      noLoop();
    }
  }

  rex.show();
  rex.move();
}