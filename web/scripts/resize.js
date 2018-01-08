const fs = require('fs')
const sharp = require('sharp')

const WIDTH_SMALL = 900
const WIDTH_LARGE = 1200
const OPTS_SMALL = { quality: 90, progressive: true }
const OPTS_LARGE = { quality: 90, progressive: true }

;(async () => {
  const originals = getOriginals()
  console.log(originals.length);

  originals.forEach(async filename => {
    try {
      await toSmall(filename)
    } catch (err) {
      console.log(err)
    }
  })
})()

function getOriginals () {
  return fs.readdirSync('./photos/originals').filter(p => p !== '.DS_Store' && p !== '.gitkeep')
}

async function toSmall (filename) {
  try {
    await sharp(`photos/originals/${filename}`)
      .resize(WIDTH_SMALL)
      .jpeg(OPTS_SMALL)
      .toFile(`photos/small/${filename}.jpg`)
    console.log(filename);
  } catch (err) {
    console.log(err);
  }
}

async function toLarge (filename) {
  await sharp(`photos/originals/${filename}`)
    .resize(WIDTH_LARGE)
    .jpeg(OPTS_LARGE)
    .toFile(`photos/large/${filename}.jpg`)
}
