const express = require('express')
const path = require('node:path')

const app = express()

app.get('/', function (req, res) {


  //res.send('Hello World from Node/Express/Heroku')

  res.sendFile(
    path.join(
      __dirname,
     "index.html"
      )
    );

})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));