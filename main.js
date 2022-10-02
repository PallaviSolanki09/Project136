modal="";
Status="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function start(){
    modal=ml5.objectDetector('cocossd',modalloaded);
    Status=true;
}

function modalloaded(){
    console.log("Modal is Loaded");
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}