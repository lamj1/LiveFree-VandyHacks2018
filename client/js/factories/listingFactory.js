angular.module('events', []).factory('Events', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://www.eventbrite.com/developer/v3/events/search');
    },
	
	create: function(listing) {
	  return $http.post('http://localhost:8080/api/listings', listing);
    }, 

  };

  return methods;
});
