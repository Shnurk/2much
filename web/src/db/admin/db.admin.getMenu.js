db.admin.getMenu = getAdminMenu

function getAdminMenu () {
  return adminMenu
}

var adminMenu = [
  { title: 'Models', url: '/admin/models' },
  { title: 'News', url: '/admin/articles' },
]
