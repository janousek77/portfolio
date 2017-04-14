'use strict';

var articles = [];

var projectData = [
  {
    title:       'Project Animal Rescue',
    image:       'images/par.png',
    link:        'https://janousek77.github.io/PAR/',
    deployedOn:  '2017-03-31',
    body:        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {
    title:       'Bus Mall',
    image:       'images/bus.png',
    link:        'https://janousek77.github.io/bus-mall/',
    deployedOn:  '2017-03-24',
    body:        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title:       'Cookie Store',
    image:       'images/cookie.png',
    link:        'https://janousek77.github.io/cookie-stand/',
    deployedOn:  '2017-03-17',
    body:        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

function Article (obj) {
  this.title = obj.title;
  this.link = obj.link;
  this.image = obj.image;
  this.deployedOn = obj.deployedOn;
  this.body = obj.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  if (!this.deployedOn) $newArticle.addClass('draft');
  $newArticle.find('h2').text(this.title);
  $newArticle.find('.article-body').text(this.body);
  $newArticle.find('img').attr('src', this.image);
  $newArticle.find('a').attr('href', this.link);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.deployedOn))/60/60/24/1000) + ' days ago');
  return $newArticle;
};

projectData.sort(function(a,b) {
  return (new Date(b.deployedOn)) - (new Date(a.deployedOn));
});

projectData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
