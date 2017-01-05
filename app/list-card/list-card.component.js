angular.
	module('listCard').
	component('listCard', {
		templateUrl: 'list-card/list-card.template.html',
		controller: function listCardController() {

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

			this.getCards = function () {
			  return _.filter(this.cards, { list_id: this.list.id });
			}

			this.createCard = function () {
			  this.cards.push({
			    id: _.uniqueId('card_'),
			    description: this.cardDescription,
			    list_id: this.list.id
			  });
			  this.cardDescription = '';
			};

		},

		bindings: {
	    list: '<'
	  }
	});