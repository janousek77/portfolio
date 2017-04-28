'use strict';

(function(module) {
  const articleController = {};

  articleController.show = function() {
    $('.tab content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
