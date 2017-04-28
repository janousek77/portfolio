'use strict';

(function(module){
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
    rawData.sort((a,b) => {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    rawData.forEach((ele) => {
      Article.all.push(new Article(ele));
    })
  }

  Article.fetchAll = function() {
    $.getJSON('data/projectData.json').then(function(rawData){
      Article.loadAll(rawData);
      articleView.initIndexPage();
    });
  };

  module.Article = Article;
}(window));
