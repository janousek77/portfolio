'use strict';

var projectArray = [];

function Project (title, link, image) {
  this.title = title;
  this.link = link;
  this.image = image;
  projectArray.push(this);
}

var busMall = new Project('Bus Mall', 'https://janousek77.github.io/bus-mall/', 'images/bus.png');
var cookieStore = new Project('Cookie Store', 'https://janousek77.github.io/cookie-stand/', 'images/cookie.png');
var par = new Project('Project Animal Rescue', 'https://janousek77.github.io/PAR/', 'images/par.png');

for (var i = 0; i < projectArray.length; i++) {
  projectArray[i]
}
