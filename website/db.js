Texts
  id: String
  name: 'about'/'contactPhone'/'contactName'
  text: String

Models
  id: String
  name: String
  slug: String
  gender: 0/1
  params: {
    height: Number // cm
    chest: Number // cm
    waist: Number // cm
    hips: Number // cm
    shoe: Number // rus
    hair: String
    eyes: String
  }
  instagram: URL
  book: URL[]
  polaroids: URL[]

Articles
  id: String
  title: String
  modelId: String
  date: {
    day: Number // 1..31
    month: Number // 1..12
    year: Number
  }
  photos: URL[]
  category: null/'editorials'/'campaigns'/'shows'

Applications
  id: String
  name: String
  city: String
  phone: String
  mail: String
  social: String
  gender: 0/1
  params: {
    age: Number
    height: Number // cm
    chest: Number // cm
    waist: Number // cm
    hips: Number // cm
    shoe: Number // rus
  }
  photos: URL[]
