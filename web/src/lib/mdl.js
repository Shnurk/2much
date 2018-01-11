(() => {

const g = typeof global === 'undefined' ? window : global

g.mdl = {
  require: mdlRequire,
  export: mdlExport,
  extend: mdlExtend
}

function mdlRequire (getter) {
  const module = safeGet(g, getter)

  if (isUndefined(module)) {
    console.error(`[mdl] Unable to require \`${getter}\``)
  }

  return module
}

function mdlExport (getter, value) {
  safeSet(g, getter, value)
}

function mdlExtend (getter, obj) {
  const module = safeGet(g, getter) || safeSet(g, getter, {})
  Object.assign(module, obj)
}

/**
 * safeGet({ photos: { count: 3 } }, 'photos.count') => 3
 * safeGet({ photos: { count: 3 } }, 'photos.total') => undefined
 *
 * obj = Object
 * getter = String // dots separated
 * => Any || undefined
 */
function safeGet (obj, getter) {
  const keys = getter.split('.')
  const keysCount = keys.length

  let cursor = obj;
  for (let i = 0; i < keysCount; i++) {
    cursor = cursor[keys[i]]
    if (!cursor) {
      return undefined
    }
  }

  return cursor
}

/**
 * safeSet(window, 'some.getter', 'value') -> window.some.getter === 'value'
 *
 * obj = Object
 * getter = String // dots separated
 * value = Any
 */
function safeSet (obj, getter, value) {
  const keys = getter.split('.')
  const keysCount = keys.length
  const lastKeyIndex = keysCount - 1

  let cursor = obj;
  for (let i = 0; i < lastKeyIndex; i++) {
    const key = keys[i]
    if (isUndefined(cursor[key])) {
      cursor[key] = {}
    }
    cursor = cursor[key]
  }

  const lastKey = keys[lastKeyIndex]
  cursor[lastKey] = value

  return value
}

function isUndefined (any) {
  return any === undefined
}

})()
