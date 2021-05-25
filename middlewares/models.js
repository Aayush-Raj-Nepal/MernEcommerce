export default {
	PopulateCategory(req, res, next) {
		req.body.populates.push({
			path: "category",
			select: "names",
		})
		return next()
	},
	PopulateAuthor(req, res, next) {
		req.body.populates.push({
			path: "authors",
			select: "name",
		})
		return next()
	},
	PopulateCart(req, res, next) {
		req.body.populates.push({
			path: "cart",
			populate: [
				{
					path: "user_id",
					model: "User",
				},
			],
		})
		next()
	},
	PopulateUserToCart(req, res, next) {
		req.body.populates.push({
			path: "user_id",
			model: "User",
		})
		next()
	},
	PopulateGallery(req, res, next) {
		req.body.populates.push({
			path: "book",
			select: "name",
		})
		req.body.populates.push({
			path: "image",
			select: "url",
		})
		next()
	},
}
