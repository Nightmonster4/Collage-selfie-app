camera  = document.getElementById("camera");

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function (event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= Content;

    if(Content == "selfie"){
        speak();
    }
    

} 

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking selfie in 5 seconds, give a ugly pose";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function(){
        take_selfie();
        save();
    },5000);
}