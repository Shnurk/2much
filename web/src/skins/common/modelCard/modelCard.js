/* global q */
/* global skin */

(() => {

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
  return (
    $({ class: 'modelCard', tag: 'a', href: props.url }, [
      $({
        class: 'modelCard__body',
        style: `background-image: url('${props.photo}')`
      }, [
        $('modelCard__params', [
          $('modelCard__height', `${props.height.cm} / ${props.height.inch}`),
          $('modelCard__measures', (
            [ props.chest, props.waist, props.hips ].map(measure => (
              $('modelCard__measure', [
                'chest',
                $({ tag: 'br' }),
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

