angular.
	module('listDetail').
	component('listDetail', {
		templateUrl: 'list-detail/list-detail.template.html',
		controller: function listDetailController() {

	  this.createCard = function () {	  	
	    this.onCreate({cardDescription: this.cardDescription});
	    this.cardDescription = '';
	  };		

		},
		bindings: {
	    list: '<',
	    onDelete: '&',
	    onGet: '&',
	    onCreate: '&'
	  }
	});