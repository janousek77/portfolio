'use strict';

(function(module){
  const articleView = {};

  articleView.initIndexPage = function() {
    Article.all.forEach((article) => {
      $('#articles').append(article.toHtml())
    });
  };

  Article.fetchAll();
  module.articleView = articleView;
}(window));
