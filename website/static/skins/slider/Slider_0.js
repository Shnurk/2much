var slidesCount = document.querySelectorAll('.slider__slide').length;
var active = 0;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;

function nextSlide() {
  document.querySelector('.slider').classList.remove('slider_first')
  if (active < slidesCount - 1) {
    active += 1;
    actualizeLine();
  }
  if (active === slidesCount - 1) {
    document.querySelector('.slider').classList.add('slider_last')
  }
}

function prevSlide() {
  document.querySelector('.slider').classList.remove('slider_last')
  if (active > 0) {
    active -= 1;
    actualizeLine();
  }
  if (active === 0) {
    document.querySelector('.slider').classList.add('slider_first')
  }
}

function actualizeLine() {
  var line = document.querySelector('.slider__line');
  var shift = -800 * active;
  line.style.transform = 'translateX(' + shift + 'px)';
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode == RIGHT_ARROW) {
    nextSlide();
  }
  if (e.keyCode == LEFT_ARROW) {
    prevSlide();
  }
})

