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
      <div class="intro__contents">
        ${props.articles.map((a, i) => `
          <div class="intro__content ${i === 0 ? 'intro__content_active' : ''}" style="background-image: url('${a.cover}')">
            <div class="intro__sign">${a.title}</div>
          </div>
        `).join('')}
      </div>
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
