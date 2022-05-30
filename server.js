const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/singlepage'));

app.get('/*', (req, res) => (
  res.sendFile(__dirname + '/dist/singlepage/index.html')
));

app.listen(PORT, ()=> {
  console.log('servidor executado na porta ' + PORT);
});
