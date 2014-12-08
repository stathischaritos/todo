Template.home.rendered = function(){
	$('#logo').html('TODO');
};


Template.home.helpers({
	"items": function(){
		return Items.find({'type':'tret'}).fetch();
	}
});

