
const express = require('express')
const app = express()
const taskRoutes = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()

// need this if we need to access req.body 
app.use(express.json())

app.get('/hello', (req, res) => res.send('Hello World!'))
app.use('/api/v1/tasks', taskRoutes)

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
