const express = require('express');
const app = express();
var fs = require("fs");

const port = 8000;
let allNames = [];

app.use(express.static('app'));

app.get('/api/names', (req, res) => {  
  if (!allNames.length) {
    var contents = fs.readFileSync("server_data/names.json");
    allNames = JSON.parse(contents);
  }     
  let text = req.query.startsWith ? req.query.startsWith.toLowerCase() : '';
  console.log(text);
  let fitNames = allNames.filter(n => n.toLowerCase().startsWith(text));
  res.send(fitNames);
});
app.listen(port, () => console.log(`app listening on port ${port}...`));