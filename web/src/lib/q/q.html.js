/* global q */

;(() => {

Object.assign(q, {
  html
})


// TODO: escape html
function html (strings, ...values) {
  let res = ''

  strings.forEach((s, i) => {
    let v = values[i]

    if (Array.isArray(v)) {
      v = v.join('')
    }

    res += s + (v || v === 0 ? v : '')
  })

  return res
}

})()
