function Intro() {
  return `
    <div class="intro intro_1">
      <div class="intro__content intro__content_1">
        <div class="intro__sign"><span class="sans-serif">Mike</span> for <span class="sans-serif">Blossom</span></div>
      </div>
      <div class="intro__content intro__content_2">
        <div class="intro__sign"><span class="sans-serif">Nikole</span> for <span class="sans-serif">Sink</span></div>
      </div>
      <div class="intro__content intro__content_3">
        <div class="intro__sign"><span class="sans-serif">Jonny</span> for <span class="sans-serif">Sink</span></div>
      </div>
      <div class="intro__content intro__content_4">
        <div class="intro__sign"><span class="sans-serif">Mike</span> for <span class="sans-serif">Blossom</span></div>
      </div>
      <div class="intro__prev" onclick="onPrevPress()"></div>
      <div class="intro__next" onclick="onNextPress()"></div>
    </div>
    <div class="content">
      <div class="content__title">@2much</div>
    </div>
  `;
}

module.exports = Intro;
