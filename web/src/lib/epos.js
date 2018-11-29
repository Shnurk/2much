/*!
 * Tool for creating dynamic and fast web ui.
 *
 * Warning: trash, copy-paste and strange-looking code!
 * Don't event put your eye here unless you wanna feel some pain.
 */

let Epos
global.Epos = {
  obj: toProxy,
  elem: createElemententRoot,
  raw: rawHtml,
  fn: eposFn,
  scope: eposStop,
  scoped: eposScoped,
  transaction: eposTransaction,
  hydrate: eposHydrate,
  reactive: eposReactive,
  html,
  _clean: cleanAll
}

module.exports.generateHtml = html

function dynamic (value) {
  const self = dynamic
  const ds = self.ds || (self.ds = new Map())

  if (typeof value === 'function') {
    let dvalue = ds.get(value)
    if (!dvalue) {
      dvalue = Epos.obj({ _secret_: value })
      ds.set(value, dvalue)
    }
    return dvalue._secret_
  }

  return value
}

var calcNodes = []
var elemsById = {}
var eposId = 1
var nodeId = 0
var nodes = []
var nodesByProxy = {}
global.nodesByProxy = nodesByProxy
var symbols = {}
var transactionLevel = 0
var transactionNodes = []
var isBrowser = typeof window !== 'undefined'
var glbl = isBrowser ? window : global
global.elemsById = elemsById

// Element creation namespace
let namespace = null

// Fields
var fAffectsView = createSymbol('affectsView')
var fEposDesc = createSymbol('eposDesc')
var fEposDescForElems = createSymbol('eposDescForElems')
var fIsEposArray = createSymbol('isEposArray')
var fIscreateElement = createSymbol('iscreateElement')
var fIsEposFn = createSymbol('isEposFn')
var fIsProxy = createSymbol('isProxy')
var fListeners = createSymbol('listeners')
var fProxyId = createSymbol('proxyId')
global.fProxyId = fProxyId
var fEposArrays = createSymbol('eposArrays')

var RESERVED_KEYS = ['tag', 'inner', 'attrs', 'onMount', 'onUnmount']
var EVENTS = [
  'abort', 'auxclick', 'beforecopy', 'beforecut', 'beforepaste', 'blur',
  'cancel', 'canplay', 'canplaythrough', 'change', 'click', 'close',
  'contextmenu', 'copy', 'cuechange', 'cut', 'dblclick', 'drag', 'dragend',
  'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop',
  'durationchange', 'emptied', 'ended', 'error', 'focus',
  'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup',
  'load', 'loadeddata', 'loadedmetadata', 'loadstart', 'lostpointercapture',
  'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout',
  'mouseover', 'mouseup', 'mousewheel', 'paste', 'pause', 'play', 'playing',
  'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave',
  'pointermove', 'pointerout', 'pointerover', 'pointerup', 'progress',
  'ratechange', 'reset', 'resize', 'scroll', 'search', 'seeked', 'seeking',
  'select', 'selectstart', 'stalled', 'submit', 'suspend', 'timeupdate',
  'toggle', 'touchcancel', 'touchend', 'touchmove', 'touchstart',
  'volumechange', 'waiting', 'wheel', 'animationcancel', 'animationend',
  'animationiteration', 'transitioncancel', 'transitionend'
].map(e => `on${e}`)

// For dev
// var proxies = new Set()
// glbl.logs = {}
function log (key) {
  var v = logs[key] || (logs[key] = 0)
  logs[key] = v + 1
  // var value = Number(localStorage.getItem(key)) || 0
  // localStorage.setItem(key, value + 1)
}


/**
 * TODO:
 * var store = Epos.obj({
 *   curDataId: '1'
 *   data: {}
 * })
 *
 * var view = Epos.obj({
 *   value: () => store.data[store.curDataId] && store.data[store.curDataId].value
 * })
 *
 * store.data['1'] = { value: 'ok' }
 *
 * Should `view.value` change or not?
 *
 * If yes, then `view.value` should depend on `store.data['1']`
 * (even if it's not defined yet)
 *
 * So when we encounter getter which is not defined yet, we create EposNode for it
 * and track dependencies as always. When value changes (sets), we don't create EposNode
 * we use that created one.
 */


