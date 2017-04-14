'use strict';

var articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function(){
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  })
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.read-on').on('click', function(event){
    event.preventDefault();
    var $theLink = $(this);
    var $theArticleBody = $theLink.siblings('.article-body');
    $theArticleBody.children().show();
    $(this).hide()
  })
};

$(document).ready(function() {
  articleView.handleMainNav();
  articleView.setTeasers();
})
