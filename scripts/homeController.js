(function(module) {
  var homeController = {};

  homeController.index = function() {
    repos.repoRequest(repoView.index);
    $('main > section').hide();
    $('#home').show();
  };

  module.aboutController = aboutController;
}) (window);