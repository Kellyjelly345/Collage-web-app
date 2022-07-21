var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start()}


    recognition.onresult = function(event){
        console.log(event);
        Content = event.results[0] [0].transcript.toLowerCase()
        if (Content == "selfie") {
            speak()
            
        }
    }


 camera = document.getElementById("camera");
 Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

img_id = " "



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {
        img_id = "img_1"
        take_snapshot()
        
    }, 5000);

    setTimeout(function() {
        img_id = "img_2"
        take_snapshot()
        
    }, 10000);

    setTimeout(function() {
        img_id = "img_3"
        take_snapshot()
        
    }, 15000);


}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if (img_id == "img_1") {
            document.getElementById("img_1").src = data_uri;
            
            
        }
        if (img_id == "img_2") {
            document.getElementById("img_2").src = data_uri;
            
            
        }
        if (img_id == "img_3") {
            document.getElementById("img_3").src = data_uri;
            
            
        }


    })
    

    
}
