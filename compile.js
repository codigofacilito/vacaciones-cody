const { readdir, lstatSync, writeFileSync } = require('fs')
const { compileFile } = require('pug')
const { join } = require('path')
const sass = require('sass')

const viewsDirectory = join(__dirname, 'views')
const publicDirectory = join(__dirname, 'public')

readdir(viewsDirectory, (error, files) => {
  if (error) return
  files.forEach(file => {
    if (lstatSync(file).isDirectory()) return
    const array = file.split('.')
    if (array.length !== 2) return
    if (array[1] !== 'pug') return
    const name = array[0]
    const compiledFunction = compileFile(`views/${name}.pug`)
    const compiledHTML = compiledFunction({ environment: 'Production' })
    writeFileSync(join(publicDirectory, `${name}.html`), compiledHTML)
  })
})

sass.render({
  file: 'styles/index.scss',
  outputStyle: 'compressed'
}, (error, result) => {
  if (!error) writeFileSync('public/index.css', result.css)
})
