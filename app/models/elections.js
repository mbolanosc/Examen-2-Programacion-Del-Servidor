var mongoose = require('mongoose'),
	Schema = mongoose.Schema; 

var States = new Schema({
  name: String,
	maxVotes: Number,
	votesTrump: Number,
	votesHillary: Number,
  winner: String,
	winnerTrump : Boolean,
  winnerHillary : Boolean

}, {collection: 'Elections2016'});

mongoose.model('statesModel', States); //Exporta la coleccion para poder ser utilizada.
