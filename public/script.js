document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('resultView');
    const buttons = Array.from(document.getElementsByClassName('button'));
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonText = button.innerText;
  
        if (buttonText === 'C') {
          display.value = '';
        } else if (buttonText === '←') {
          display.value = display.value.slice(0, -1);
        } else if (buttonText === '=') {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else {
          display.value += buttonText;
        }
      });
    });
  });
  