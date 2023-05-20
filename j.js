prediction_1="";
prediction_2="";
Webcam.set({
width:370,height:375,image_format:"png",png_quality:90

}
);
camera=document.getElementById("camera");
Webcam.attach("#camera");
 function take_snapshot(){

    Webcam.snap(function(data_uri)
     { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });
 }
 console.log(ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SXbAakvwg/model.json", O);
 function O(){
    console.log("ModeloListo")
 }
 function speak(){ var synth = window.speechSynthesis;
     speak_data_1 = "La primera prediccion es " + prediction_1; speak_data_2 = "Y la segunda prediccion es " + prediction_2; var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis); }
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,A)
}
function A(error,result){
    if (error) {
        console.log(error)
    } else {
  document.getElementById("result_emotion_name").innerHTML=result[0].label;     
  document.getElementById("result_emotion_name2").innerHTML=result[1].label;
  prediction_1=result[0].label;
  prediction_2=result[1].label;
  speak();
  if(result[0].label=="feliz"){
    document.getElementById("update_emoji").innerHTML="&#128522";
}
if(result[0].label=="triste"){
    document.getElementById("update_emoji").innerHTML="&#128532";
}
if(result[0].label=="enojado"){
    document.getElementById("update_emoji").innerHTML="&#128548";
}
if(result[1].label=="feliz"){
    document.getElementById("update_emoji2").innerHTML="&#128522";
}
if(result[1].label=="triste"){
    document.getElementById("update_emoji2").innerHTML="&#128532";
}
if(result[1].label=="enojado"){
    document.getElementById("update_emoji2").innerHTML="&#128548";
}
  }
    }

