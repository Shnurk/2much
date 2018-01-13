var img = 1;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var intro = document.querySelector('.intro');

if (location.pathname === '/') {
  var timer = setInterval(showNextImg, 3000);
}

function showNextImg() {
  const $active = $('.intro__content_active')
  if (!$active) return
  const $next = $active.nextElementSibling || $active.parentElement.firstElementChild
  $next.classList.add('intro__content_active')
  $active.classList.remove('intro__content_active')
}

function showPrevImg() {
  const $active = $('.intro__content_active')
  if (!$active) return
  const $prev = $active.previousElementSibling || $active.parentElement.lastElementChild
  $prev.classList.add('intro__content_active')
  $active.classList.remove('intro__content_active')
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

window.addEventListener('keydown', function(e) {
  if (e.keyCode == RIGHT_ARROW) {
    onNextPress();
  }
  if (e.keyCode == LEFT_ARROW) {
    onPrevPress();
  }
})
