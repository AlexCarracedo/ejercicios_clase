//Corre solo una vez cuando se inicia el programa
function setup(){
    console.log("setup - frameCount:"+frameCount)

    //createCanvas(ancho, alto en píxeles)
    createCanvas(400,400);

    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255,0);
    // BLUE --> background(0,0,255);
    //background(color('green'));
    background(0,255,0)
}
//Corre continuamente después de la función setup
function draw(){
    fill(100,50,215)
    ellipse(200,200,100,80);
    fill(0,0,255);
    rect(300,300,100,50);
//Instrucciones a ejecutar en bucle
}