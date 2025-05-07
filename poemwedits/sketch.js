let words;
let bgColor;
let textColor;
let font;
let showTitle = true;
let clickCount = 0;

function preload() {
  words = loadJSON("words.json");
  font = loadFont("https://db.onlinewebfonts.com/t/933bc0c0b64b93c6d65eebf89dfb2e8e.woff2");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textSize(48);
  noLoop();
  setRandomColors();
}

function draw() {
  background(bgColor);
  fill(textColor);

  if (showTitle) {
    textSize(60);
    text("Click to Begin", width / 2, height / 2);
  } else {
    textSize(48);
    const poem = generatePoem();
    text(poem, width / 2, height / 2);
  }
}

function mousePressed() {
  if (showTitle) {
    showTitle = false;
  }
  setRandomColors();
  redraw();
}

function generatePoem() {
  const noun = random(words.nouns);
  const verb = random(words.verbs);
  const adj = random(words.adjectives);
  const adv = random(words.adverbs);
  return `The ${adj} ${noun} ${verb} ${adv}.`;
}

function setRandomColors() {
  bgColor = color(random(255), random(255), random(255));
  textColor = color(random(255), random(255), random(255));
  while (textColor.toString() === bgColor.toString()) {
    textColor = color(random(255), random(255), random(255));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
