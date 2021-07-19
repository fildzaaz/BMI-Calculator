function calculateBmi() {
  var weight = document.techBMI.weight.value;
  var height = document.techBMI.height.value / 100;
  var finalBmi = weight / (height * height);
  var finalLabel;

  function htmlEncode(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
       return '&#'+c.charCodeAt(0)+';';
    });
  }

  function jsEscape(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
       return '\\u'+('0000'+c.charCodeAt(0).toString(16)).slice(-4);
    });
  }
  
  if (weight > 0 && height > 0) {
    document.techBMI.bmi.value = finalBmi.toFixed(3);
    if (finalBmi < 18.5) {
      finalLabel = "Underweight.";
      document.techBMI.meaning.value = finalLabel;
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      finalLabel = "Normal.";
      document.techBMI.meaning.value = finalLabel;
    }
    if (finalBmi > 25 && finalBmi < 30) {
      finalLabel = "Overweight.";
      document.techBMI.meaning.value = finalLabel;
    }
    if (finalBmi > 30) {
      finalLabel = "Your condition is serious.";
      document.techBMI.meaning.value = finalLabel;
    }
  }
  else {
    alert("Data you've entered might be incorrect. Please check and try again.");
  }
}

