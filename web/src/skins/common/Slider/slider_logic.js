(() => {

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.Slider = {
  next: goToNextPhoto,
  prev: goToPrevPhoto
}

const sel = {
  slider: '.slider',
  line: '.slider__line',
  view: '.slider__view',
  photo: (index) => `.slider__photo[data-index="${index}"]`
}

const cls = {
  canGoPrev: 'slider_canGoPrev',
  canGoNext: 'slider_canGoNext'
}

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const $slider = $(sel.slider)
const $line = $(sel.line)
const viewWidth = $(sel.view).offsetWidth
const photosCount = $$('.slider__photo').length
let activePhotoIndex = 0
let prevX = 0

function goToNextPhoto () {
  if (activePhotoIndex < photosCount - 1) {
    activePhotoIndex += 1
    const $photo = getPhotoByIndex(activePhotoIndex)
    const x = -$photo.offsetLeft + -$photo.offsetWidth + viewWidth
    const delta = Math.abs(x - prevX)
    $slider.classList.toggle('slider_faster', delta === 400)

    if (x === prevX) {
      goToNextPhoto()
    } else {
      $line.style.transform = `translateX(${x}px)`
      prevX = x
    }
  }

  toggleNext(activePhotoIndex < photosCount - 1)
  togglePrev(true)
}

function goToPrevPhoto () {
  if (activePhotoIndex > 0) {
    activePhotoIndex -= 1
    const $photo = getPhotoByIndex(activePhotoIndex)
    const x = -$photo.offsetLeft
    const delta = Math.abs(x - prevX)
    $slider.classList.toggle('slider_faster', delta === 400)

    if (x === prevX) {
      goToPrevPhoto()
    } else {
      $line.style.transform = `translateX(${x}px)`
      prevX = x
    }
  }

  togglePrev(activePhotoIndex > 0)
  toggleNext(true)
}

function getPhotoByIndex (index) {
  return $(sel.photo(index))
}

function togglePrev (enabled) {
  $slider.classList.toggle(cls.canGoPrev, enabled)
}

function toggleNext (enabled) {
  $slider.classList.toggle(cls.canGoNext, enabled)
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode == RIGHT_ARROW) {
    goToNextPhoto();
  }
  if (e.keyCode == LEFT_ARROW) {
    goToPrevPhoto();
  }
})

})()







// var slidesCount = document.querySelectorAll('.slider__slide').length;
// var active = 0;


// function nextSlide() {
//   document.querySelector('.slider').classList.remove('slider_first')
//   if (active < slidesCount - 1) {
//     active += 1;
//     actualizeLine();
//   }
//   if (active === slidesCount - 1) {
//     document.querySelector('.slider').classList.add('slider_last')
//   }
// }

// function prevSlide() {
//   document.querySelector('.slider').classList.remove('slider_last')
//   if (active > 0) {
//     active -= 1;
//     actualizeLine();
//   }
//   if (active === 0) {
//     document.querySelector('.slider').classList.add('slider_first')
//   }
// }

// function actualizeLine() {
//   var line = document.querySelector('.slider__line');
//   var shift = -800 * active;
//   line.style.transform = 'translateX(' + shift + 'px)';
// }
