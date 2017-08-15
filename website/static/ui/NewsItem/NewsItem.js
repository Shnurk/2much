function NewsItem() {
  return `
    <div class="newsItem">
      <div class="newsItem__title">
        <a href="/model" class="newsItem__modelName">Dick Senior</a>
        <span class="newsItem__titleJob"> for Sunnei - spring/summer 2018 fashionshow</span>
      </div>
      <div class="newsItem__date">21 . Jule . 2017</div>
      <div class="newsItem__photos">
        <img class="newsItem__photo" src="/images/1.jpg" />
        <img class="newsItem__photo" src="/images/2.jpg" />
        <img class="newsItem__photo" src="/images/3.jpg" />
      </div>
    </div>
  `
}

module.exports = NewsItem;
