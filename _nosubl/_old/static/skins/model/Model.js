/**
 * props = {
 *   url: URL
 *   name: String
 *   height: [ Number, Number ] // [ cm, inch ]
 *   chest: [ Number, Number ]
 *   waist: [ Number, Number ]
 *   hips: [ Number, Number ]
 *   photo: URL
 * }
 */
function Model(props) {
  return `
    <a class="model" href="${props.url}">
      <div class="model__card" style="background-image: url(${props.photo})">
        <div class="model__cardInfo">
          <div class="model__height">${props.height[0]} / ${props.height[1]}</div>
          <div class="model__measures">
            <div class="model__measure">chest: ${props.chest[0]} / ${props.chest[1]}</div>
            <div class="model__measure">waist: ${props.waist[0]} / ${props.waist[1]}</div>
            <div class="model__measure">hips: ${props.hips[0]} / ${props.hips[1]}</div>
          </div>
        </div>
      </div>
      <div class="model__name">${props.name}</div>
    </a>
  `;
}

module.exports = Model;
