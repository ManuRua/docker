const express = require('express')
const app = express()
const port = 3000

app.set('port', port)

app.get('/:nombre', (req, res) => {
  res.send(`Hola ${req.params.nombre}!`)
})

app.listen(app.get('port'), (err) => {
  console.log(`Server running on port ${app.get('port')}`)
})