function eposReactive (fn) {
  toProxy({
    reactive: fn
  })
}

/*!
 * Node creation
 */

function createNode (proxy, desc, key) {
  return new EposNode(proxy, desc, key)
}
function EposNode (proxy, desc, key) {
  // var self = Node
  this.id = nodeId
  this.desc = desc
  this.key = key
  this.deps = new Set()
  this.infls = new Set()
  this.proxy = proxy
  this[fEposArrays] = new Set()

  nodeId += 1
  var proxyId = proxy[fProxyId]
  nodesByProxy[proxyId] || (nodesByProxy[proxyId] = {})
  nodesByProxy[proxyId][key] = this
  nodes.push(this)
}

/*!
 * ================================
 */

function createSymbol(name) {
  if (isNativeSupport('Symbol') && isNativeSupport('Proxy')) {
    return Symbol(name)
  } else {
    var symbol = `__epos_${name}`
    symbols[symbol] = true
    return symbol
  }
}

function isNativeSupport(what) {
  return glbl[what] && glbl[what].toString().length < 100
}

function isHook (key) {
  return key === 'onMount' || key === 'onUnmount'
}

/**
 * desc = Object
 * => HTML
 */
function wdElement (desc) {
  var elem

  // Process raw html (what the case?)
  if (desc.__raw__) {
    const div = document.createElement('div')
    div.innerHTML = desc.__raw__
    desc = Array.from(div.childNodes)
    return desc
  }

  var nodeType = desc && desc.nodeType
  if (nodeType === Node.TEXT_NODE || nodeType === Node.ELEMENT_NODE) {
    desc[fIscreateElement] = true
    return desc
  }

  if (isArray(desc)) {
    return toFlatArray(desc).map(eposCreateElement)
  }

  if (isStrOrNum(desc)) {
    elem = document.createTextNode(desc.toString())
    elem[fIscreateElement] = true
    elemsById[desc[fProxyId]] = elem
    return elem
  }

  if (!desc) {
    return null
  }

  var tag = getTag(desc)

  if (tag === 'svg') {
    namespace = 'http://www.w3.org/2000/svg'
  }

  if (namespace) {
    elem = document.createElementNS(namespace, tag)
  } else {
    elem = document.createElement(tag)
  }

  for (var key in desc) {
    var v = desc[key]
    if (isReservedKey(key) || isHook(key) || symbols[key]) {
      continue
    }
    if (isFn(v) && isEvent(key)) {
      elem.addEventListener(key.slice(2).toLowerCase(), v)
      elem[fListeners] || (elem[fListeners] = [])
      elem[fListeners].push({ name: key.slice(2).toLowerCase(), handler: v })
      continue
    }
    setAttr(elem, key, v)
  }

  elem.__keys = Object.keys(desc)

  var children = toFlatArray(getChildren(desc))
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child && elem.appendChild(child)
  }

  elem[fIscreateElement] = true
  elemsById[desc[fProxyId]] = elem

  if (tag === 'svg') {
    namespace = null
  }

  return elem
}

function alwaysArray (any) {
  return isArray(any) ? any : [any]
}

function isFn (any) {
  return typeof any === 'function'
}

function getTag (desc) {
  if ('tag' in desc) {
    var tag = desc.tag

    if (isString(tag) && /^[\w-]+$/.test(tag)) {
      return tag
    } else {
      throw 'Invalid tag name'
    }
  }

  if (isNonEmptyString(desc.href)) {
    return 'a'
  }

  return 'div'
}

function getChildren (desc) {
  if ('inner' in desc) {
    return toFlatArray(desc.inner).map(eposCreateElement)
  }

  return []
}

function prepareClass (attrValue) {
  return toFlatArray(attrValue)
    .filter(isNonEmptyString)
    .join(' ')
    .trim()
    .replace(/\s+/g, ' ')
}

function isReservedKey (key) {
  return RESERVED_KEYS.includes(key)
}

function isString (any) {
  return typeof any === 'string'
}

function isObject (any) {
  return Object.prototype.toString.call(any) === '[object Object]'
}

function isNonEmptyString (any) {
  return isString(any) && any
}

