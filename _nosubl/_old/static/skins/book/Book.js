var Slider = require('../slider/Slider')
var Menu = require('../menu/Menu')

/**
 * props = {
 *   name: String
 *   type: 'book'/'polaroids'
 *   urls: {
 *     book: URL
 *     polaroids: URL
 *     instagram: URL
 *     pdf: URL
 *   }
 *   photos: URL[ '/images/man1.jpg', '/images/man2.jpg' ]
 *   params: {
 *     height: [ Number, Number ] // [ cm, inch ]
 *     chest: [ Number, Number ]
 *     waist: [ Number, Number ]
 *     hips: [ Number, Number ]
 *     shoe: [ Number, Number ] // [ rus, eur ]
 *     hair: String
 *     eyes: String
 *   }
 * }
 */
function Book(props) {
  return `
    <div class="book">
      <div class="book__name">${props.name}</div>

      ${Menu({
        items: [
          { title: 'book', url: props.urls.book },
          { title: 'polaroids', url: props.urls.polaroids },
          { title: 'instagram', url: props.urls.instagram, targetBlank: true },
          { title: 'pdf', url: props.urls.pdf },
        ],
      })}

      <div class="book__slider">
        ${Slider({
          photos: props.photos,
        })}
      </div>

      <div class="book__params">
        <div class="book__param">height: ${props.params.height[0]} / ${props.params.height[1]}</div>
        <div class="book__param">chest: ${props.params.chest[0]} / ${props.params.chest[1]}</div>
        <div class="book__param">waist: ${props.params.waist[0]} / ${props.params.waist[1]}</div>
        <div class="book__param">hips: ${props.params.hips[0]} / ${props.params.hips[1]}</div>
        <div class="book__param">shoe: ${props.params.shoe[0]} / ${props.params.shoe[1]}</div>
        <div class="book__param">hair: ${props.params.hair}</div>
        <div class="book__param">eyes: ${props.params.eyes}</div>
      </div>
    </div>
  `;
}

module.exports = Book;
