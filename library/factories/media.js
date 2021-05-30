import Media from "../../models/Media"
import Faker from "faker"

class MediaFactory {
	static async produceMedia(width, height, mediaType = "IMAGE") {
		let media = new Media({
			mediaType: mediaType,
			url: Faker.image.imageUrl(width, height),
			thumbnail: Faker.image.imageUrl(width, height),
		})
		try {
			media = await media.save()
		} catch (err) {
			throw err
		}
		return media
	}

	static async packageMedia(media) {
		media = new Media(media)
		try {
			media = await media.save()
		} catch (err) {
			throw err
		}
		return media
	}
}

export default MediaFactory
