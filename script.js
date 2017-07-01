var img = 1;
var timer = setInterval(showNextImg, 3000);
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var intro = document.querySelector('.intro');

function showNextImg() {
  intro.classList.remove('intro_' + img);
  img += 1;
  if (img == 5) {
    img = 1;
  }
  intro.classList.add('intro_' + img);
}

function showPrevImg() {
  intro.classList.remove('intro_' + img);
  img -= 1;
  if (img == 0) {
    img = 4;
  }
  intro.classList.add('intro_' + img);
}

function killTimer() {
  clearInterval(timer);
}

function onNextPress() {
  showNextImg();
  killTimer();
}

function onPrevPress() {
  showPrevImg();
  killTimer();
}

window.onkeydown = function(e) {
  if (e.keyCode == RIGHT_ARROW) {
    onNextPress();
  }
  if (e.keyCode == LEFT_ARROW) {
    onPrevPress();
  }
}
