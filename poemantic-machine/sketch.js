let nouns, verbs, adjectives, themes;
let poemText = '';
let poemLines = [];
let font;

function preload() {
  // Load JSON files
  nouns = loadJSON('nouns.json');
  verbs = loadJSON('verbs.json');
  adjectives = loadJSON('adjectives.json');
  themes = loadJSON('themes.json');
}

function setup() {
  createCanvas(600, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
  noLoop();
  background(30);

  // Generate the first poem on load
  generatePoem();
}

function draw() {
  background(30);

  // Display the generated poem with an animation
  let yOffset = height / 3;
  for (let i = 0; i < poemLines.length; i++) {
    let line = poemLines[i];
    fill(255, 255, 255, 180);
    text(line.text, width / 2, yOffset);
    yOffset += 40;

    // Animate the lines
    if (line.alpha < 255) {
      line.alpha += 5; // Fade in
    }
    fill(255, 255, 255, line.alpha);
  }
}

function mousePressed() {
  // Generate a new poem on mouse click
  generatePoem();
  loop(); // Start animating the poem
}

function generatePoem() {
  poemLines = []; // Clear previous lines

  // Randomly create a poem from the JSON data
  let theme = random(themes);
  let adjective = random(adjectives);
  let noun = random(nouns);
  let verb = random(verbs);

  let lines = [
    `${adjective} ${noun}`,
    `${verb} in the ${theme}`,
    `This is a tale of ${theme}`
  ];

  // Add lines to poem and create animation properties
  for (let i = 0; i < lines.length; i++) {
    poemLines.push({
      text: lines[i],
      alpha: 0
    });
  }
  poemText = lines.join("\n");
}

