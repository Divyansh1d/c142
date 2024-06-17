leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
song1="";
song2="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function modelLoaded(){
    console.log('pose is initialized');
}
function gotposes(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}