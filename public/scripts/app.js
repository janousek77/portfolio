'use strict';

function Article (rawDataObj) {
  this.title = rawDataObj.title;
  this.link = rawDataObj.link;
  this.image = rawDataObj.image;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}
Article.all = [];

Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());
  return template(this);
};

Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
}

Article.fetchAll = function() {
  if (localStorage.rawData) {
    Article.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndexPage();
  } else {
    $.getJSON('data/projectData.json').then(function(rawData){
      Article.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      Article.initIndexPage();
    });
  }
};
