
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z2vPw3ZVu/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var Dog=0;
var Cat=0;
var Tiger=0
var Cow=0
function gotResults(error, results) {
    if (error) {
      console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ 'Detected Tiger'+tiger+ 'Detected Cow'+cow;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    img = document.getElementById('animal_image');
    if (results[0].label == "Barking") {
        img.src = 'dog.gif';
        dog = dog+1;
      } else if (results[0].label == "Meowing") {
        img.src = 'cat.gif';
        cat = cat + 1;
      } else if (results[0].label == "Roar") {
        img.src = 'tiger.gif';
        tiger = tiger + 1;
      } else if (results[0].label == "Mooing") {
        img.src = 'cow.gif';
        cow = cow + 1;
    } else{
        img.src = 'download.gif';
    }