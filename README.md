# BMI-Calculator
This BMI Calculator simple and easy to use, this app will quickly calculates BMI (body mass index) and showing if you are at the ideal weight for your height.
The following tools were used in the construction of the project:
1. HTML
2. CSS
3. Javascript

For Security, this App using 2 function

first function
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
