const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Change your thoughts and you change your world.",
  "The best way to predict the future is to create it.",
  "The only way to achieve the impossible is to believe it is possible.",
  "The only way to do great work is to love what you do.",
  "The best way to find yourself is to lose yourself in the service of others.",
  "The best way to make your dreams come true is to wake up.",
  "The best way to get started is to quit talking and begin doing.",
  "The best way to get things done is to simply begin.",
  "The best way to get ahead is to be your own competition."
];

document.getElementById('generate-quote').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-display').innerText = `"${quotes[randomIndex]}"`;
});

alert("Welcome to My Website!");

document.getElementById('generate-click-text').addEventListener('click', () => {
  document.getElementById('quote-click-text').innerText = "You clicked the button!";
});

const image = document.getElementById('image');
document.getElementById('image1').addEventListener('click', () => {
  image.style.display = 'block';
  image.src = 'https://cdn.memes.com/up/71558571535638926/i/1737016617552.jpg';
  image.alt = 'Image 1';
});
document.getElementById('image2').addEventListener('click', () => {
  image.style.display = 'block';
  image.src = 'https://cdn.memes.com/up/71558571535638926/i/1737695825548.jpg';
  image.alt = 'Image 2';
});

const input = document.getElementById('input');
const output = document.getElementById('output');
document.getElementById('submit').addEventListener('click', () => {
  if (input.value.trim() !== "") {
    output.innerText = input.value;
  }
});
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value.trim() !== "") {
    document.getElementById('submit').click();
  }
});

let timer;
let time = 10;
const timerDisplay = document.getElementById('timer');
timerDisplay.innerText = time;
document.getElementById('start').addEventListener('click', () => {
  clearInterval(timer);
  time = 10;
  timerDisplay.innerText = time;
  timer = setInterval(() => {
    time--;
    timerDisplay.innerText = time;
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
});
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timer);
});

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
document.getElementById('calculate').addEventListener('click', () => {
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);
  let calculation;

  if (isNaN(number1) || isNaN(number2)) {
    result.innerText = 'Please enter valid numbers';
    return;
  }

  switch (operation.value) {
    case 'add':
      calculation = number1 + number2;
      break;
    case 'subtract':
      calculation = number1 - number2;
      break;
    case 'multiply':
      calculation = number1 * number2;
      break;
    case 'divide':
      calculation = number1 / number2;
      break;
    default:
      calculation = 'Invalid operation';
  }

  result.innerText = `Result: ${calculation}`;
});
