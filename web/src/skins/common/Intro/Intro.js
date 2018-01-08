(() => {

global.skin.Intro = {
  render: renderIntro
}

/**
 * props = {
 *   articles: [
 *     { title, cover }
 *   ]
 * }
 */
function renderIntro(props) {
  return `
    <div class="intro intro_1">
      ${props.articles.map((a, i) => `
        <div class="intro__content intro__content_${i + 1}" style="background-image: url('${a.cover}')">
          <div class="intro__sign">${a.title}</div>
        </div>
      `).join('')}
      ${props.articles.length > 1 ? `
        <div class="intro__prev" onclick="onPrevPress()"></div>
        <div class="intro__next" onclick="onNextPress()"></div>
      ` : ''}
    </div>
    <div class="content">
      <div class="content__title">@2much</div>
    </div>
  `;
}

})()
