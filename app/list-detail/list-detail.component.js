angular.
	module('listDetail').
	component('listDetail', {
		templateUrl: 'list-detail/list-detail.template.html',
		controller: function listDetailController() {
		},
		bindings: {
	    list: '<',
	    onDelete: '&'
	  }
	});