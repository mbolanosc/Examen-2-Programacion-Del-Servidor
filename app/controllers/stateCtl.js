var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	States = mongoose.model('statesModel');	//Invoca el modelo definido en el MVC Models

module.exports = function(app) {
	app.use('/', router);
};

router.get('/states', function(req, res, next){
	States.find(function(err, states)	//Busca el modelo dentro del MVC
	{
		if (err) return next(err);
		res.render('states', {	//Hay un view que se llama Tienda
			titulo: 'Estados',
			states: states,
			_id: req.query.id
		});
	});
});
router.get('/resultsbystate',function(req,res,next){
	States.find(function(err, states)	//Busca el modelo dentro del MVC
	{
		if (err) return next(err);
		res.render('resultsbystate', {
			titulo: 'Resultados por estados',
			states: states
		});
	});
});
router.post('/vote/:id', function(req, res){
	var id = req.params.id;
	var votesForTrump= req.body.nameTrump;
	var votesForHillary = req.body.nameHillary;
	console.log("State function");
	console.log("PARAMETROOOOO: " + id);
	console.log('votesForHillary ' +votesForHillary);
	console.log('votesForTrump ' +votesForTrump);

	States.findById(id, function(err,docs){
		if(err){
			throw err;
		}
		console.log("docs" , JSON.stringify(docs));
		console.log('old votes 4 trump: ' , docs.votesTrump);
		docs.votesTrump = votesForTrump;
		docs.votesHillary = votesForHillary;

		docs.save(function(err){
			if (err) {
				throw err;
			}
			console.log('update wt success!');
		});

		if(docs.votesTrump > 0 && docs.votesHillary > 0){
			console.log('Si son mayor que 0');
			if(docs.votesTrump > docs.votesHillary ){
				console.log("winner trump");
				docs.winner = "Donald Trump";
			}else{
				console.log("winner hillary");
				docs.winner = "Hillary Clinton";
			}
		}else{
			console.error('No son mayores que 0');
		}
	});




	res.redirect('/states');
});
