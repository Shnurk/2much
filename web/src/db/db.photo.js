const path = require('path')
const sharp = require('sharp')
const sizeOf = require('image-size')
const db = require('./db')
const Photo = db._collections.Photo

Object.assign(db, {
  photo: {
    create: createPhoto,
    getById,
    getByIds,
  }
})

const config = {
  small: {
    folder: './media/small',
    width: 900,
    height: 900,
    quality: 92
  },

  large: {
    folder: './media/large',
    width: 1400,
    height: 1400,
    quality: 92
  }
}

async function createPhoto (filePath) {
  const fileName = path.basename(filePath)
  const size = sizeOf(filePath)
  const width = size.width
  const height = size.height
  const ratio = Number((width / height).toFixed(3))

  // Create small and large versions
  await Promise.all(
    Object.values(config).map(async props => {
      const jpegOpts = { quality: props.quality, progressive: true }
      const detination = path.join(props.folder, fileName)

      // Resize + process
      if (width > props.width || height > props.height) {
        await sharp(filePath)
          .resize(props.width, props.height)
          .max()
          .jpeg(jpegOpts)
          .toFile(detination)

      // Just process
      } else {
        await sharp(filePath)
          .jpeg(jpegOpts)
          .toFile(detination)
      }
    })
  )

  const result = await Photo.insert({ fileName, ratio })
  return result.ops[0]._id
}

async function getById (id) {
  return await Photo.findOne({ _id: id })
}

async function getByIds (ids) {
  const photos = []
  for (let id of ids) {
    const photo = await Photo.findOne({ _id: id })
    if (photo) {
      photos.push(photo)
    }
  }
  return photos
}
