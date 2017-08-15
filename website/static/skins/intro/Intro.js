/**
 * props = {
 *   items: [
 *     { photo: URL, modelName: String, client: String }
 *     ...
 *   ]
 * }
 */
function Intro(props) {
  return `
    <div class="intro intro_1">
      ${props.items.map(Intro__content).join('')}
      <div class="intro__prev" onclick="onPrevPress()"></div>
      <div class="intro__next" onclick="onNextPress()"></div>
    </div>
  `;
}

function Intro__content(item, i) {
  return `
    <div class="intro__content intro__content_${i + 1}" style="background-image: url('${item.photo}')">
      <div class="intro__sign">
        <span class="sans-serif">${item.modelName}</span>
        for
        <span class="sans-serif">${item.client}</span>
      </div>
    </div>
  `;
}

module.exports = Intro;
