const isDev = global.isDev

const static = module.exports = {
  getServer,
  getCommonJS,
  getCommonCSS,
  getAdminJS,
  getAdminCSS
}

const server = [
  '/global.js',
  '/state/state.js',
  '/nav.js',

  '/lib/q/q.js',
  '/lib/q/q.attr.js',
  '/lib/q/q.html.js',

  '/skins/skeleton/footer/footer.js',
  '/skins/skeleton/header/header.js',
  '/skins/skeleton/layout/layout.js',
  '/skins/skeleton/page/page.js',

  '/skins/common/about/about.js',
  '/skins/common/article/article.js',
  '/skins/common/articleCard/articleCard.js',
  '/skins/common/join/join.js',
  '/skins/common/modelCard/modelCard.js',
  '/skins/common/PhotoLoad/PhotoLoad.js',
  '/skins/common/DropZone/DropZone.js',

  '/units/pageBase.js',

  '/skins/admin/AdminMenu/AdminMenu.js',
  '/skins/admin/AdminLayout/AdminLayout.js',
  '/units/Uploader.js',
  '/units/AdminView.js'
]

const common = [
  '/global.js',
  '/state/state.js',
  '/nav.js',

  '/lib/q/q.js',
  '/lib/q/q.attr.js',
  '/lib/q/q.html.js',
  '/lib/befall.js',
  '/lib/dollarselector.js',
  '/lib/resumable/resumable.js',

  '/skins/skeleton/footer/footer.css',
  '/skins/skeleton/header/header.css',
  '/skins/skeleton/layout/layout.css',
  '/skins/skeleton/page/page.css',

  '/skins/common/about/about.css',
  '/skins/common/article/article.css',
  '/skins/common/articleCard/articleCard.css',
  '/skins/common/join/join.css',
  '/skins/common/modelCard/modelCard.css',
]

const admin = [
  '/skins/common/PhotoLoad/PhotoLoad.css',
  '/skins/common/PhotoLoad/PhotoLoad.js',
  '/skins/common/PhotoLoad/PhotoLoad_0.js',
  '/skins/common/DropZone/DropZone.css',
  '/skins/admin/AdminLayout/AdminLayout.css',
  '/skins/admin/AdminMenu/AdminMenu.css',

  '/units/Uploader_0.js',
  '/units/AdminView_0.js'
]

common.prod = [
  '/build/common.js',
  '/build/common.css'
]

admin.prod = [
  '/build/admin.js',
  '/build/admin.css'
]

function getServer () {
  return server
}

function getCommonJS () {
  return (isDev ? common : common.prod).filter(js)
}

function getCommonCSS () {
  return (isDev ? common : common.prod).filter(css)
}

function getAdminJS () {
  return (isDev ? admin : admin.prod).filter(js)
}

function getAdminCSS () {
  return (isDev ? admin : admin.prod).filter(css)
}

function js (path) {
  return path.endsWith('.js')
}

function css (path) {
  return path.endsWith('.css')
}