function toFlatArray (any) {
  if (isArray(any)) {
    return flatten(any)
  }

  return [any]
}

function flatten (array) {
  var flat = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (isArray(item)) {
      flat = flat.concat(flatten(item))
    } else {
      flat.push(item)
    }
  }

  return flat
}

function rawHtml (str) {
  if (isBrowser) {
    var div = document.createElement('div')
    div.innerHTML = str
    var divsArray = Array.from(div.childNodes)
    divsArray.__isRawDivsArray = true
    return divsArray
  }

  return str ? { __raw__: str } : null;
}

function eposFn (fn) {
  if (!fn) {
    return () => {}
  }

  if (fn) {
    fn[fIsEposFn] = true
  }

  return fn
}

function isEvent (key) {
  return isString(key) && EVENTS.includes(key.toLowerCase())
}

function toProxy (desc, hydrateElem = null) {
  if (typeof desc === 'string') {
    return desc
  }

  if (!isBrowser) {
    if (isObject(desc)) {
      var copy = { ...desc }
      for (var key in copy) {
        while (isFn(copy[key]) && !copy[key][fIsEposFn]) {
          copy[key] = copy[key]()
        }

        if (isObject(copy[key])) {
          copy[key] = toProxy(copy[key])
        }
      }
    }

    // TODO: dont put mapDynamic to prototype, go through tree and patch instances instead
    Array.prototype.mapDynamic = Array.prototype.map
    return copy
    // return desc
    // for (var k in desc) {
    //   processKey(k)
    // }
    // return desc
  }

  if (!isObject(desc) && !isArray(desc)) {
    return desc
  }

  if (desc && desc[fIsProxy]) {
    return desc
  }

  // Need to predefine epos properties for Proxy polyfill
  if (!isNativeSupport('Proxy')) {
    desc = Object.assign({}, desc, {
      [fIsProxy]: true,
      [fAffectsView]: null,
      [fEposDesc]: null,
      o: null
    })
  }

  desc[fAffectsView] = true
  var proxyId = `epos${eposId}`
  desc[fProxyId] = `epos${eposId}`

  if (hydrateElem) {
    hydrateElem[fIscreateElement] = true
    hydrateElem[fEposDescForElems] = desc
    elemsById[desc[fProxyId]] = hydrateElem

    // TODO: process other html5 controls
    // if (hydrateElem.tagName === 'INPUT') {
    // hydrateElem.value = desc.value || ''
    // }
  }

  eposId += 1
  var proxy = new Proxy(desc, { get, set })

  // For dev
  // proxies.add(proxy)

  for (var k in desc) {
    processKey(k)
  }

  return proxy

  function processKey (key) {
    // if (!isBrowser) {
    //   if (Array.isArray(desc[key])) {
    //     desc[key].mapDynamic = desc[key].map
    //   }
    //   return desc[key]
    // }

    if (key === 'length') {
      return
    }

    if (symbols[key]) {
      return
    }

    if (isHook(key)) {
      return
    }

    if (hydrateElem && isFn(desc[key]) && isEvent(key)) {
      const v = desc[key]
      hydrateElem.addEventListener(key.slice(2).toLowerCase(), v)
      hydrateElem[fListeners] || (hydrateElem[fListeners] = [])
      hydrateElem[fListeners].push({ name: key.slice(2).toLowerCase(), handler: v })
      return
    }

    if (isEvent(key))  {
      return
    }

    var node = createNode(proxy, desc, key)

    if (key === 'inner') {
      if (isArray(desc[key])) {
        desc[key] = toFlatArray(desc[key])
      }
    }

    if (isObjectNotProxy(desc[key])) {
      if (hydrateElem && key === 'inner') {
        desc[key] = toProxy(desc[key], hydrateElem.firstChild)
      } else {
        desc[key] = toProxy(desc[key])
      }
    }

    processArrayIfArrayRecursive(desc, key, node, hydrateElem)
    proxy[key]
  }

  function processArrayIfArrayRecursive (obj, key, node, hydrateElem2) {
    var value = obj[key]
    if (isArray(value)) {
      obj[key] = createEposArray(value, node)
      value = obj[key]
      var valueLength = value.length

      for (var i = 0; i < valueLength; i++) {
        var v = value[i]
        if (isObjectNotProxy(v)) {
          if (hydrateElem2) {
            value[i] = toProxy(v, hydrateElem2.childNodes[i])
          } else {
            value[i] = toProxy(v)
          }
        }
        if (hydrateElem2) {
          processArrayIfArrayRecursive(value, i, node, hydrateElem2.childNodes[i])
        } else {
          processArrayIfArrayRecursive(value, i, node)
        }
      }
    }
  }

  function get (d, key) {
    if (key === fIsProxy) {
      return true
    }

    if (key === '$') {
      var res = JSON.parse(JSON.stringify(desc))
      Object.keys(res).forEach(k => {
        if (symbols[k] || k === '$') {
          delete res[k]
        }
      })
      return res
    }

    if (key === fAffectsView || key === fProxyId) {
      return desc[key]
    }

    if (key === fEposDesc) {
      return desc
    }

    if (isEvent(key)) {
      return desc[key]
    }

    var node = getNode(proxy, key)

    // NEW LINE for handling undefined keys
    var isShadowNode = false
    if (key && !(key in desc) && key !== 'toJSON' && !isReservedKey(key) && key !== '__raw__' && key !== 'nodeType') {
      isShadowNode = true
      node = nodesByProxy[proxyId] && nodesByProxy[proxyId][key]
      if (!node) {
        node = createNode(proxy, desc, key)
      }
    }

    if (!node) {
      return desc[key]
    }

    if (!('value' in node)) {
      var value = desc[key]

      if (isFn(value) && !value[fIsEposFn]) {
        calcNodes.push(node)
        try {
          value = value()
        } catch (err) {
          console.error('Epos error');
          console.error(err)
        }
        calcNodes.pop()

        if (isObjectNotProxy(value)) {
          if (hydrateElem && key === 'inner') {
            value = toProxy(value, hydrateElem.firstChild)
          } else {
            value = toProxy(value, hydrateElem)
          }
        }

        if (isArray(value)) {
          var eposArrayValue = createEposArray(value, node)

          var valueLength = value.length
          for (var i = 0; i < valueLength; i++) {
            var v = value[i]
            if (isObjectNotProxy(v)) {
              value[i] = toProxy(v, hydrateElem && hydrateElem.childNodes[i])
            }
          }

          value = eposArrayValue
        }
      }

      node.value = value
    }

    if (calcNodes.length) {
      var calcNode = calcNodes[calcNodes.length - 1]
      if (calcNode.freeze) {
      } else {
        node.infls.add(calcNode)
        calcNode.deps.add(node)
      }
    }

    return node.value
  }

  function set (d, key, value) {
    var node = getNode(proxy, key)

    if (desc[key] === value) {
      return true
    }

    if (isArray(value)) {
      value = createEposArray(value, node)
    }

    if (isObjectNotProxy(value)) {
      value = toProxy(value)
    }

    if (!(key in desc)) {
      createNode(proxy, desc, key)
    }

    desc[key] = value

    // For symbols
    if (!node) {
      return true
    }

    updateNodeDeepOnSet(node)

    // return `true` is required by proxy polyfill (if i recall right)
    return true
  }
}

