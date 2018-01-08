Layout
  render
  setContent

model.setPage





state.onPageChange (prevPage, page) {
  App.setContent(App.buildContent(page))
}

onLinkClick (url) => {
  const page = nav.urlToPage(url)
  state.setPage(page)
}

state {
  page: {
    type: main/models/model/articles/article/about/contact/join

    // model
    modelId

    // article
    articleId
  }


  const about = state.getAbout().texts

  db.models.getAll()
  db.articles.getAll()
  db.getContact()
  db.getAbout()
  db.getJoin()

  state.setModels(db.models.getAll())
  state.setArticles(db.articles.getAll())
  state.setContact(db.getContact())
  state.setAbout(db.getAbout())

  join: {
    texts: {
      title
      description
      name
      city
      phone
      mail
      social
      gender
      height
      chest
      age
      waist
      hips
      shoe
      submit
      keepInMindTitle
      keepInMindItems: []
    }
  }

  models: [
    {
      id
      ...
    }
  ]

  articles: [
    {
      id
      ...
    }
  ]
}

units/
  App/

views/
  About/
  Contact/
  Header/
  Join/
  Layout/
