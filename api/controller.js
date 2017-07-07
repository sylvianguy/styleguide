let styles = {};
const styleguide = require('./models/styleguide');

//PUT// /api/stylguide/update/:_id
styles.updateGuide = (req, res) => {
	const id = req.params.id
	const newModel = req.body;
	styleguide.findOne({_id : id }, (err, doc) => {
		if(err) {
			res
				.status(400)
				.send({
					error: res
				})
			return;
		}
		//deleting the id from the  
		delete newModel._id;
		Object.assign(doc, newModel);
		doc.save((err, doc) => {
			if(err) {
				res
					.status(400)
					.send({
						error: err
					});
				return;
			} 
			res
				.status(200)
				.send(doc)

		});
	});

};

//GET// /api/stylguide/get
styles.getGuides = (req, res) => {
	// res.json(req)
	// console.log(res);
	styleguide.find({},(err, docs) => {
		if(err) {
			res
				.status(400)
				.send(err)
		} else {
			res
				.status(200)
				.send(docs)
		}
	})
};
//GET// /api/stylguide/get/:id
styles.getGuideById = (req, res) => {
	// console.log(req.params.id);
	const id = req.params.id
	styleguide.findOne({_id : id }, (err, doc) => {
		if(err) {
			res
				.status(400)
				.send(err)
			} else {
			res	
				.status(200)
				.send(doc)
			}
	})
};

//POST// /api/stylguide/create
styles.createGuide = (req, res) => {
	const data = req.body
	console.log(data)
	new styleguide(data).save((err, doc) => {
		if(err) {
			res
				.status(400)
				.send(err)
		} else {
			res
				.status(200)
				.send(doc)
		}
	})
};

module.exports = styles;
