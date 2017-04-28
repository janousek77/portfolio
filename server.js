'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3100;

app.use(express.static('./public'));

app.get('/', function(request, response){
  response.sendFile('public/index.html', {root: '.'});
});

app.get('/*', function(request, response){
  response.status(404).sendFile('public/404.html', {root: '.'});
});

app.listen(port, function(){
  console.log(`our server is running on port: ${port}`);
});