function updateNodeDeepOnSet (node) {
  if (transactionLevel > 0) {
    transactionNodes.push(node)
    return
  }

  // Recalculate cache
  // Array.from does not work with Set polyfill
  // var infls = Array.from(node.infls)
  // var deps = Array.from(node.deps)
  var infls = []; node.infls.forEach(i => infls.push(i))
  var deps = []; node.deps.forEach(d => deps.push(d))

  node.infls.clear()
  node.deps.clear()

  recalculateNode(node)

  // Is it optimization?
  // if (deps.length) {
  //   recalculateNode(node)
  // } else {
  //   node.value = value
  // }

  // Update deps
  for (let i = 0; i < deps.length; i++) {
    const dep = deps[i];
    dep.infls.delete(node)
  }

  // Update infls
  for (let i = 0; i < infls.length; i++) {
    const infl = infls[i];
    infl.deps.clear()

    // Update value
    var prevValue = infl.value
    recalculateNode(infl)
    if (prevValue !== infl.value) {
      updateInflsDeep(infl)
    }
  }
}

function dropProxyDeep (proxy, key) {
  var node = getNode(proxy, key)

  if (!node) {
    return
  }

  // Array.from(set) is not supported for Set polyfill
  var infls = []; node.infls.forEach(i => infls.push(i))
  var deps = []; node.deps.forEach(d => deps.push(d))

  node.infls.clear()
  node.deps.clear()

  for (let i = 0; i < deps.length; i++) {
    const dep = deps[i];
    dep.infls && dep.infls.delete(node)
  }
  for (let i = 0; i < infls.length; i++) {
    const infl = infls[i];
    infl.deps.delete(node)
  }

  // For dev
  // proxies.delete(proxy)

  for (var k in node.desc) {
    var v = node.desc[k]
    if (v && v[fIsProxy]) {
      // TODO: key? not k?
      dropProxyDeep(v, key)
    }
  }
}

