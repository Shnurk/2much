window.block.callEvent = callBlockEvent;

/**
 * callBlockEvent('form.onSubmit', event, { userId: 2 })
 * >> window.form.onSubmit(event, { userId: 2 })
 *
 * callBlockEvent([ 'form.onSubmit', 4 ], event)
 * >> window.form.onSubmit(4, event)
 */
function callBlockEvent(handler, ...args) {
  if (!handler) {
    return;
  }

  if (!Array.isArray(handler)) {
    handler = [ handler ];
  }

  const [ handlerFn, ...handlerArgs ] = handler;
  const fn = safeGet(window, handlerFn);

  if (fn) {
    fn(...handlerArgs, ...args);
  } else {
    console.error(`handler ${handlerFn} is not defined`);
  }
}
