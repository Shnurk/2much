(() => {

mdl = {
  require,
  exports
}

function require (getter) {
  const result = safeGet(g, getter)

  if (!defined(result)) {
    console.error(`[mdl] Unable to require \`${getter}\``)
  }

  return result
}

function exports (getter, value) {
  safeSet(g, getter, value)
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
    if (!defined(cursor[key])) {
      cursor[key] = {}
    }
    cursor = cursor[key]
  }

  const lastKey = keys[lastKeyIndex]
  cursor[lastKey] = value
}

function defined (any) {
  return typeof(any) !== 'undefined'
}

})()
