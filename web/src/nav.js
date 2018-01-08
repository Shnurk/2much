;(() => {

global.nav = {
  urlFor: {

  },

  page: {

  },

  generateUrl,
  parseUrl,
}

const urlFor = {
  main: '/',
  about: '/about',
  contact: '/contact',
  join: '/join',
  news: '/news',
  article: (articleId) => `/news/${articleId}`,
  modelsList: (gender) => `/${genderSlug(gender)}`,
  model: (gender, modelId) => `/${genderSlug(gender)}/${modelId}`
}

const page = {
  main: { type: 'main' },
  about: { type: 'about' },
  contact: { type: 'contact' },
  join: { type: 'join' },
  news: { type: 'news' },
  article: (articleId) => ({ type: 'article', articleId }),
  modelsList: (gender) => ({ type: 'modelsList', gender }),
  model: (gender, modelId) => ({ type: 'model', gender, modelId }),
  notFound: { type: 'notFound' }
}


function generateUrl (page) {
  if (
    page.type === 'main' ||
    page.type === 'about' ||
    page.type === 'join'
  ) {
    return urlFor[page.type]
  }
}


function parseUrl (url) {
  const [ pathname, queryStr ] = url.split('?')
  const path = pathname.slice(1).split('/')
  const [ p0, p1, p2 ] = path
  // const query = parseQueryStr(queryStr)

  return (
    !p0 ? (
      page.main
    ) :

    p0 === 'about' ? (
      !p1 ? page.about :
      page.notFound
    ) :

    p0 === 'contact' ? (
      !p1 ? page.contact :
      page.notFound
    ) :

    p0 === 'join' ? (
      !p1 ? page.join :
      page.notFound
    ) :

    p0 === 'news' ? (
      !p1 ? page.news :
      !p2 ? page.article(p1) :
      page.notFound
    ) :

    p0 === 'men' || p0 === 'women' ? (
      !p1 ? page.modelsList(slugToGender(p0)) :
      !p2 ? page.model(slugToGender(p0), p1) :
      page.notFound
    ) :

    page.notFound
  )
}


function slugToGender (slug) {
  return slug === 'men' ? 1 : 0
}


function generateUrl (page) {

}

})()
