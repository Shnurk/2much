const fs = require('fs')
const path = require('path')
const nanoid = require('nanoid')
const db = requireSrc('/db')
const resumableNode = requireSrc('/lib/resumable-node')

const UploadCtrl = module.exports = {
  manage (app) {
    app.post('/upload', upload)
    app.get('/upload', statusCheck)
  }
}

const config = {
  uploadFolder: './uploads'
}

const UPLOADS = config.uploadFolder
const resumable = resumableNode(config.uploadFolder)

function upload (req, res) {
  resumable.post(req, async (status, fileName, reqFileName) => {
    if (status === 'done') {
      const ext = path.extname(fileName)
      const newFileName = nanoid() + ext
      const newFilePath = path.join(UPLOADS, newFileName)

      const stream = fs.createWriteStream(newFilePath)
      resumable.write(reqFileName, stream)

      stream.on('finish', async () => {
        resumable.clean(reqFileName)
        const photoId = await db.photo.create(newFilePath)
        res.status(200)
        res.send({
          id: photoId,
          photo: `/media/small/${newFileName}`
        })
      })
    } else {
      res.send('0')
    }
  })
}

function statusCheck (req, res) {
  resumable.get(req, status => {
    const statusCode = status === 'found' ? 200 : 404
    res.status(statusCode)
    res.send(status)
  })
}
