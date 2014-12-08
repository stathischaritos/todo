Template.add.rendered = function(){
	$('#logo').html('<span id="home" class= "glyphicon glyphicon-arrow-left"></span>');
}

Template.add.events({
	'click #submit' : function(){
		new_item = {
			"type" : 'tret',
			"comment" : $('#comment').val(),
			"geolocation" : delivery_from.center,
			"predicted_expense" : $('#spend').val(),
			"expected_return" : $('#gain').val(),
			"timeframe":{
				"start": $('#time_start').val(),
				"end": $('#time_end').val(),
				"repeat": $('input[name="inlineRadioOptions"]:checked').val()
			}

		};
		
		Items.insert(new_item,function(){
			console.log("item added!");
		});
	},
	'click #timeline_form':function(){
		var $new = $('#timeline_form_div');
		$new.show('slow');
	},
	'click #geolocation_form':function(){
		var $new = $('#geolocation_form_div');
		$new.show('slow',function(){
			google.maps.event.trigger(from_map, 'resize');
		});
		
	},
	'click #budget_form':function(){
		var $new = $('#budget_form_div');
		$new.show('slow');
	}
})


// Template.add.rendered = function(){

//   $('#timeline_form_div').css('opacity' ,'0');
//   $('#timeline_form_div').css('height' ,'0px');

//   $('#geolocation_form_div').css('opacity' ,'0');
//   $('#geolocation_form_div').css('height' ,'0px');

//   $('#budget_form_div').css('opacity' ,'0');
//   $('#budget_form_div').css('height' ,'0px');
  
// };



Template.geolocation_form.rendered = function(){

  //From Picker
  var from_position = new google.maps.LatLng(52.374611, 4.899818)
  var from_mapOptions = {
      zoom: 12,
      center: from_position,
      disableDefaultUI: true
  };
  delivery_from_map = new google.maps.Map(this.find('*#from_map'), from_mapOptions);
  delivery_from_marker = new google.maps.Marker({ position: from_position ,  map: delivery_from_map ,draggable:true});
  delivery_from = {
    center: {
      lat:from_position.k,
      lng:from_position.B
    }
  };
  

  google.maps.event.addListener(delivery_from_marker, 'drag', function(event) {
    delivery_from_marker.setPosition(event.latLng);
    delivery_from.center = {
      lat:event.latLng.k,
      lng:event.latLng.B
    };
    
  });

  google.maps.event.addListener(delivery_from_map, 'click', function(event) {
    
    delivery_from_marker.setPosition(event.latLng);
    delivery_from.center = {
      lat:event.latLng.k,
      lng:event.latLng.B
    };
    
  });


  
};

