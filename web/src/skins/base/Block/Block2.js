global = window
;(() => {

const brick = global.brick

global.block = {
  create: createBlock,
  raw: brick.raw
}

/**
 * props = String || {
 *   tag: [String]
 *   inner: [Any]
 *   ...attrs
 * }
 */
function createBlock (props) {
  props || (props = {})
  const tag = props.tag || (props.href ? 'a' : 'div')
  const inner = alwaysArray(props.inner || '').map(renderItem)
  const attrs = {}

  Object.keys(props).forEach(name => {
    if (name === 'tag' || name === 'inner') return
    attrs[name] = isEventAttr(name) ? eventAttr(props[name]) : props[name]
  })

  return brick.create(tag, attrs, inner)
}

function renderItem (item) {
  return typeof item === 'string' || brick.isBrick(item)
    ? item
    : createBlock(item)
}

function isEventAttr (attrName) {
  return EVENT_ATTRS.includes(attrName.toLowerCase())
}

function eventAttr (attr) {
  const parts = alwaysArray(attr)
  const fn = parts[0]
  const args = parts.slice(1).map(eventArg).join(', ')
  return `${fn}(${args})`
}

function alwaysArray (any) {
  return Array.isArray(any) ? any : [ any ]
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
