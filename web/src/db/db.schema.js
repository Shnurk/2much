Article {
  _id: ID
  title: String
  models: Person[]
  photos: URL[]
  date: {
    day: Number // 1..31
    month: Number // 1..12
    year: Number
  }
}

Person {
  _id: ID
  name: String
  slug: String // autogenerated
  gender: 0/1
  instagram: URL
  book: Photo[]
  polaroids: Photo[]
  params: {
    height: Number // cm
    chest: Number // cm
    waist: Number // cm
    hips: Number // cm
    shoe: Number // rus size
    hair: String
    eyes: String
  }
}

Photo {
  _id: ID
  fileName: String
  ratio: Number
}

