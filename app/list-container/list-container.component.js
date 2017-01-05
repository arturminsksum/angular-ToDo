angular.
	module('listContainer').
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
		    var idx = this.lists.indexOf(list);
		    if (idx >= 0) {
		      this.lists.splice(idx, 1);
		    }
	    }

		  this.cards = [
		    {
		      id: 1,
		      description: 'Fix bug in player',
		      list_id: 1
		    },
		    {
		      id: 2,
		      description: 'Add feature with D3',
		      list_id: 2
		    },
		    {
		      id: 3,
		      description: 'Learn AngularJS',
		      list_id: 3
		    }
		  ];

			this.getCards = function (list) {
			  return _.filter(this.cards, { list_id: list.id });
			}

			this.createCard = function (list, cardDescription) {
			  this.cards.push({
			    id: _.uniqueId('card_'),
			    description: cardDescription,
			    list_id: list.id
			  });
			};


		}

	});