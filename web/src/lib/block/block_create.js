(() => {

const brick = mdl.require('brick')

mdl.exports('block.create', createBlock)

/**
 * props = String || {
 *   tag: [String]
 *   inner: [Any]
 *   ...attrs
 * }
 * => HTML
 */
function createBlock (props) {
  if (typeof props === 'string') {
    return brick.wrap(props)
  }

  props || (props = {})

  const tag = props.tag || (props.href ? 'a' : 'div')
  const children = props.inner
  const attrs = {}

  Object.keys(props).forEach(name => {
    const value = props[name]

    // Skip `tag` and `inner`
    if (name === 'tag' || name === 'inner') {
      return

    // Process `data`
    } else if (name === 'data') {
      Object.keys(value).forEach(key => {
        const keyDashed = camelCaseToDash(key)
        attrs[`data-${keyDashed}`] = value[key]
      })

    // Process events (`onclick`, `onkeydown`, etc)
    } else if (isEvent(name)) {
      attrs[name] = eventAttrValue(value)

    // Process `class`
    } else if (name === 'class') {
      attrs[name] = alwaysArray(value).filter(nonEmptyString).join(' ')

    // Use as is
    } else {
      attrs[name] = value
    }
  })

  return brick(tag, attrs, children)
}

/**
 * eventAttrValue('alert') => "alert()"
 * eventAttrValue([ 'alert', 4, 'ok' ]) => "alert(4, 'ok')"
 */
function eventAttrValue (value) {
  const parts = alwaysArray(value)
  const fn = parts[0]
  const args = parts.slice(1).map(eventArg).join(', ')
  return `${fn}(${args})`
}

function eventArg (arg) {
  return typeof arg === 'number' || arg === 'this' || arg === 'event'
    ? arg
    : JSON.stringify(arg)
}

function isEvent (name) {
  return EVENTS.includes(name.toLowerCase())
}

function camelCaseToDash (str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

function nonEmptyString (any) {
  return typeof any === 'string' && any
}

function alwaysArray (any) {
  return Array.isArray(any) ? any : [ any ]
}

var EVENTS = [
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
