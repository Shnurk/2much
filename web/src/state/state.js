;(() => {

global.state = {
  _raw: {},
  initEmpty,
  setPage,
  addModel,
  addModels,
  addArticle,
  setMaleList,
  setFemaleList,
  setNewsList,

  getPage,
  getMaleModels,
  getFemaleModels
}


let s = state._raw


function initEmpty () {
  state._raw = {
    page: {},
    models: {},
    articles: {},
    male: [],
    female: [],
    news: []
    // admin: {
    //   menu: [
    //     { url, title, active }
    //     ...
    //   ],
    // }
  }
}

setPage: (v) => safeSet('s.page', v)
getPage: (v) => s.page

function setPage (page) {
  s.page = page
}


function addModel (model) {
  s.models[model.id] = model
}


function addModels (models) {
  models.forEach(addModel)
}


function addArticle (article) {
  s.articles[article.id] = article
}


function setMaleList (maleList) {
  s.male = maleList
}


function setFemaleList (femaleList) {
  s.female = femaleList
}


function setNewsList (newsList) {
  s.news = newsList
}


function getPage () {
  return s.page
}


function getMaleModels () {
  return [
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/man1.jpg',
      height: { cm: 189, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Andrew Z',
      photo: 'http://localhost:8000/images/man2.jpg',
      height: { cm: 178, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Johny Y',
      photo: 'http://localhost:8000/images/man3.jpg',
      height: { cm: 198, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Sergey K',
      photo: 'http://localhost:8000/images/man4.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/man5.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/man6.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/man7.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/man8.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    }
  ]
}


function getFemaleModels () {
  return [
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/woman1.jpg',
      height: { cm: 189, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Andrew Z',
      photo: 'http://localhost:8000/images/woman2.jpg',
      height: { cm: 178, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Johny Y',
      photo: 'http://localhost:8000/images/woman3.jpg',
      height: { cm: 198, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Sergey K',
      photo: 'http://localhost:8000/images/woman4.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/woman5.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/woman6.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/woman7.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    },
    {
      url: '/',
      name: 'Marko Polo',
      photo: 'http://localhost:8000/images/woman8.jpg',
      height: { cm: 10, inch: `5' 9.5"` },
      chest: { cm: 10, inch: `33"` },
      waist: { cm: 10, inch: `24.5"` },
      hips: { cm: 10, inch: `35.5"` },
    }
  ]
}

})()
