const express = require('express')
const path = require('node:path')

const app = express()

app.set("view engine", "ejs");

app.get('/', function (req, res) {


  //res.send('Hello World from Node/Express/Heroku')

  res.sendFile(path.join(__dirname,"index.html"));
    // res.send('hello ' + userName + ' from Node/Express/Heroku');
    res.send(`Hello ${userName} from Node/Heroku/Express with backticks!`);

})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));