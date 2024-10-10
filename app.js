const express = require('express')
const app = express()
const taskRoutes = require('./routes/tasks')

// need this if we need to access req.body 
app.use(express.json())

app.get('/hello', (req, res) => res.send('Hello World!'))
app.use('/api/v1/tasks', taskRoutes)

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))

