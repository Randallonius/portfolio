(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('header', 'main > section', '.portfolio-header').hide();
    $('#portfolio').hide();
    $('#home').show();
  };

  module.homeController = homeController;
}) (window);
