
	exports.create=(req, res,model)=> {
		model
			.create(req.body.payload)
			.then((object) => {
				res.status(201).json(object)
			})
			.catch((err) => {
				res.status(400).json({
					message: err.message,
				})
			})
	};
	// exports.imageUpload()=>{


	// }
	exports.retrieve=(req, res,model)=> {
		console.log(req.body)
		let query = model.find(req.body.query).sort({ 'createdAt': -1 })
		query = PopulateSelectQuery(query, req.body.populates, req.body.select)
		query
			.then((objects) => {
				res.json(objects)
			})
			.catch((err) => {
				res.status(400).json({
					message: err.message,
				})
			})
	}
	exports.update=(req, res,model)=> {
		if (!req.model) {
			model
				.findOneAndUpdate(req.body.query, req.body.update, {
					new: true,
					runValidators: true,
				})
				.then((object) => {
					res.status(200).json(object)
				})
				.catch((err) => {
					res.status(400).json({
						message: err.message,
					})
				})
		} else {
			Object.assign(req.model, req.body.update)
			req.model
				.save()
				.then(function () {
					res.status(200).json(req.model)
				})
				.catch(function (err) {
					res.status(400).json({
						message: err.message,
					})
				})
		}
	}

	exports.delete=(req, res,model)=> {
		console.log(req.params.id)
		model
			.findById(req.params.id)
			.remove()
			.then(function (number) {
				res.status(200).json({
					number_of_records: number,
				})
			})
			.catch(function (err) {
				res.status(400).json({
					message: err.message,
				})
			})
	}

	exports.fetch=(req, res,model)=> {
		// model
		let query = model.find({ _id: req.params.id, hidden: false })

		query = PopulateSelectQuery(query, req.body.populates, req.body.select)

		query.then((object) => {
			res.json(object)
		})
			.catch((err) => {
				res.status(400).json({
					message: err.message,
				})
			})
	}
	exports.fetchAdmin=(req, res,model)=> {
		let query = model.find({ _id: req.params.id })

		query = PopulateSelectQuery(query, req.body.populates, req.body.select)

		query.then((object) => {
			res.json(object)
		})
			.catch((err) => {
				res.status(400).json({
					message: err.message,
				})
			})
	}

	exports.fetchPaginated=(req, res,model)=> {
		console.log(req.body.populates)
		let query
		if (req.body.query == "featured_book") {
			query = model
				.find({ featured_book: true, hidden: false })
				.skip(req.body.skip)
				.limit(req.body.count)
		} else if (req.body.query == "latest_book") {
			query = model
				.find({ hidden: false })
				.skip(req.body.skip)
				.limit(req.body.count)
				.sort("-createdAt")
		} else if (req.body.query == "sale_book") {
			query = model
				.find({ sale_book: true, hidden: false })
				.skip(req.body.skip)
				.limit(req.body.count)
		} else {
			console.log(req.body.query)
			query = model
				.find(req.body.query ? JSON.parse(req.body.query) : {})
				.skip(req.body.skip)
				.limit(req.body.count)
				.sort("-createdAt")
		}
		console.log(req.body)
		query = PopulateSelectQuery(query, req.body.populates, req.body.select)
		query
			.then((objects) => {
				res.json({
					offset: req.body.skip + objects.length,
					items: objects,
				})
			})
			.catch((err) => {
				res.status(400).json(err)
			})
	}

	exports.count=(req, res,model)=> {

		model
			.find(req.body.query ? JSON.parse(req.body.query) : {})
			.count()
			.then((count) => {
				res.json({
					count: count,
				})
			})
			.catch((err) => {
				res.status(400).json(err)
			})
	}


