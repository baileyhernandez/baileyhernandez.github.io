let words;
let bgColor;
let textColor;
let showTitle = true;
let poem = [];

function preload() {
  words = loadJSON("words.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
  bgColor = randomColor();
  textColor = randomColor();
}

function draw() {
  background(bgColor);
  fill(textColor);

  if (showTitle) {
    textSize(48);
    text("click for a poem!", width / 2, height / 2);
  } else {
    textSize(32);
    for (let i = 0; i < poem.length; i++) {
      text(poem[i], width / 2, height / 2 - 60 + i * 40);
    }
  }
}

function mousePressed() {
  if (showTitle) {
    showTitle = false;
  }

  bgColor = randomColor();
  textColor = randomColor();
  poem = generatePoem();
}

function generatePoem() {
  let lines = [];
  for (let i = 0; i < 4; i++) {
    let adj = random(words.adjectives);
    let noun = random(words.nouns);
    let verb = random(words.verbs);
    let adv = random(words.adverbs);
    lines.push(`The ${adj} ${noun} ${verb} ${adv}.`);
  }
  return lines;
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
