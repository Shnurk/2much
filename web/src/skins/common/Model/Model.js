(() => {

const Slider = global.skin.Slider

global.skin.Model = {
  render: renderModel
}

/**
 * props = {
 *   name: String
 *   isBook: Boolean
 *   bookUrl: URL
 *   polaroidsUrl: URL
 *   instagramUrl: URL
 *   pdfUrl: URL
 *   photos: URL[]
 *   params: {...}
 * }
 */
function renderModel(props) {
  const params = props.params
  var shoeAmerican = {
    36: 5,
    37: 6,
    38: 7,
    39: 8,
    40: 9,
    41: 10,
    42: 11,
    43: 12
  }[params.shoe]

  return `
    <div class="model">
      <div class="model__name">
        <span class="model__firstname">${props.name}</span>
      </div>

      <div class="model__menu">
        <a href="${props.bookUrl}" class="model__menuItem">book</a>
        <a href="${props.polaroidsUrl}" class="model__menuItem">polaroids</a>
        <a href="${props.instagramUrl}" target="_blank" class="model__menuItem">instagram</a>
        <a href="${props.pdfUrl}" class="model__menuItem" target="_blank">pdf</a>
      </div>

      <div class="model__book">
        ${Slider.render({ photos: props.photos, firstPhotoAlone: props.isBook })}
      </div>

      <div class="model__measures">
        <div class="model__measure model__height">
          <div class="measure__title">height:</div>
          <div class="measure__value">${params.height.cm} / ${params.height.inch}</div>
        </div>
        <div class="model__measure model__chest">
          <div class="measure__title">chest:</div>
          <div class="measure__value">${params.chest.cm} / ${params.chest.inch}</div>
        </div>
        <div class="model__measure model__waist">
          <div class="measure__title">waist:</div>
          <div class="measure__value">${params.waist.cm} / ${params.waist.inch}</div>
        </div>
        <div class="model__measure model__hips">
          <div class="measure__title">hips:</div>
          <div class="measure__value">${params.hips.cm} / ${params.hips.inch}</div>
        </div>
        <div class="model__measure model__shoe">
          <div class="measure__title">shoe:</div>
          <div class="measure__value">${params.shoe} / ${shoeAmerican}</div>
        </div>
        <div class="model__measure model__hair">
          <div class="measure__title">hair:</div>
          <div class="measure__value">${params.hair}</div>
        </div>
        <div class="model__measure model__eyes">
          <div class="measure__title">eyes:</div>
          <div class="measure__value">${params.eyes}</div>
        </div>
      </div>
    </div>
  `
}

})()

// <div class="viewer">
//   <div class="viewer__photos">
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//     <div class="viewer__photo"></div>
//   </div>
//   <div class="viewer__controls">
//     <div class="viewer__prev"></div>
//     <div class="viewer__next"></div>
//   </div>
// </div>
// <style>
//   .viewer {
//     margin-top: 80px;
//     height: 600px;
//   }

//   .viewer__photos {
//     height: 100%;
//     display: flex;
//     width: 100%;
//     overflow: scroll;
//   }

//   .viewer__photo {
//     width: 600px;
//     height: 100%;
//     margin-right: 10px;
//     background: gray;
//     flex-shrink: 0;
//   }
// </style>
// <script>
// </script>
