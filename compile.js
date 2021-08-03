const { readdir, writeFileSync } = require('fs')
const { exec } = require('child_process')
const { compileFile } = require('pug')
const { join } = require('path')

const viewsDirectory = join(__dirname, 'views')
const publicDirectory = join(__dirname, 'public')

readdir(viewsDirectory, (error, files) => {
  if (error) return
  files.forEach(file => {
    var array = file.split('.')
    if (array.length !== 2) return
    if (array[1] !== 'pug') return
    var name = array[0]
    const compiledFunction = compileFile(`views/${name}.pug`)
    const compiledHTML = compiledFunction({ environment: 'Production' })
    writeFileSync(join(publicDirectory, `${name}.html`), compiledHTML)
  })
})
