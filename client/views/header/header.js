
Template.header.events ({
	'click .glyphicon': function(event){
		Router.go(event.currentTarget.id);
		
	}
});
