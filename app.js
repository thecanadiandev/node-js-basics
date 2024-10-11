
const express = require('express')
const app = express()
const taskRoutes = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found')

// static files
app.use(express.static('./public'))

// need this if we need to access req.body 
app.use(express.json())

app.use('/api/v1/tasks', taskRoutes)

app.use(notFound)

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`App listening on port ${port}!`))
  } catch (error) {
    console.log(error)
  }
}

start();
