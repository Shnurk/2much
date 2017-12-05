/**
 * props = {
 *   photos: URL[]
 * }
 */
function Slider(props) {
  return `
    <div class="slider slider_first">
      <div class="slider__prev" onclick="prevSlide()"></div>
      <div class="slider__next" onclick="nextSlide()"></div>
      <div class="slider__content">
        <div class="slider__line">
          ${props.photos.map(Slider__slide).join('')}
        </div>
      </div>
    </div>
  `;
}

function Slider__slide(photo) {
  return `
    <div class="slider__slide">
      <div class="slider__photo" style="background-image: url('${photo}')"></div>
    </div>
  `;
}

module.exports = Slider;
