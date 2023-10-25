const countDown = document.querySelector('.countdown-display');
let startingNum = 3;

setInterval(() => {
  if (startingNum === 0) {
    countDown.textContent = '~earth beeloow us~';
  } else if (startingNum < 0) {
    clearInterval();
  } else {
    countDown.textContent = startingNum;
  }
  startingNum--;
}, 1000);
