(() => {

brick = {
  create: createBrick,
  wrap: htmlToBrick
}

const BRICK = '__brick'

/**
 * tag = String
 * attrs = Object
 * children = String || String[]
 * => HTML
 */
function createBrick (tag = 'div', attrs = {}, children = '') {
  if (!isValidTag(tag)) {
    return null
  }

  attrs = buildAttrsStr(attrs)
  children = buildChildrenStr(children)

  const html = isSelfClosingTag(tag)
    ? `<${tag}${attrs} />`
    : `<${tag}${attrs}>${children}</${tag}>`

  return htmlToBrick(html)
}

function buildAttrsStr (attrs) {
  let attrsStr = ''

  Object.keys(attrs || {}).forEach(name => {
    const value = attrs[name]
    if (value === true) {
      attrsStr += ` ${safe(name)}`
    } else if (isString(value) || isNumber(value)) {
      attrsStr += ` ${safe(name)}="${safe(value)}"`
    }
  })

  return attrsStr
}

function buildChildrenStr (children) {
  return flatArray(children || '')
    .filter(isValidChild)
    .map(i => isBrick(i) ? i : safe(i))
    .join('')
}

function isSelfClosingTag (tag) {
  return SELFCLOSING_TAGS.includes(tag)
}

function htmlToBrick (html) {
  html = new String(html)
  html[BRICK] = true
  return html
}

function isBrick (any) {
  return !!(
    any &&
    typeof any === 'object' &&
    BRICK in any
  )
}

function isValidChild (child) {
  return (
    isString(child) ||
    isNumber(child) ||
    isBrick(child)
  )
}

function isValidTag (tag) {
  return (
    tag &&
    typeof tag === 'string' &&
    /^[\w-]+$/.test(tag)
  )
}

function safe (numOrStr) {
  return numOrStr.toString()
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function flatArray (any) {
  return isArray(any) ? flatten(any) : [ any ]
}

function flatten (array) {
  let flat = []

  array.forEach(item => {
    if (isArray(item)) {
      flat = flat.concat(flatten(item))
    } else {
    }
      flat.push(item)
  })

  return flat
}

function isArray (any) {
  return Array.isArray(any)
}

function isString (any) {
  return typeof any === 'string'
}

function isNumber (any) {
  return typeof any === 'number'
}

var SELFCLOSING_TAGS = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'menuitem',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]

})()
