'use strict';

(function(module) {
  const aboutController = {};

  aboutController.show = function() {
    $('.tab-content').hide();
    $('.top').fadeIn();
    console.log(this);
  };

  module.aboutController = aboutController;
})(window);
