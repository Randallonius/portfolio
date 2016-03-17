page('/', homeController.index);

page('/portfolio', portfolioController.loadData, portfolioController.index);

page('/about', aboutController.index);

page();
