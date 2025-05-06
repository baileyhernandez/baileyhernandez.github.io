let words;
let poem = [];

function preload() {
  words = loadJSON('words.json');
}

function setup() {
  createCanvas(600, 400);
  textAlign(LEFT, TOP);
  textSize(20);
  fill(40);
  noLoop();
  generatePoem();
}

function draw() {
  background(250);
  let y = 50;
  for (let line of poem) {
    text(line, 50, y);
    y += 40;
  }
}

function mousePressed() {
  generatePoem();
  redraw();
}

function generatePoem() {
  poem = [];
  for (let i = 0; i < 4; i++) {
    let line = `${random(words.adjectives)} ${random(words.nouns)} ${random(words.verbs)} ${random(words.adverbs)}.`;
    poem.push(capitalizeFirst(line));
  }
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
