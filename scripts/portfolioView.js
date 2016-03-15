(function (module) {

  var portfolioView = {};

  Sites.htmlFrom = function (sites) {
    return sites.map(function(a){
      return a.toHtml();
    });
  };

  portfolioView.initIndexPage = function(sitesData) {
    var sites = Sites.htmlFrom(sitesData);
    $('#portfolio').empty();
    $('#portfolio').append(sites);
  };

  module.portfolioView = portfolioView;
}) (window);
