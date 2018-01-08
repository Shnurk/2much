(() => {

const $ = global.skin.Brick.render
const AdminMenu = global.skin.AdminMenu

global.skin.AdminLayout = {
  render: renderAdminLayout
}

/**
 * props = {
 *   menu: type_AdminMenu
 * }
 */
function renderAdminLayout (props, children) {
  return (
    $('AdminLayout', [
      $('AdminLayout__sidebar', (
        AdminMenu.render({ menu: props.menu })
      )),
      $('AdminLayout__content', (
        children
      ))
    ])
  )
}

})()
