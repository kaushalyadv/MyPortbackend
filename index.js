const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();



const app = express()
const port = process.env.NODE_ENV || 5000

app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: ['POST'],
    credentials: true,

}
));


app.use(express.json())

// awilable routes

app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use(express.static("client/build"));



app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})

