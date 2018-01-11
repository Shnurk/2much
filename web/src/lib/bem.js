(() => {

window.bem = {
  class: createClass
}

function createClass (className, mods = {}) {
  if (!isObject(mods)) {
    console.error('[bem] mods should be object, but given', mods)
    return className
  }

  const classes = [ className ]

  Object.keys(mods).forEach(k => {
    const v = mods[k]

    if (v === true) {
      classes.push(`${className}_${k}`)
    } else if (typeof v === 'number' || (typeof v === 'string' && v)) {
      classes.push(`${className}_${k}_${v}`)
    }
  })

  return classes.join(' ')
}

function isObject (any) {
  return Object.prototype.toString.call(any) === '[object Object]'
}

})()
