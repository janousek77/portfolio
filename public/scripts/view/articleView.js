'use strict';

(function(module){
  const articleView = {};

  articleView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn();
    });

    $('.main-nav .tab:first').click();
  };

  articleView.initIndexPage = function() {
    Article.all.forEach((article) => {
      $('#articles').append(article.toHtml())
    });
    articleView.handleMainNav();
  };

  module.articleView = articleView;
}(window));
