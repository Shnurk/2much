/* global q */
/* global skin */

const {generateHtml, raw} = require('../../../lib/epos.js')

;(() => {

const $ = global.skin.Brick.render

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
  return generateHtml({
    tag: 'a',
    class: 'modelCard',
    href: props.url,
    inner: [
      {
        class: 'modelCard__body',
        style: `background-image: url('${props.photo}')`,
        inner: {
          class: 'modelCard__params',
          inner: [
            // Height
            {
              class: 'modelCard__height',
              inner: raw(`${props.height.cm} / ${props.height.inch}`)
            },

            // Other measures
            {
              class: 'modelCard__measures',
              inner: [
                // Chest
                {
                  class: 'modelCard__measure',
                  inner: [
                    { class: 'modelCard__measureCell', inner: 'chest' },
                    { class: 'modelCard__measureCell', inner: raw(props.chest.cm) },
                    { class: 'modelCard__measureCell', inner: raw(props.chest.inch) }
                  ]
                },

                // Waist
                {
                  class: 'modelCard__measure',
                  inner: [
                    { class: 'modelCard__measureCell', inner: 'waist' },
                    { class: 'modelCard__measureCell', inner: raw(props.waist.cm) },
                    { class: 'modelCard__measureCell', inner: raw(props.waist.inch) }
                  ]
                },

                // Hips
                {
                  class: 'modelCard__measure',
                  inner: [
                    { class: 'modelCard__measureCell', inner: 'hips' },
                    { class: 'modelCard__measureCell', inner: raw(props.hips.cm) },
                    { class: 'modelCard__measureCell', inner: raw(props.hips.inch) }
                  ]
                },
              ]
            }
          ]
        }
      },

      // Name
      {
        class: 'modelCard__name',
        inner: props.name
      }
    ]
  })
  return (
    $({ class: 'modelCard', tag: 'a', href: props.url }, [
      $({
        class: 'modelCard__body',
        style: `background-image: url('${props.photo}')`
      }, [
        $('modelCard__params', [
          $('modelCard__height', `${props.height.cm} / ${props.height.inch}`),
          $('modelCard__measures', (
            [ props.chest, props.waist, props.hips ].map((measure, i) => (
              $('modelCard__measure', [
                [ 'chest', 'waist', 'hips' ][i]
                `${measure.cm} / ${measure.inch}`
              ])
            ))
          ))
        ])
      ]),

      $('modelCard__name', (
        props.name
      ))
    ])
  )
}

})()

