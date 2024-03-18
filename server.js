const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.static(__dirname + '/'));

// GET method route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  })
  
// POST method route
app.post('/', (req, res) => {
    res.send('welcome, ' + req.body.firstname);
})

app.listen(3000, () => console.log("Server running..."));