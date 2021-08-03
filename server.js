const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index.pug'))
app.get('/fotos', (req, res) => res.render('fotos.pug'))

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
