(() => {

global.skin.NewsItem = {
  render: renderNewsItem
}

/**
 * props = {
 *   title: [
 *     { [url], text }
 *     ...
 *   ]
 *   photos: URL[]
 *   date: { day, month, year }
 * }
 */
function renderNewsItem(props) {
  const date = props.date

  return `
    <div class="newsItem">
      <div class="newsItem__title">
        ${props.title.map(t => (
          t.url
            ? `<a href="${t.url}" class="newsItem__modelName">${t.text}</a>`
            : `<span class="newsItem__titleJob">${t.text}</span>`
        )).join('')}
      </div>
      <div class="newsItem__date">
        ${date ? `
          ${date.day} . ${date.month} . ${date.year}
        ` : ''}
      </div>
      <div class="newsItem__photos">
        ${props.photos.map(p => `
          <img class="newsItem__photo" src="${p}" />
        `).join('')}
      </div>
    </div>
  `
}

})()
