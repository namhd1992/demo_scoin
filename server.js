const express = require('express');
const app = express();
// const port = process.env.PORT || 3004;
const port = process.env.PORT || 3005;
const path = require('path');
const fs = require('fs')


app.get('/', function(request, response) {
  const filePath = path.resolve(__dirname, './html', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  });
});


app.use(express.static(path.resolve(__dirname, './html')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './html', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));