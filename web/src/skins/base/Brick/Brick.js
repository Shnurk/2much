(() => {

global.skin.Brick = {
  render: renderBrick
}

/**
 * props = String || {
 *   tag: [String='div']
 *   ...Object // any html attributes
 * }
 */
function renderBrick (props, children = '') {
  if (typeof props === 'string') {
    props = { class: props }
  }

  const inner = prepareInner(children)
  const attrs = prepareAttrs(props)
  const tag = props.tag || 'div'

  if (tag === 'br') {
    return '<br>'
  }

  return `<${tag} ${attrs}>${inner}</${tag}>`
}

function prepareInner (children) {
  if (!Array.isArray(children)) {
    return children
  }

  let inner = ''

  flatten(children).forEach(child => {
    if (child || child === 0) {
      inner += child
    }
  })

  return inner
}

function prepareAttrs (attrs) {
  let prepared = ''

  Object.keys(attrs).forEach(name => {
    if (name === 'tag') {
      return
    }

    // TODO: process value
    const value = attrs[name]

    if (value || value === 0) {
      prepared += ` ${name}="${value}"`
    }
  })

  return prepared.slice(1)
}

function flatten(array) {
  let result = []

  array.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  })

  return result
}

})()
