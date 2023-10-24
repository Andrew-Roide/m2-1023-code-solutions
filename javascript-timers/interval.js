const countDown = document.querySelector('.countdown-display');
const text = countDown.textContent;
const myArray = [text, '3', '2', '1', '~Earth Beeeelooww Us~'];

function changeText() {
  for (let i = 0; i < myArray.length; i++) {
    setTimeout(() => {
      countDown.textContent = myArray[i];
    }, i * 1000);
  }
}

changeText();
