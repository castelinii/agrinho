function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let player;
let campoItem;
let cidadeItem;
let pontos = 0;

function setup() {
  createCanvas(600, 400);
  player = createVector(width / 2, height / 2);
  campoItem = createVector(random(50, 250), random(50, 350));
  cidadeItem = createVector(random(350, 550), random(50, 350));
}

function draw() {
  background(135, 206, 250);

  // Grama
  fill(60, 179, 113);
  rect(0, 300, width, 100);

  // Campo
  fill(34, 139, 34);
  rect(0, 0, width / 2, height);

  // Cidade
  fill(169, 169, 169);
  rect(width / 2, 0, width / 2, height);

  // Jogador
  fill(255, 220, 177);
  ellipse(player.x, player.y, 30, 30);

  // Itens
  fill(255, 255, 0);
  ellipse(campoItem.x, campoItem.y, 20, 20); // item do campo (milho 🌽)

  fill(0);
  rect(cidadeItem.x, cidadeItem.y, 20, 20); // item da cidade (caixa 📦)

  // Pontuação
  fill(255);
  textSize(20);
  text("Pontos: " + pontos, 20, 30);
  text("Use as setas para se mover", 20, 60);

  // Verifica colisão com item do campo
  if (dist(player.x, player.y, campoItem.x, campoItem.y) < 25) {
    campoItem = createVector(random(50, 250), random(50, 350));
    pontos += 1;
  }

  // Verifica colisão com item da cidade
  if (dist(player.x, player.y, cidadeItem.x, cidadeItem.y) < 25) {
    cidadeItem = createVector(random(350, 550), random(50, 350));
    pontos += 1;
  }
}

function keyPressed() {
  let speed = 5;
  if (keyCode === LEFT_ARROW) player.x -= speed;
  if (keyCode === RIGHT_ARROW) player.x += speed;
  if (keyCode === UP_ARROW) player.y -= speed;
  if (keyCode === DOWN_ARROW) player.y += speed;
}