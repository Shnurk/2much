global.isDev = true
global.isProd = false
const fs = require('fs')
const path = require('path')
const uglifyJS = require('uglify-es')
const CleanCSS = require('clean-css')
const cleanCSS = new CleanCSS()
const src = path.join(__dirname, '..', 'src')
const static = require(`${src}/static`)

;(function main () {
  build('common')
  build('admin')
  console.log('build succeeded')
})()

function build (bundleName) {
  const cssFiles = static.css(bundleName).map(p => path.join(src, p))
  const jsFiles = static.js(bundleName).map(p => path.join(src, p))
  const cssBundle = path.join(src, 'build', bundleName + '.css')
  const jsBundle = path.join(src, 'build', bundleName + '.js')
  buildCSS(cssFiles, cssBundle)
  buildJS(jsFiles, jsBundle)
}

function buildCSS (files, outputFile) {
  const css = concatFiles(files)
  const cssMini = minifyCSS(css)
  fs.writeFileSync(outputFile, cssMini)
}

function buildJS (files, outputFile) {
  const js = concatFiles(files, ';')
  const jsMini = minifyJS(js)
  fs.writeFileSync(outputFile, jsMini)
}

function minifyCSS (cssStr) {
  const { errors, styles } = cleanCSS.minify(cssStr)
  errors.length && console.error(errors)
  return styles
}

function minifyJS (jsStr) {
  const { error, code } = uglifyJS.minify(jsStr)
  error && console.error(error)
  return code
}

/**
 * files = Path[]
 */
function concatFiles (files, glue = '\n') {
  return files
    .map(f => fs.readFileSync(f, 'utf-8'))
    .join(glue)
}
