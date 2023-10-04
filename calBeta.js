let display = document.querySelector('.display');

function getNumber(num) {
  display.value += num;
}

function getOperator(op) {
  display.value += op;
}

function toRadian() {
  if(display.value.includes('deg')) {
    display.value = display.value.replace('deg', '* Math.PI / 180');
  } else {
    display.value += '* Math.PI / 180';
  }
}

function calculate() {
  if(display.value.includes('deg')) {
    toRadian();
  }
  
  try {
    display.value = eval(display.value).toFixed(2);
  } catch {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
} 