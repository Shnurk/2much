state = {
  page: oneOf([
    {
      type: 'admin'
      section: models/articles
    }
  ])

  admin: {
    models: [
      {
        book: photoId[]
        polaroids: photoId[]
      }
    ]
  }
}
