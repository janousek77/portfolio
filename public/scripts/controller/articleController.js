'use strict';

(function(module) {
  const articleController = {};

  articleController.show = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
    console.log(this);
  };

  module.articleController = articleController;
})(window);
