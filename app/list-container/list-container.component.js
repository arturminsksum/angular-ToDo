angular.
	module('myApp').
	component('listContainer', {
		templateUrl: 'list-container/list-container.template.html',
		controller: function listContainerController() {
	    this.lists = [
	      {
	        id: 1,
	        listName: 'ToDo'
	      },
	      {
	        id: 2,
	        listName: 'Doing'
	      },
	      {
	        id:3,
	        listName: 'Done'
	      }
	    ];
	    this.addList = function() {
	    	this.lists.push({
	    		id: _.uniqueId('list_'),
	    		listName: this.listName
	    	});
	    	this.listName = '';

	    };
	    this.removeList = function(list) {
	    	_.pull(this.lists,list)
	    }
		}

	});