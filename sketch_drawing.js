let i=0;
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
}
//Corre continuamente después de la función setup

function draw(){
//Instrucciones a ejecutar en bucle
    clear();
    background(0,255,0);
    fill(100,50,215)
    ellipse(200,200,100,80);
    fill(0,0,255);
    rect(300,300,100,50);
    
    fill(255,0,0);
    rect(0,i,100,50);
    i = i + 1
    if (i==400) {
        i=0
    }
    
}
