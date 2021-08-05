const express = require('express')
const { join } = require('path')
const app = express()
const port = 3000

app.use('/vacaciones-cody', express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(port, () => console.log(`Server started on port ${port}`))
