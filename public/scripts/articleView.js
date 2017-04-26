'use strict';

const articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });
  $('.main-nav .tab:first').click();
};


articleView.initNewArticlePage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', articleView.create);
};

articleView.initIndexPage = function() {
  Article.all.forEach(function(article) {
    $('#articles').append(article.toHtml())
  });
  articleView.handleMainNav();
  articleView.setTeasers();
};