function recalculateNode (node) {
  node[fEposArrays].forEach(eposArray => {
    // Dont .clear() because same eposArray can be used by several nodes
    eposArray.otherUsages.delete(node)
    eposArray.mapped.forEach(it => {
      if (it.node === node) {
        eposArray.mapped.delete(it)
      }
    })
  })

  var prevChildProxy = node.value && node.value[fIsProxy] ? node.value : null

  var prevValue = node.value
  delete node.value

  // Should not these lines be swaped?
  node.proxy[node.key]

  if (prevChildProxy) {
    dropProxyDeep(prevChildProxy, node.key)
  }

  if (node.desc[fAffectsView]) {
    var desc = node.desc
    var key = node.key
    var elem = elemsById[desc[fProxyId]]

    if (!elem) {
      return
    }

    var value = node.value

    if (value === prevValue) {
      return
    }

    // Tag
    if (key === 'tag') {
      // console.log('tag change is not implemented')

    // Inner
    } else if (key === 'inner') {
      if (isStrOrNum(value)) {
        elem.innerText = value.toString()
      } else if (isObject(value)) { // not isObjectNotProxy!!
        value = toProxy(value)
        elem.innerHTML = ''
        elem.appendChild(eposCreateElement(value))
      } else if (isArray(value)) {
        if (value.__isRawDivsArray) {
          elem.innerHTML = ''
          value.forEach(v => elem.appendChild(v))
        } else {
          value = value.map(v => toProxy(v))
          elem.innerHTML = ''
          const valueMapped = value.map(eposCreateElement)
          for (let i = 0; i < valueMapped.length; i++) {
            const child = valueMapped[i];
            try {
              elem.appendChild(child)
            } catch (err) {
              debugger
            }
          }
        }
      } else if (!value) {
        elem.innerHTML = ''
      }

    // Value
    } else if (key === 'value' && elem.tagName === 'INPUT') {
      elem.value = value

    // Checked
    } else if (key === 'checked' && elem.tagName === 'INPUT') {
      elem.checked = value

    // Attr
    } else if (isString(key)) {
      setAttr(elem, key, value)
    }
  }
}

function setAttr (elem, key, value) {
  if (key === 'class') {
    value = prepareClass(value)
  }

  if (isStrOrNum(value)) {
    var v = elem.getAttribute(key)
    if (v !== value) {
      elem.setAttribute(key, value)
    }
  } else {
    elem.removeAttribute(key)
  }
}

function isStrOrNum (any) {
  return isString(any) || typeof any === 'number'
}

