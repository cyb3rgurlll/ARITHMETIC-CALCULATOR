let operator = window.prompt('Please enter the operation you wish to perform. e.g +, -, *, /');
x = prompt('Enter the first number');
y = prompt('Enter the second number');
num1 = parseFloat(x);
num2 = parseFloat(y);
switch (operator) {
  case '+':
    result = num1 + num2;
  alert(result);
    break;
  case '-':
  result = num1 - num2;
  alert(result);
  break;
  case '*':
  result = num1 * num2;
  alert(result);
  break;
  case '/':
  result = num1 / num2;
  alert(result);
  break;
  default:
    alert('Refresh the page.')
    location.reload();
    break;
}