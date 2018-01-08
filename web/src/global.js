if (this.window) {
  window.global = window
}

Object.assign(global, {
  g: global,
  skin: {},
  unit: {}
})
