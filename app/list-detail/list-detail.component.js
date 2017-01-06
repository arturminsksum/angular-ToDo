angular.
	module('listDetail').
	component('listDetail', {
		templateUrl: 'list-detail/list-detail.template.html',
		controller: function listDetailController() {

		  this.removeList = function () {
		    this.onDelete({list: this.list});
		  };	

		},

		bindings: {
	    list: '<',
	    lists: '<',
	    onDelete: '&'
	  }
	});