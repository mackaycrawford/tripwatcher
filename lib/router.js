Router.route('/app', function () {
  this.render('app');
});

Router.route('/', function () {
  this.render('app');
});

Router.route('/detailview', function () {
  this.render('detailview');
});