// TODO:
// probably we dont need custom arrays for Epos.element execution
// Epos.element({ inner: [ ... ] })
// inner will be custonArray, but seems like there is no need
function createEposArray (arr, node) {
  if (arr[fIsEposArray]) {
    return arr
  }

  var mapped = new Set()
  var otherUsages = new Set() // important to be Set

  function wrapNative (method) {
    return function (iterator) {
      var origIterator = iterator
      iterator = (item, i) => {
        var v = origIterator(item, i)
        if (isObjectNotProxy(v)) {
          v = toProxy(v)
        }
        return v
      }

      var calcNode = calcNodes[calcNodes.length - 1]
      if (calcNode && !calcNode.freeze) {
        // calcNode is the same when recalculating, so Set helps us no to have duplicates
        otherUsages.add(calcNode)
      }
      return Array.prototype[method].call(this, iterator)
    }
  }

  function wrapNativeScoped (method) {
    return function (iterator) {
      var origIterator = iterator
      iterator = eposScoped((item, i) => {
        var v = origIterator(item, i)
        if (isObjectNotProxy(v)) {
          v = toProxy(v)
        }
        return v
      })

      var calcNode = calcNodes[calcNodes.length - 1]
      if (calcNode && !calcNode.freeze) {
        // calcNode is the same when recalculating, so Set helps us no to have duplicates
        otherUsages.add(calcNode)
      }

      return Array.prototype[method].call(this, iterator)
    }
  }

  function _pushUnshift (item, method) {
    if (isObjectNotProxy(item)) {
      item = toProxy(item)
    }

    Array.prototype[method].call(this, item)

    var calc = () => {
      otherUsages.forEach(node => {
        updateNodeDeepOnSet(node)
        recalculateNode(node)
      })

      mapped.forEach(it => {
        var { m, iterator, node: n } = it

        var v = iterator(item, m.length)
        if (isObjectNotProxy(v)) {
          v = toProxy(v)
        }

        // Maybe Array.prototype[method]?
        // Array.prototype[method].call(m, v)
        m[method](v)

        if (v && v[fEposDesc] && v[fEposDesc][fAffectsView]) {
          var desc = v[fEposDesc]
          var n = m.getNode()
          if (n && n.desc && elemsById[n.desc[fProxyId]]) {
            var parent = elemsById[n.desc[fProxyId]]
            var elem = elemsById[v[fProxyId]]

            if (method === 'push') {
              parent.insertAdjacentElement('beforeend', eposCreateElement(v))
            } else {
              parent.insertAdjacentElement('afterbegin', eposCreateElement(v))
            }
          }
        } else {
          // Should be dropped, it was used for old .map
          // recalculateNode(n);
        }
      })
    }

    if (transactionLevel > 0) {
      transactionNodes.push({ calc })
    } else {
      calc()
    }
  }

  function unshift (item) {
    this._pushUnshift(item, 'unshift')
  }

  function push (item) {
    this._pushUnshift(item, 'push')
  }

  function pop () {
    if (this.length) {
      var v = this[this.length - 1]
      this.splice(this.length - 1, 1)
      return v
    }
  }

  function shift () {
    if (this.length) {
      var v = this[0]
      this.splice(0, 1)
      return v
    }
  }

  function splice (index, i) {
    Array.prototype.splice.call(this, index, i)

    var calc = () => {
      otherUsages.forEach(node => {
        updateNodeDeepOnSet(node)
        recalculateNode(node)
      })

      mapped.forEach(it => {
        var { m } = it
        for (var j = 0; j < i; j++) {
          var proxy = m[index + j]

          // Check for existance to support removing more elements than array contains
          // e.g. [a,b].splice(0, 3)
          if (proxy) {
            var elem = elemsById[proxy[fProxyId]]
            if (elem) {
              elem.outerHTML = ''
            }
          }
        }
        m.splice(index, i)
      })
    }

    if (transactionLevel > 0) {
      transactionNodes.push({ calc })
    } else {
      calc()
    }
  }

  function getNode () {
    return node
  }

  function mapDynamic (iterator) {
    var array = this

    var calc = () => {

      var calcNode = calcNodes[calcNodes.length - 1]
      if (calcNode && !calcNode.freeze) {
        calcNode[fEposArrays].add(customArr)
      }

      // Scope iterator
      iterator = eposScoped(iterator)

      var m = new Array(...Array.prototype.map.call(array, iterator))
      var calcNode = calcNodes[calcNodes.length - 1]
      var r = createEposArray(m, calcNode)
      mapped.add({ m: r, iterator, node: calcNode })

      if (calcNode && !calcNode.freeze) {
        calcNode.deps.add(customArr)
      }

      return r
    }

    var calcNode = calcNodes[calcNodes.length - 1]

    // if inside calculation, then execute immediately
    // e.g. inner: () => store.visible ? store.items.mapDynamic(item => ...) : 'none'
    if (calcNode && !calcNode.freeze) {
      return calc()

    // Otherwise create as new caclulation
    // e.g. inner: store.items.mapDynamic(item => ...)
    } else {
      return calc
    }
  }

  var customArr = [...arr]

  // Process native methods
  ;[
    'filter',
    'find',
    'findIndex',
    'forEach',
    'indexOf'
    // 'map' // hm... need to think about this conseption of overriding
  ].forEach(method => {
    customArr[method] = wrapNative(method)
    customArr[`${method}Scoped`] = wrapNativeScoped(method)
  })

  customArr.mapDynamic = mapDynamic

  customArr.pop = pop
  customArr.push = push
  customArr.shift = shift
  customArr.splice = splice
  customArr.unshift = unshift

  customArr.getNode = getNode
  customArr._pushUnshift = _pushUnshift
  customArr[fIsEposArray] = true

  customArr.mapped = mapped
  customArr.otherUsages = otherUsages

  return customArr
}

