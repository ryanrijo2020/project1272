harrysong="";
peterpansong="";
function preload() {
harrysong=loadSound("music.mp3");
peterpansong=loadSound("music2.mp3")
}
function setup() {
  canvas=createCanvas(600,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  posenet=ml5.poseNet(video,modelloaded);
  posenet.on('pose',gotposes);
}
function modelloaded() {
  console.log("modeload");
}
function draw() {
    image(video,0,0,600,500);
}
function play() {
    peterpansong.play();
    peterpansong.setVolume(1);
    peterpansong.rate(1);
    harrysong.play();
    harrysong.setVolume(1);
    harrysong.rate(1);
}
 function gotposes(result) {
  if (result.length>0) {
    console.log(result);
    console.log("leftwristy" + result[0].pose.leftWrist.y);
    leftwristy=result[0].pose.leftWrist.y;
    console.log("leftwristx" + result[0].pose.leftWrist.x);
    leftwristx=result[0].pose.leftWrist.x;
    rightwristy=result[0].pose.rightWrist.y;
    rightwristx=result[0].pose.rightWrist.x;
  }
 }
