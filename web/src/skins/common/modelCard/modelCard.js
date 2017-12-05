/* global q */
/* global skin */

;(() => {

skin.modelCard = {
  render: renderModelCard
}


/**
 * props = {
 *   url: URL
 *   name: String
 *   photo: URL
 *   height: { cm: Number, inch: String }
 *   chest: { cm: Number, inch: String }
 *   waist: { cm: Number, inch: String }
 *   hips: { cm: Number, inch: String }
 * }
 */
function renderModelCard(props) {
  return q.html`
    <a class="modelCard" href="${props.url}">
      <div
        class="modelCard__body"
        style="background-image: url('${props.photo}')"
      >
        <div class="modelCard__params">
          <div class="modelCard__height">
            ${props.height.cm} / ${props.height.inch}
          </div>
          <div class="modelCard__measures">
            <div class="modelCard__measure">
              chest<br />${props.chest.cm} / ${props.chest.inch}
            </div>
            <div class="modelCard__measure">
              waist<br />${props.waist.cm} / ${props.waist.inch}
            </div>
            <div class="modelCard__measure">
              hips<br />${props.hips.cm} / ${props.hips.inch}
            </div>
          </div>
        </div>
      </div>
      <div class="modelCard__name">
        ${props.name}
      </div>
    </a>
  `;
}

})()

