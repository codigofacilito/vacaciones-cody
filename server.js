const { writeFileSync } = require('fs')
const { join } = require('path')
const express = require('express')
const sass = require('sass')
const app = express()
const port = 3000

app.use('/', express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index.pug'))
app.get('/fotos', (req, res) => res.render('fotos.pug'))

sass.renderSync({
  file: 'styles/index.scss',
  outFile: 'index.css'
})

sass.render({
  file: 'styles/index.scss',
  outputStyle: 'compressed'
}, function (error, result) { // node-style callback from v3.0.0 onwards
  if (!error) writeFileSync('public/index.css', result.css)
})

app.listen(port, () => console.log(`Server started on port ${port}`))
