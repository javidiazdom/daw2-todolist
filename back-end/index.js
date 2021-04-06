const express = require('express')
const app = express()
const port = 4001

app.get('/', (req,  res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Todolist backend listening at http://localhost:${port}🎛`)
})