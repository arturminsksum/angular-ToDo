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
		      list_id: 1
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
				card.isEditing = true;
				this.editingCard = angular.copy(card);
			}

			this.updateCard = function () {
				var card = _.find(this.cards, {id:this.editingCard.id});		
				card.description = this.editingCard.description;

				//проблема в этой строчке, должен обновляться id карточки при выборе селекта и карточка переноситься в другой лист, а она просто исчезает из листа, а в другом не появляется
				card.list_id = this.editingCard.list_id;

				card.isEditing = false;
			  this.editingCard = null;
			}

			var KEYS = {
				ESCAPE: 27
			}

			this.closeEditing = function (e, card) {
				if (_.isEqual(e.keyCode, KEYS.ESCAPE)) {
					card.isEditing = false;
				}
			}

		},

		bindings: {
	    list: '<',
	    lists: '<'
	  }
	});