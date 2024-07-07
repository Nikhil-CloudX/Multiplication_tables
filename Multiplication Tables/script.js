document.addEventListener('DOMContentLoaded', function() {
    var numberForm = document.getElementById('numberForm');
    var outputDiv = document.getElementById('output');
  
    numberForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var number = parseInt(document.getElementById('numberInput').value);
      var outputText = '';
  
      if (isNaN(number)) {
        outputText = '<p>Please enter a valid number.</p>';
      } else {
        var i = 1;
        outputText += '<h2>Multiplication Table for ' + number + '</h2>';
        while (i <= 10) {
          outputText += number + ' x ' + i + ' = ' + (number * i) + '<br>';
          i++;
        }
      }
  
      outputDiv.innerHTML = outputText;
    });
  });
  