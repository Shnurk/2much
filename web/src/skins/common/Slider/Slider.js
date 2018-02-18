(() => {

global.skin.Slider = {
  render: renderSlider
}

/**
 * props = {
 *   photos: URL[]
 *   firstPhotoAlone: [Boolean]
 * }
 */
function renderSlider(props) {
  return `
    <div class="slider slider_first ${props.firstPhotoAlone ? 'slider_firstPhotoAlone' : ''}">
      ${props.photos.length > 1 ? `
        <div class="slider__prev" onclick="prevSlide()"></div>
        <div class="slider__next" onclick="nextSlide()"></div>
      ` : ''}
      <div class="slider__content">
        <div class="slider__line">
          ${props.photos.map(p => `
            <div class="slider__slide">
              ${[].concat(p).map(photo => `
                <div class="slider__photo" style="background-image: url('${photo}')"></div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="slider__overlay slider__overlay_left"></div>
      <div class="slider__overlay slider__overlay_right"></div>
    </div>
  `
}

})()
