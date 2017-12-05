(() => {

g.skin.AdminMenu = {
  render: renderAdminMenu
}


/**
 * props = {
 *   menu: type_AdminMenu
 * }
 */
function renderAdminMenu (props) {
  return q.html`
    <div class="AdminMenu">
      ${props.menu.map(renderItem)}
    </div>
  `
}

function renderItem (item) {
  return q.html`
    <a class="AdminMenu__item" href="${item.url}">
      ${item.title}
    </a>
  `
}

})()
