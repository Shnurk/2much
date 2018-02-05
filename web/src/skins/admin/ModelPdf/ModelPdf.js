;(() => {

global.skin.ModelPdf = {
  render: renderModelPdf
}

function renderModelPdf (model) {
  var photoPages = []
  var photoPage = []

  var firstPhoto = model.book[0]
  var book = model.book.slice(1)

  for (var photo of book) {
    var isHorizontal = photo.ratio > 1

    if (isHorizontal) {
      if (photoPage.length) {
        photoPages.push(photoPage)
      }
      photoPages.push([ photo ])
      photoPage = []
    } else {
      photoPage.push(photo)
      if (photoPage.length === 2) {
        photoPages.push(photoPage)
        photoPage = []
      }
    }
  }

  var { height, chest, waist, hips, eyes, shoe, hair } = model.params
  var params = {
    height: { cm: height, inch: cmToInches(height) },
    chest: { cm: chest, inch: cmToInches(chest) },
    waist: { cm: waist, inch: cmToInches(waist) },
    hips: { cm: hips, inch: cmToInches(hips) },
    hair,
    shoe,
    eyes
  }

  var shoeAmerican = {
    36: 5,
    37: 6,
    38: 7,
    39: 8,
    40: 9,
    41: 10,
    42: 11,
    43: 12
  }[shoe]

  return html(`
    <!doctype html>
    <html class="ModelPdf">
      <head>
        <meta charset="utf-8" />
        <title>model</title>

        <style>
          .ModelPdf__body {
            padding: 0;
            margin: 0;
            font-family: Verdana, sans-serif;
          }

          .ModelPdf__page {
            width: 842px;
            height: 595px;
            box-sizing: border-box;
            padding: 25px;
            background: #fff;
            page-break-after: always;
            border: 1px solid black;
          }

          .ModelPdf__row {
          }

          .ModelPdf__row_header {
            font-size: 20px;
          }

          .ModelPdf__row_photos {
            height: 455px;
          }

          .ModelPdf__row_footer {
            position: relative;
          }



          .ModelPdf__sides {

          }

          .ModelPdf__firstParam {
            font-style: italic;
            margin-bottom: 14px;
          }

          .ModelPdf__firstParamLabel {
            margin-bottom: 2px;
            font-weight: 600;
            font-size: 13px;
          }

          .ModelPdf__firstParamValue {
            font-size: 12px;
          }

          .ModelPdf__firstName {
            font-size: 35px;
            font-style: italic;
            padding-top: 55px;
            padding-bottom: 32px;
            font-weight: 300;
          }

          .ModelPdf__row_first {
            height: 499px;
          }
          .ModelPdf__side {
            width: 390px;
            height: 490px;
            margin-right: 10px;
            float: left;
          }
          .ModelPdf__side:last-child {
            margin-right: 0;
          }
          .ModelPdf__side:first-child {
            text-align: center;
          }

          .ModelPdf__params {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 11px;
          }

          .ModelPdf__logo {
            position: absolute;
            right: 0;
            top: -12px;
            height: 40px;
          }

          .ModelPdf__page_first .ModelPdf__logo {
            top: 8px;
          }

          .ModelPdf__firstParams {

          }

          .ModelPdf__paramsRow {
            font-style: italic;
            margin-bottom: 6px;
          }
          .ModelPdf__paramsRow:last-child {
            margin-bottom: 0;
          }

          .ModelPdf__param {
            float: left;
            margin-right: 10px;
          }

          .ModelPdf__param:after {
            float: left;
            content: '/';
            margin-left: 10px;
          }
          .ModelPdf__param:last-child:after {
            display: none;
          }

          .ModelPdf__row_photos {
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .ModelPdf__photoWrap {
            width: 390px;
            margin-right: 10px;
            height: 455px;
            float: left;
            text-align: center;
          }
          .ModelPdf__photoWrap:last-child {
            margin-right: 0;
          }
          .ModelPdf__row_first .ModelPdf__photoWrap {
            height: 490px;
          }
          .ModelPdf__page_length_1 .ModelPdf__photoWrap {
            width: 790px;
          }

          .ModelPdf__photo {
            max-width: 100%;
            max-height: 100%;
            margin-right: 8px;
          }

          .ModelPdf__paramLabel {
            font-weight: bold;
            margin-right: 5px;
            float: left;
          }

          .ModelPdf__paramValue {
            float: left;
          }
        </style>
      </head>
      <body class="ModelPdf__body">
        <div class="ModelPdf__pages">
          <div class="ModelPdf__page ModelPdf__page_first">
            <div class="ModelPdf__row ModelPdf__row_first">
              <div class="ModelPdf__sides">
                <div class="ModelPdf__side">
                  <div class="ModelPdf__firstName">
                    ${model.name}
                  </div>
                  <div class="ModelPdf__firstParams">
                    <div class="ModelPdf__firstParam">
                      <div class="ModelPdf__firstParamLabel">Height / Heuteur</div>
                      <div class="ModelPdf__firstParamValue">${params.height.inch} / ${params.height.cm}</div>
                    </div>
                    <div class="ModelPdf__firstParam">
                      <div class="ModelPdf__firstParamLabel">Waist / Taille</div>
                      <div class="ModelPdf__firstParamValue">${params.waist.inch} / ${params.waist.cm}</div>
                    </div>
                    <div class="ModelPdf__firstParam">
                      <div class="ModelPdf__firstParamLabel">Hips / Hanches</div>
                      <div class="ModelPdf__firstParamValue">${params.hips.inch} / ${params.hips.cm}</div>
                    </div>
                    <div class="ModelPdf__firstParam">
                      <div class="ModelPdf__firstParamLabel">Hair / Cheveux</div>
                      <div class="ModelPdf__firstParamValue">${params.hair} / ${params.hair}</div>
                    </div>
                    <div class="ModelPdf__firstParam">
                      <div class="ModelPdf__firstParamLabel">Eyes / Yeux</div>
                      <div class="ModelPdf__firstParamValue">${params.eyes} / ${params.eyes}</div>
                    </div>
                    <div class="ModelPdf__firstParam">
                      <div class="ModelPdf__firstParamLabel">Shoe / Chaussures</div>
                      <div class="ModelPdf__firstParamValue">${shoeAmerican} / ${params.shoe}</div>
                    </div>
                  </div>
                </div>
                <div class="ModelPdf__side">
                  <div class="ModelPdf__photoWrap">
                    <img class="ModelPdf__photo" src="/media/large/${firstPhoto.fileName}" />
                  </div>
                </div>
              </div>
            </div>
            <div class="ModelPdf__row ModelPdf__row_footer">
              <img class="ModelPdf__logo" src="/images/logo.png" />
            </div>
          </div>
          ${photoPages.map(page => html(`
            <div class="ModelPdf__page ModelPdf__page_length_${page.length}">
              <div class="ModelPdf__row ModelPdf__row_header">
                ${model.name}
              </div>
              <div class="ModelPdf__row ModelPdf__row_photos">
                ${page.map(photo => html(`
                  <div class="ModelPdf__photoWrap">
                    <img class="ModelPdf__photo" src="/media/large/${photo.fileName}" />
                  </div>
                `)).join('')}
              </div>
              <div class="ModelPdf__row ModelPdf__row_footer">
                <div class="ModelPdf__params">
                  <div class="ModelPdf__paramsRow">
                    ${renderParam('Height', params.height.inch)}
                    ${renderParam('Waist', params.waist.inch)}
                    ${renderParam('Hips', params.hips.inch)}
                    ${renderParam('Hair', params.hair)}
                    ${renderParam('Eyes', params.eyes)}
                    ${renderParam('Shoe', shoeAmerican)}
                  </div>
                  <div class="ModelPdf__paramsRow">
                    ${renderParam('Heuteur', params.height.cm)}
                    ${renderParam('Taille', params.waist.cm)}
                    ${renderParam('Hanches', params.hips.cm)}
                    ${renderParam('Cheveux', params.hair)}
                    ${renderParam('Yeux', params.eyes)}
                    ${renderParam('Chaussures', params.shoe)}
                  </div>
                </div>
                <img class="ModelPdf__logo" src="/images/logo.png" />
              </div>
            </div>
          `)).join('')}
        </div>
      </body>
    </html>
  `)
}

function renderParam (label, value) {
  return html(`
    <div class="ModelPdf__param">
      <div class="ModelPdf__paramLabel">${label}:</div>
      <div class="ModelPdf__paramValue">${value}</div>
    </div>
  `)
}

function cmToInches(cm) {
  var realFeet = cm / 30.48
  var feet = Math.floor(realFeet)
  var inches = Math.round((realFeet - feet) * 12)
  return feet + "&prime;" + inches + '&Prime;'
}

function html (str) {
  return str
}

})()
