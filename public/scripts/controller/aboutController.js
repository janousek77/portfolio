'use strict';

(function(module) {
  const aboutController = {};

  aboutController.show = function() {
    $('.tab-content').hide();
    $('.top').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
