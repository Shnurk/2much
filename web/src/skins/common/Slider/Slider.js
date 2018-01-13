(() => {

global.skin.Slider = {
  render: renderSlider
}

/**
 * props = {
 *   photos: [
 *     { url, vertical: Boolean }
 *     ...
 *   ]
 * }
 */
function renderSlider(props) {
  return `
    <div class="slider slider_first slider_canGoNext">
      ${props.photos.length > 1 ? `
        <div class="slider__go slider__go_prev" onclick="Slider.prev()"></div>
        <div class="slider__go slider__go_next" onclick="Slider.next()"></div>
      ` : ''}
      <div class="slider__view">
        <div class="slider__line">
          ${props.photos.map((p, i) => `
            <div
              class="slider__photo slider__photo_${p.vertical ? 'v' : 'h'}"
              data-index="${i}"
            >
              <div class="slider__imageWrap" style="background-image: url('${p.url}')"></div>
              <img class="slider__image" src="${p.url}" />
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
  // <div class="slider__overlay slider__overlay_left"></div>
  // <div class="slider__overlay slider__overlay_right"></div>
}

})()
