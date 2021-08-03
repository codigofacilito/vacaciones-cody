const express = require('express')
const port = 3000
const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/hello', (req, res) => {
  res.render('hello.pug')
})

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
