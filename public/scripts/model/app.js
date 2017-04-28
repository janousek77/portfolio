'use strict';

(function(module){

  function Article (rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    let template = Handlebars.compile($('#article-template').text());
    return template(this);
  };

  Article.fetchAll = function() {
    $.getJSON('data/projectData.json').then(function(rawData){
      rawData.forEach((ele) => {
        Article.all.push(new Article(ele));
      })
      articleView.initIndexPage();
    });
  };

  module.Article = Article;
}(window));
