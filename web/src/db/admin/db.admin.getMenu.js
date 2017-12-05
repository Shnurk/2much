db.admin.getMenu = getAdminMenu

function getAdminMenu () {
  return adminMenu
}

var adminMenu = [
  { title: 'Модели', url: '/admin/models' },
  { title: 'Новости', url: '/admin/articles' },
]
