(() => {

mdl.extend('block', {
  callHandler
})

/**
 * callHandler('form.onSubmit', event, { userId: 2 })
 * -> window.form.onSubmit(event, { userId: 2 })
 *
 * callHandler([ 'form.onSubmit', 4 ], event)
 * -> window.form.onSubmit(4, event)
 */
function callHandler (handler, ...args) {
  if (!handler) {
    return
  }

  if (!Array.isArray(handler)) {
    handler = [ handler ]
  }

  const [ handlerFnGetter, ...handlerArgs ] = handler
  const fn = safeGet(window, handlerFnGetter)

  if (fn) {
    fn(...handlerArgs, ...args)
  } else {
    console.error(`[block] Function \`${handlerFnGetter}\` is not defined`)
  }
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


})()
