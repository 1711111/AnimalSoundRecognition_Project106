function startClassifier(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3hvcwCPO-/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}