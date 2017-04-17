'use strict';

var articles = [];

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
  $newArticle.find('.article-body').html(this.body);
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
