rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO)
    video.size(550 , 500);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 120);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("Model loaded");
}

function draw(){
    document.getElementById("fontSizeDisplay").innerHTML = "Font size has set to = " + difference + "px";
    background("#00FFFF");
    fill("#696969");
    text("TRY!" , 50 , 400);
    textSize(difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
    }
}