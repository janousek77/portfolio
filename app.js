'use strict';

var projectArray = [];

var projectData = [
  {
    title:       'Bus Mall',
    image:       'images/bus.png',
    link:        'https://janousek77.github.io/bus-mall/',
    deployedOn:  '2015-11-05'
  },
  {
    title:       'Cookie Store',
    image:       'images/cookie.png',
    link:        'https://janousek77.github.io/cookie-stand/',
    deployedOn:  '2015-11-05'
  },
  {
    title:       'Project Animal Rescue',
    image:       'images/par.png',
    link:        'https://janousek77.github.io/PAR/',
    deployedOn:  '2015-11-05'
  },
];

function Project (obj) {
  this.title = obj.title;
  this.link = obj.link;
  this.image = obj.image;
  this.deployedOn = obj.deployedOn
}

Project.prototype.toHtml = function() {
  var $newprojectData = $('').clone();
  $newprojectData.removeClass('');


  if (!this.publishedOn) $newprojectData.addClass('');
  $newprojectData.find('address a').html(this.author);
  $newprojectData.find('address a').attr('href', this.authorUrl);
  $newprojectData.find('h1').html(this.title);
  $newprojectData.data('category', this.category);
  $newprojectData.find('.article-body').html(this.body);
  $newprojectData.find('time datetime').html(this.publishedOn);

  $newprojectData.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newprojectData.append('<hr>');
  return $newprojectData;
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(articleObject) {
  projectArray.push(new Project(articleObject));
});

projectArray.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
