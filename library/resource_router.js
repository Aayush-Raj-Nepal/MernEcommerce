import { Router } from "express"
import { EmptyHandler } from "./helpers"

class ResourceRouter {
	constructor(controller, options = {}) {

		this.router = new Router()
		this.router.get(
			"/",
			options.retrieve || EmptyHandler,
			controller.retrieve.bind(controller)
		)
		this.router.get(
			"/query",
			options.retrieve || EmptyHandler,
			options.fetchPaginated || EmptyHandler,
			controller.fetchPaginated.bind(controller)
		)
		this.router.get(
			"/count",
			options.retrieve || EmptyHandler,
			controller.count.bind(controller)
		)
		this.router.get(
			"/:id",
			options.fetch || EmptyHandler,
			controller.fetch.bind(controller)
		)
		this.router.get(
			"/showAll/:id",
			options.fetch || EmptyHandler,
			controller.fetchAdmin.bind(controller)
		)
		this.router.post(
			"/",
			options.create || EmptyHandler,
			controller.create.bind(controller)
		)
		this.router.put(
			"/",
			options.update || EmptyHandler,
			controller.update.bind(controller)
		)
		this.router.delete(
			"/:id",
			options.delete || EmptyHandler,
			controller.delete.bind(controller)
		)
	}
}

export default ResourceRouter
