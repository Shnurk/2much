function Slider() {
  return `
    <div class="slider slider_first">
      <div class="slider__prev" onclick="prevSlide()"></div>
      <div class="slider__next" onclick="nextSlide()"></div>
      <div class="slider__content">
        <div class="slider__line">
          <div class="slider__slide">
            <div class="slider__photo" style="background-image: url(/images/1.jpg)"></div>
          </div>
          <div class="slider__slide">
            <div class="slider__photo" style="background-image: url(/images/2.jpg)"></div>
          </div>
          <div class="slider__slide">
            <div class="slider__photo" style="background-image: url(/images/3.jpg)"></div>
          </div>
          <div class="slider__slide">
            <div class="slider__photo" style="background-image: url(/images/main.jpg)"></div>
          </div>
        </div>
      </div>

      <div class="slider__overlay slider__overlay_left"></div>
      <div class="slider__overlay slider__overlay_right"></div>
    </div>
  `;
}

module.exports = Slider;
