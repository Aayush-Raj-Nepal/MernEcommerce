import Category from "../../models/Category"
import Faker from "faker"

class CategoryFactory {
	static async produceCategory() {
		let category = new Category({
			names: [
				{
					language: "np",
					name: Faker.hacker.noun(),
				},
			],
			thumbnail: "",
			description: Faker.lorem.sentences(3),
			priority: Faker.random.number({
				min:1,
				max:100
			})
		})
		try {
			category = await category.save()
		} catch (err) {
			throw err
		}
		return category
	}
}

export default CategoryFactory
