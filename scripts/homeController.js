(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('main > section', '.portfolio-header').hide();
    $('#home').show();
  };

  module.homeController = homeController;
}) (window);
