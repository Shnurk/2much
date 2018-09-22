const isDev = global.isDev

const static = module.exports = {
  server: () => data.server,
  js: getBundlesJS,
  css: getBundlesCSS
}

var data = {
  server: [
    '/global.js',
    '/state/state.js',
    '/nav.js',

    '/lib/q/q.js',
    '/lib/q/q.attr.js',
    '/lib/q/q.html.js',

    '/skins/base/Brick/Brick.js',

    '/skins/skeleton/Footer/Footer.js',
    '/skins/skeleton/Header/Header.js',
    '/skins/skeleton/Layout/Layout.js',
    '/skins/skeleton/Page/Page.js',

    '/skins/common/about/about.js',
    '/skins/common/article/article.js',
    '/skins/common/articleCard/articleCard.js',
    '/skins/common/join/join.js',
    '/skins/common/modelCard/modelCard.js',
    '/skins/common/PhotoLoad/PhotoLoad.js',
    '/skins/common/DropZone/DropZone.js',
    '/skins/common/Contact/Contact.js',
    '/skins/common/News/News.js',
    '/skins/common/Slider/Slider.js',
    '/skins/common/Model/Model.js',
    '/skins/common/NewsItem/NewsItem.js',
    '/skins/common/Intro/Intro.js',

    '/units/pageBase.js',

    '/skins/admin/AdminMenu/AdminMenu.js',
    '/skins/admin/AdminLayout/AdminLayout.js',
    '/skins/admin/ModelPdf/ModelPdf.js',
    '/units/Uploader.js',
    '/units/AdminView.js'
  ],

  common: [
    '/global.js',
    '/state/state.js',
    '/nav.js',

    '/lib/q/q.js',
    '/lib/q/q.attr.js',
    '/lib/q/q.html.js',
    '/lib/befall.js',
    '/lib/dollarselector.js',
    '/lib/resumable/resumable.js',

    '/skins/skeleton/Footer/Footer.css',
    '/skins/skeleton/Header/Header.css',
    '/skins/skeleton/Layout/Layout.css',
    '/skins/skeleton/Layout/Layout_0.js',
    '/skins/skeleton/Page/Page.css',
    '/skins/common/News/News.css',
    '/skins/common/Slider/slider.css',
    '/skins/common/Slider/slider_logic.js',
    '/skins/common/model/model.css',
    '/skins/common/NewsItem/newsItem.css',
    '/skins/common/Intro/intro.css',
    '/skins/common/Intro/intro_0.js',

    '/skins/common/Contact/Contact.css',
    '/skins/common/about/about.css',
    '/skins/common/article/article.css',
    '/skins/common/articleCard/articleCard.css',
    '/skins/common/join/join.css',
    '/skins/common/join/Join_photoUpload.js',
    // '/skins/common/join/photo_upload_preview.js',
    '/skins/common/modelCard/modelCard.css',

    '/skins/common/PhotoLoad/PhotoLoad.css',
    '/skins/common/PhotoLoad/PhotoLoad.js',
    '/skins/common/PhotoLoad/PhotoLoad_0.js',
  ],

  admin: [
    '/lib/dragula.min.js',
    '/lib/dragula.min.css',

    '/skins/common/DropZone/DropZone.css',
    '/skins/admin/AdminLayout/AdminLayout.css',
    '/skins/admin/AdminMenu/AdminMenu.css',

    '/units/Uploader_0.js',
    '/units/AdminView_0.js'
  ],

  commonProd: [
    '/build/common.js',
    '/build/common.css?2'
  ],

  adminProd: [
    '/build/admin.js',
    '/build/admin.css'
  ]
}

function getBundlesJS (...bundles) {
  return getBundles(bundles).filter(isJS)
}

function getBundlesCSS (...bundles) {
  return getBundles(bundles).filter(isCSS)
}

function getBundles (bundles) {
  return bundles.reduce((result, bundle) => {
    isProd && (bundle = bundle + 'Prod')
    return result.concat(data[bundle])
  }, [])
}

function isJS (path) {
  return path.endsWith('.js')
}

function isCSS (path) {
  return path.endsWith('.css')
}
