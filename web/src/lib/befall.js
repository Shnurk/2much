(() => {

global.befall = befall


function befall () {
  const fns = []
  const b = emitter.bind(fns)
  b.off = off.bind(fns)
  b._subscribers = fns
  b._args = Array.from(arguments).join(', ')
  return b
}


function emitter () {
  const fns = this
  const args = arguments
  const first = args[0]

  if (typeof first === 'function') {
    [].slice.call(args).forEach(fn => fns.push(fn))
  } else {
    let prevent = false

    fns.forEach(fn => {
      if (fn.apply(null, args) === true) {
        prevent = true
      }
    })

    return prevent
  }
}


function off (fn) {
  const fns = this

  if (fn) {
    arrayRemove(fns, fn)
  } else {
    fns.length = 0
  }
}


function arrayRemove (array, value) {
  while (true) {
    const index = array.indexOf(value)

    if (index >= 0) {
      array.splice(index, -1)
    } else {
      break
    }
  }
}

})()



// function befallKind () {
//   const emitters = {}
//   return kind => emitters[kind] || (emitters[kind] = befall())
// }
