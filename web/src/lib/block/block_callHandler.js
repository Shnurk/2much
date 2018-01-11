(() => {

mdl.exports('block.callHandler', callHandler)

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

  const [ handlerFn, ...handlerArgs ] = handler
  const fn = safeGet(window, handlerFn)

  if (fn) {
    fn(...handlerArgs, ...args)
  } else {
    console.error(`[block] Handler \`${handlerFn}\` is not defined`)
  }
}

})()
