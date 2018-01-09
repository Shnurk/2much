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
      <a class="AdminMenu__logout" href="/admin/logout">
        Log out
      </a>
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
