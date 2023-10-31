const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const progressDot = document.querySelectorAll('.circle');
const circleIcon = document.querySelectorAll('.circle-icon');
const carouselImg = document.querySelector('.carousel-img');
let currentIndex = 0;
let intervalId;

const images = [
  {
    src: '001.png',
  },
  {
    src: '004.png',
  },
  {
    src: '007.png',
  },
  {
    src: '025.png',
  },
  {
    src: '039.png',
  },
];

function updateImage() {
  carouselImg.setAttribute('src', `./images/${images[currentIndex].src}`);
  updateProgressDots(currentIndex);
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateImage();
  }, 3000);
}

resetInterval();

function updateProgressDots(index) {
  circleIcon.forEach((circle, i) =>
    i === index
      ? (circle.classList.add('fa-solid'),
        circle.classList.remove('fa-regular'))
      : (circle.classList.remove('fa-solid'),
        circle.classList.add('fa-regular'))
  );
}

function handleCircleClick(event) {
  if (event.target.classList.contains('circle-icon')) {
    const clickedCircleIcon = event.target;
    const index = Array.from(circleIcon).indexOf(clickedCircleIcon);
    currentIndex = index;
    updateImage();
    clearInterval(intervalId);
    resetInterval();
  }
}

progressDot.forEach((progressDot) => {
  progressDot.addEventListener('click', handleCircleClick);
});

function handleArrowClick(event) {
  leftArrow === event.currentTarget ? currentIndex-- : currentIndex++;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  updateImage();
  clearInterval(intervalId);
  resetInterval();
}

leftArrow.addEventListener('click', handleArrowClick);
rightArrow.addEventListener('click', handleArrowClick);
