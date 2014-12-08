if (Meteor.isClient) {
    Meteor.disconnect();
}

Router.configure({
	notFoundTemplate : 'home',
    yieldTemplates : {
      'header' : {to: 'header'},
      'footer' : {to: 'footer'}
    },
    layoutTemplate : 'layout'
  });


Router.map(function() {
    this.route('home', { path: '/' } );
    this.route('add', { path: '/add' });
    this.route('settings', { path: '/settings' });
     this.route('wallet', { path: '/wallet' });
});
