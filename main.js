var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 

function speak()
{
    var synth = window.speechSynthesis;
    speakData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.Speak(utterThis);

    setTimeOut(function()
    {
        take_selfie();
        save();
    }, 5000);
}

 camera = document.getElementById("camera");

 Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});

function take_selfie(){
    Webcam.snap(function(data_uri){
        if(imgId=="pic1.jpg")
        document.getElementById("result1").innerHTML = '<img id="pic1.jpg" src="'+data_uri+'"/> ';
        if(imgId=="pic2.jpg")
        document.getElementById("result2").innerHTML = '<img id="pic2.jpg" src="'+data_uri+'"/> ';
        if(imgId=="pic3.jpg")
        document.getElementById("result3").innerHTML = '<img id="pic3.jpg" src="'+data_uri+'"/> ';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}