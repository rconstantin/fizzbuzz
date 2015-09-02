// fizzBuzz assignment 1

var myEvt = document.getElementById("clickMe");

myEvt.addEventListener("click",  function() {
      'use strict';
      var fizznum = document.getElementById("fizznum").value;
      fizzBuzzIt(fizznum);
}, false);


function fizzBuzzIt(v) {
      document.getElementById('result').innerHTML = 'FizzBuzz results for ' + v  + ': <br>';
      for (var n = 1; n <= v; n++) {
            var result;
            if ((n%3 == 0) && (n%5 == 0)) {
                  result = 'FizzBuzz';
            }
            else if (n%3 == 0) {
                  result = 'Fizz';
            }
            else if (n%5 == 0) {
                  result = 'Buzz';
            }
            else {
                  result = n;
            }
            console.log(result);
            document.getElementById('result').innerHTML += result + '<br>';
      }
}