function updateInflsDeep(node) {
  var infls = Array.from(node.infls)

  for (let i = 0; i < infls.length; i++) {
    const infl = infls[i];
    infl.deps.clear()

    var prevValue = infl.value
    recalculateNode(infl)
    if (prevValue !== infl.value) {
      updateInflsDeep(infl)
    }
  }
}

function getNode (proxy, key) {
  var proxyId = proxy[fProxyId]
  return nodesByProxy[proxyId]
    ? nodesByProxy[proxyId][key]
    : null
}

function eposStop (fn) {
  var calcNode = calcNodes[calcNodes.length - 1]
  if (calcNode && !calcNode.freeze) {
    calcNode.freeze = true
    var v = fn()
    calcNode.freeze = false
  } else {
    var v = fn()
  }
  return v
}

function isObjectNotProxy (any) {
  return isObject(any) && !any[fIsProxy]
}

function isArray (any) {
  return Array.isArray(any)
}

function createElemententRoot (desc) {
  if (!desc[fAffectsView]) {
    desc = toProxy(desc)
  }
  return eposCreateElement(desc)
}

function eposCreateElement (desc) {
  if (!desc && desc !== 0) {
    return null
  }
  var elem = wdElement(desc)
  elem[fEposDescForElems] = desc
  return elem
}

function eposScoped (fn) {
  return function scoped() {
    return eposStop(() => fn.apply(null, arguments));
  }
}

function eposTransaction(fn) {
  transactionLevel += 1
  fn()
  transactionLevel -= 1
  transactionNodes.forEach(node => {
    // For array items
    if (node.calc) {
      node.calc()
    } else {
      updateNodeDeepOnSet(node)
    }
  })

  transactionNodes = []
}

function cleanAll () {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.deps.clear()
    node.infls.clear()
  }
  nodes = []
  nodesByProxy = {}
  transactionNodes = []
  transactionLevel = 0
}

function eposHydrate (element, description) {
  toProxy(description, element)
}

/*!
 * onMount/onUnmount processing
 */

// TODO: instead of iterating all added/removed elements check only epos-registered
// onMount/onUnmount elements and try to find them in childlists of added/removed
if (isBrowser) {
  var mo = new MutationObserver(mutations => {
    for (let i = 0; i < mutations.length; i++) {
      const mutation = mutations[i];
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const elem = mutation.addedNodes[i];
        processMounUnmountRecursive(elem, 'onMount')
      }

      for (let i = 0; i < mutation.removedNodes.length; i++) {
        const elem = mutation.removedNodes[i];
        processMounUnmountRecursive(elem, 'onUnmount')

        if (elem[fListeners]) {
          for (let i = 0; i < elem[fListeners].length; i++) {
            const listener = elem[fListeners][i];
            elem.removeEventListener(listener.name, listener.handler)
          }
        }
      }
    }
  })
  mo.observe(document, { childList: true, subtree: true })
}

