var tela = 0
var telaIniciar = 1
var telaControles = 2
var telaCreditos = 3
var fundo;
var play;

function setup() {
  createCanvas(500, 500);
}

function preload(){
  fundo = loadImage('./assets/R.jpg')
  elian = loadImage('./assets/elian.jpeg')
  matheus = loadImage('./assets/matheus.jpeg')
  pedro = loadImage('./assets/pedro.jpeg')
  play = loadImage('./assets/botao-play.png')
}

var mouseX
var mouseY

function draw() {
  background(fundo)
  
  if(tela == 0){
    fill("white")
    rect(60, 75, 380, 90, 15)
    fill("black")
    textFont("roboto")
    textSize(45)
    text("C&T WORLD", 115, 120)
    textSize(15)
    text("AMPLIANDO OS CONHECIMENTOS TECNOLÓGICOS", 67, 150)
    textFont("cursive")
    textSize(20)
    fill("white")
    rect(175,270,140,40,15)
    fill("black")
    textSize(25)
    textFont("roboto")
    text("Iniciar", 212, 298)
    fill("white")
    rect(175,330,140,40,15)
    textSize(25)
    fill("black")
    textFont("roboto")
    text("Controles", 195, 358)
    textSize(25)
    fill("white")
    rect(175,390,140,40,15)
    fill("black")
    text("Créditos", 202, 418)
    
    if(mouseX > 175 && mouseX < 314 && mouseY > 270 && mouseY < 310){
      fill("white")
      rect(60, 75, 380, 90, 15)
      fill("grey")
      rect(175,270,140,40,15)
      fill("black")
      text("Iniciar", 212, 298)
      fill("white")
      textFont("roboto")
      textSize(45)
      fill("black")
      text("C&T WORLD", 115, 120)
      textSize(15)
      text("AMPLIANDO OS CONHECIMENTOS TECNOLÓGICOS", 67, 150)
    }
    
    if(mouseX > 175 && mouseX < 314 && mouseY > 330 && mouseY < 370){
      fill("white")
      rect(60, 75, 380, 90, 15)
      fill("grey")
      rect(175,330,140,40,15)
      fill("black")
      text("Controles", 195, 358)
      fill("white")
      textFont("roboto")
      textSize(45)
      fill("black")
      text("C&T WORLD", 115, 120)
      textSize(15)
      text("AMPLIANDO OS CONHECIMENTOS TECNOLÓGICOS", 67, 150)
    }
    
    if(mouseX > 175 && mouseX < 314 && mouseY > 390 && mouseY < 430){
      fill("white")
      rect(60, 75, 380, 90, 15)
      fill("grey")
      rect(175,390,140,40,15)
      fill("black")
      textSize(25)
      textFont("roboto")
      text("Créditos", 202, 418)
      fill("white")
      textFont("roboto")
      textSize(45)
      fill("black")
      text("C&T WORLD", 115, 120)
      textSize(15)
      text("AMPLIANDO OS CONHECIMENTOS TECNOLÓGICOS", 67, 150)
    }
}

  else if(tela == telaIniciar){
    textSize(20)
    textSize(25)
    fill("white")
    text("Jogo em desenvolvimento", 120, 50)
    rect(20, 20, 50, 20, 15)
    fill("black")
    textSize(10)
    textFont("roboto")
    text("Retornar", 27, 33)
    fill('black')
    rect(75, 100, 350, 250, 10)
    image(play, 230, 215, 30, 10, 10 )
    textSize(20)
    fill('white')
    textFont("roboto")
    text("Escolha corretamente uma das quatro \n alternativas para avançar de fase", 100, 120)
    fill('white')
    rect(225, 220, 50, 50, 10)
    
    
    if(mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 40){
      fill("grey")
      rect(20, 20, 50, 20, 15)
      fill("black")
      textSize(10)
      textFont("roboto")
      text("Retornar", 27, 33)
    }
  }
  
  else if(tela == telaControles){
    fill("black")
    rect(45, 62, 405, 378, 15)
    rect(195, 17, 100, 30, 15)
    textFont("fantasy")
    textSize(20)
    fill("white")
    text("Controles",205, 40)
    textSize(20)
    textFont("roboto")
    text(mouseX + " " + mouseY, 20, 20)
    fill("white")
    text("O jogo tem o objetivo educativo de avaliar", 75, 90) 
    text(" conhecimentos gerais do mundo tecnológico", 65, 115)
    text(" e ensinar ao jogador sobre tais conhecimentos", 58, 140)
    text(" por meio de um quiz de perguntas aleatórias.", 65, 165)
    text("Para isso, utilize o movimento do mouse para", 64, 370)
    text(" escolher uma das quatro opções, e selecione-a", 58, 395)
    text(" clicando no botão esquerdo do mouse.", 87, 420)
    text("(PRINT DA TELA DO QUIZ AQUI)", 95, 260)
    rect(20, 20, 50, 20, 15)
    fill("black")
    textSize(10)
    textFont("roboto")
    text("Retornar", 27, 33)
    
    if(mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 40){
      fill("grey")
      rect(20, 20, 50, 20, 15)
      fill("black")
      textSize(10)
      textFont("roboto")
      text("Retornar", 27, 33)
    }
  }
  
  else if(tela == telaCreditos){
    fill("black")
    rect(165, 20, 160, 30, 15)
    fill("white")
    textFont("fantasy")
    textSize(20)
    text("Desenvolvedores", 175, 43)
    textSize(20)
    text(mouseX + " " + mouseY, 20, 20)
    rect(20, 20, 50, 20, 15)
    textSize(10)
    fill("black")
    textFont("roboto")
    text("Retornar", 27, 33)
    rect(50, 100, 400, 335, 15)
    image(elian, 75, 120, 85, 85)
    textSize(15)
    fill("white")
    text("Nome: Elian Nascimento de Brito", 180, 155)
    text("E-mail: elianb911@gmail.com", 180, 175)
    text("E-mail: matthpin2003@gmail.com", 180, 280)
    image(matheus, 75, 225, 85, 85)
    text("Nome: Matheus Pinheiro", 180, 260)
    image(pedro, 75, 330, 85, 85)
    text("Nome: Pedro Henrique Lopes Cândido", 180, 365)
    text("E-mail: pedrohenriquefal14@gmail.com", 180, 385)
    
    if(mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 40){
      fill("grey")
      rect(20, 20, 50, 20, 15)
      fill("black")
      textSize(10)
      textFont("roboto")
      text("Retornar", 27, 33)
    }
  }
}

function mouseClicked(){
  if(mouseX > 175 && mouseX < 314 && mouseY > 270 && mouseY < 310){
    tela = 1
    
  }
  if(mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 40){
    tela = 0
  }
  if(mouseX > 175 && mouseX < 314 && mouseY > 330 && mouseY < 370){
    tela = telaControles
  }
  if(mouseX > 175 && mouseX < 314 && mouseY > 390 && mouseY < 430){
    tela = telaCreditos
  }
  



}