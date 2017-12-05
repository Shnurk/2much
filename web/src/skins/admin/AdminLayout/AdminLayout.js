(() => {

const AdminMenu = g.skin.AdminMenu

g.skin.AdminLayout = {
  render: renderAdminLayout
}


/**
 * props = {
 *   menu: type_AdminMenu
 * }
 */
function renderAdminLayout (props, children) {
  return q.html`
    <div class="AdminLayout">
      <div class="AdminLayout__sidebar">
        ${AdminMenu.render({ menu: props.menu })}
      </div>
      <div class="AdminLayout__content">
        ${children}
      </div>
    </div>
  `
}

})()