function processMounUnmountRecursive (elem, method) {
  var desc = elem[fIscreateElement] ? elem[fEposDescForElems] : null

  if (desc) {
    desc[method] && desc[method](elem)

    if (method === 'onUnmount') {
      const desc = elem[fEposDescForElems]
      const proxyId = desc[fProxyId]

      delete elemsById[proxyId]

      // Drop proxies for elems
      ;(elem.__keys || []).forEach(key => {
        const node = nodesByProxy[proxyId][key]
        if (node && node.proxy) {
          dropProxyDeep(node.proxy, key)
        }
      })
    }
  }
  if (elem.children && elem.children.length) {
    for (let i = 0; i < elem.children.length; i++) {
      const c = elem.children[i]
      processMounUnmountRecursive(c, method)
    }
  }
}







/*******************************************************************************
 *
 * Server
 *
 ******************************************************************************/

var SELFCLOSING_TAGS = [
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
  'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'
]

/**
 * desc = Object
 * => HTML
 */
function html (desc) {
  if (isString(desc)) {
    return desc ? { __raw__: desc } : null;
  }

  if (isArray(desc)) {
    return desc.map(html).join('')
  }

  if (!isObject(desc)) {
    throw 'Invalid input, object is expected'
  }

  var tag = getTag(desc)
  var innerStr = getInnerString(desc)
  var attrsStr = getAttrsString(desc)

  return isSelfClosingTag(tag)
    ? `<${tag}${attrsStr} />`
    : `<${tag}${attrsStr}>${innerStr}</${tag}>`
}

function getInnerString (desc) {
  if ('inner' in desc) {
    var inner = typeof desc.inner === 'function' // for Epos
      ? desc.inner()
      : desc.inner

    return toFlatArray(inner)
     .map(innerItemToString)
     .join('')
  }

  return ''
}

function getAttrsString (desc) {
  var attrsStr = ''

  if (desc.attrs) {
    Object.assign(desc, desc.attrs)
  }

  for (var key in desc) {
    if (isReservedKey(key)) {
      continue
    }

    var value = desc[key]

    // For Epos
    if (typeof value === 'function' && !isEvent(key)) {
      while (typeof value === 'function') {
        value = value()
      }
    }
    if (typeof value === 'function') {
      continue
    }

    if (key === 'class') {
      value = prepareClass(value)

    } else if (isEvent(key) && (isArray(value) || isFnGetter(value))) {
      value = prepareHandler(value)
    }

    var safeKey = safeString(key)

    if (value === true) {
      attrsStr += ` ${safeKey}`

    } else if (isNumber(value)) {
      attrsStr += ` ${safeKey}="${value}"`

    } else if (isString(value)) {
      attrsStr += ` ${safeKey}="${safeString(value)}"`

    } else if (value) {
      if (value.__raw__){
        value = value.__raw__
      } else {
        value = safeString(JSON.stringify(value))
      }

      attrsStr += ` ${safeKey}="${value}"`
    }
  }

  return attrsStr
}

function innerItemToString (item) {
  if (isNumber(item)) {
    return item.toString()
  }

  if (isString(item)) {
    return safeString(item)
  }

  if (isObject(item)) {
    if (item.__raw__) {
      return item.__raw__
    }

    return html(item)
  }

  // For Epos
  if (typeof item === 'function') {
    return innerItemToString(item())
  }

  return ''
}

/**
 * prepareHandler('alert')
 * => `alert()`
 *
 * prepareHandler([ 'alert', 4, 'ok' ])
 * => `alert(4, "ok")`
 *
 * prepareHandler([ 'console.log', { userId: 3 } ])
 * => `console.log({"userId":3})`
 */
function prepareHandler (handler) {
  handler = alwaysArray(handler)
  if (!handler.length) {
    return null
  }

  var fnGetter = handler[0]
  if (!isString(fnGetter)) {
    throw 'Invalid handler'
  }

  var args = handler.slice(1)
    .map(prepareHandlerArg)
    .join(', ')

  return `${fnGetter}(${args})`
}

function prepareHandlerArg (arg) {
  if (isNumber(arg) || arg === 'this' || arg === 'event') {
    return arg
  }

  return JSON.stringify(arg)
}

function isSelfClosingTag (tag) {
  return SELFCLOSING_TAGS.includes(tag.toLowerCase())
}

function isFnGetter (any) {
  return isString(any) && /^[\w.]+$/.test(any)
}

function isNumber (any) {
  return typeof any === 'number' && !isNaN(any)
}

function safeString (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
