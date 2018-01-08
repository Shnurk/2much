/* global state */

Object.assign(state, {
  admin: {
    getMenu: () => s.admin.menu,
    setMenu: (v) => s.admin.menu = v,
  }
})
