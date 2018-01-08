global = window
;(() => {

const brick = global.brick

global.Block = {
  render: renderBlock,
  raw: brick.raw
}

/**
 * props = String || {
 *   tag: [String]
 *   ...attrs
 * }
 */
function renderBlock (props, children) {
  if (!props) {
    props = {}
  }

  if (typeof props === 'string') {
    props = { class: props }
  }

  const tag = props.tag || (props.href ? 'a' : 'div')

  const attrs = {}
  Object.keys(props).forEach(name => {
    if (name !== 'tag') {
      attrs[name] = EVENT_ATTRS.includes(name.toLowerCase())
        ? eventAttr(props[name])
        : props[name]
    }
  })

  return brick(tag, attrs, children)
}

function eventAttr (attr) {
  const parts = Array.isArray(attr) ? attr : [ attr ]
  const fn = parts[0]
  const args = parts.slice(1).map(eventArg).join(', ')
  return `${fn}(${args})`
}

function eventArg (arg) {
  return typeof arg === 'number' || arg === 'this' || arg === 'event'
    ? arg
    : JSON.stringify(arg)
}

var EVENT_ATTRS = [
  'abort', 'afterprint', 'beforeprint', 'beforeunload', 'blur', 'canplay',
  'canplaythrough', 'change', 'click', 'contextmenu', 'copy', 'cuechange',
  'cut', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragleave', 'dragover',
  'dragstart', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus',
  'hashchange', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load',
  'loadeddata', 'loadedmetadata', 'loadstart', 'message', 'mousedown',
  'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'offline',
  'online', 'pagehide', 'pageshow', 'paste', 'pause', 'play', 'playing',
  'popstate', 'progress', 'ratechange', 'reset', 'resize', 'scroll',
  'search', 'seeked', 'seeking', 'select', 'show', 'stalled', 'storage',
  'submit', 'suspend', 'timeupdate', 'toggle', 'unload', 'volumechange',
  'waiting', 'wheel'
].map(a => `on${a}`)

})()
