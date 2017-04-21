const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(request, response){
  response.sendFile('public/index.html', {root: '.'});
});

app.use(express.static('./public'));

app.listen(port, function(){
  console.log(`our server is running on port: ${port}`);
});
