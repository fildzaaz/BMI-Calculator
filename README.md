# BMI-Calculator
This BMI Calculator simple and easy to use, this app will quickly calculates BMI (body mass index) and showing if you are at the ideal weight for your height.
The following tools were used in the construction of the project:
1. HTML
2. CSS
3. Javascript

For Security, this App using 2 function

First function is to escape user input in an HTML context in JavaScript, so we need our own HTML encoder.
Because JavaScript doesn't provide an API to encode HTML. 
Here is some example JavaScript code that converts a string to HTML entities:

function htmlEncode(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
       return '&#'+c.charCodeAt(0)+';';
    });
  }
 After this function, we would then use this function as follows:
<script>document.body.innerHTML = htmlEncode(untrustedValue)</script>
  
Second function, if your input is inside a JavaScript string, you need an encoder that performs Unicode escaping. 
So, here is a sample Unicode-encoder:

  function jsEscape(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
       return '\\u'+('0000'+c.charCodeAt(0).toString(16)).slice(-4);
    });
  }
 We would then use this function as follows:
<script>document.write('<script>x="'+jsEscape(untrustedValue)+'";<\/script>')</script>
