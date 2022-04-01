video = "";
st = "";

function preload() {
    video = createVideo("vid.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function identifyObject() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
    console.log("Model is loaded");
    st = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}




































