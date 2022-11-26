var x=30;
var y=30;
//Corre solo una vez cuando se inicia el programa
function setup(){
    //createCanvas(ancho, alto en píxeles)
    console.log("setup: "+frameCount);
    createCanvas(330,330);
    background(120);
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255,0);
    // BLUE --> background(0,0,255);
    //background(color('green'));
}
//Corre continuamente después de la función setup

function draw(){
//Instrucciones a ejecutar en bucle
console.log("setup: "+frameCount);
fill(color(frameCount%255));
    while(y<height-15){
        while(x<width-15){ 
        ellipse(x,y,15,15);
        x=x+30;
        }
    y=y+30;
    x=30;
    }
}