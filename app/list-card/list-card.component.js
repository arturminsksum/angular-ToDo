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

			this.editingCard = null;

			this.deleteCard = function(card) {
				return _.pull(this.cards, card);
			}

			this.editCard = function (card) {
				card.isEditing = !card.isEditing;
				this.editingCard = angular.copy(card);
			}

			this.updateCard = function () {
				var card = _.find(this.cards, {id:this.editingCard.id});
				card.description = this.editingCard.description;
				card.isEditing = !card.isEditing;		
			  this.editingCard = null;			  		
			}
		},

		bindings: {
	    list: '<'
	  }
	});