import { PopulateSelectQuery } from "../../library/helpers"

class ResourceController {
	constructor(model) {
		this.model = model
	}

	create(req, res) {
		this.model
			.create(req.body.payload)
			.then((object) => {
				res.status(201).json(object)
			})
			.catch((err) => {
				res.status(400).json({
					message: err.message,
				})
			})
	}
	retrieve(req, res) {
		console.log(req.body)
		let query = this.model.find(req.body.query).sort({ 'createdAt': -1 })
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
	update(req, res) {
		if (!req.model) {
			this.model
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

	delete(req, res) {
		console.log(req.params.id)
		this.model
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

	fetch(req, res) {
		// this.model
		let query = this.model.find({ _id: req.params.id, hidden: false })

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
	fetchAdmin(req, res) {
		let query = this.model.find({ _id: req.params.id })

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

	fetchPaginated(req, res) {
		console.log(req.body.populates)
		let query
		if (req.body.query == "featured_book") {
			query = this.model
				.find({ featured_book: true, hidden: false })
				.skip(req.body.skip)
				.limit(req.body.count)
		} else if (req.body.query == "latest_book") {
			query = this.model
				.find({ hidden: false })
				.skip(req.body.skip)
				.limit(req.body.count)
				.sort("-createdAt")
		} else if (req.body.query == "sale_book") {
			query = this.model
				.find({ sale_book: true, hidden: false })
				.skip(req.body.skip)
				.limit(req.body.count)
		} else {
			console.log(req.body.query)
			query = this.model
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

	count(req, res) {

		this.model
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
}

export default ResourceController
