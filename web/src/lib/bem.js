(() => {

window.bem = {
  class: createClass
}

function createClass (className, mods = {}) {
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

})()
