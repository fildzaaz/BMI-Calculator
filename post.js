function send() {
  calculateBmi();
  const dataToSend = JSON.stringify({ "bmiValue": document.techBMI.bmi.value, "bmiLabel": document.techBMI.meaning.value });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "http://localhost:3000/BMI");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
  xhr.send(dataToSend);
}

