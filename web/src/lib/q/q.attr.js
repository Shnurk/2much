/* global q */

;(() => {

Object.assign(q, {
  attr, 
  act: actParam,
  onBlur: attrEvent('onblur'),
  onChange: attrEvent('onchange'),
  onClick: attrEvent('onclick'),
  onFocus: attrEvent('onfocus'),
  onInput: attrEvent('oninput'),
  onKeyDown: attrEvent('onkeydown'),
  onKeyUp: attrEvent('onkeyup'),
  onMouseDown: attrEvent('onmousedown'),
  onMouseUp: attrEvent('onmouseup'),
  onTouchEnd: attrEvent('ontouchend'),
  onTouchStart: attrEvent('ontouchstart')
})


const IS_ACT = '__q_is_act'


function attr (attrName, attrValue) {
  return `${attrName}="${attrValue}"`
}


function attrEvent (attrName) {
  return (...args) => {
    return attr(attrName, eventString(args))
  }
}


function actParam (param) {
  param = Array.isArray(param) ? param : [ param ]
  param[IS_ACT] = true
  return param
}


function isActParam (param) {
  return Array.isArray(param) && param[IS_ACT]
}


/**
 * eventString([ 'Avatar.onClick', 'event', 4, 'hello' ])
 * => "Avatar.onClick(event, 4, 'hello')"
 */
function eventString (args) {
  const fn = args[0]
  params = args.slice(1)
  const exceptions = params.filter(isActParam).map(e => e[0])
  const paramStr = [].concat(...params).map(eventParamProcessor(exceptions)).join(', ')
  return `${fn}(${paramStr})`
}

function eventParamProcessor (exceptions) {
  return (param) => {
    if (
      typeof param === 'number' ||
      param === 'event' ||
      param === 'this' ||
      exceptions.includes(param)
    ) {
      return param
    }

    return JSON.stringify(param)
  }
}

})()
