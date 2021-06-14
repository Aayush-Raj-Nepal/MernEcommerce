export function PopulateSelectQuery(query, populates, select) {
	if (populates != null) {
		for (let index = 0; index < populates.length; index++) {
			query.populate(populates[index])
		}
	}
	if (select != null) query.select(select)
	return query
}

export function GetMediaType(mimeType) {
	const fileTypes = [
		"image/png",
		"image/jpeg",
		"image/jpg",
		"application/pdf",
		"video/mp4",
		"video/mov",
	]
	let returnTypeMeme = null
	switch (mimeType) {
		case "image/png":
		case "image/jpeg":
		case "image/jpg":
			returnTypeMeme = "IMAGE"
			break
		case "application/pdf":
			returnTypeMeme = "PDF"
			break
		case "video/mp4":
		case "video/mov":
			returnTypeMeme = "VIDEO"
			break
		default:
			returnTypeMeme = "IMAGE"
	}
	return returnTypeMeme
	// return mimeType.includes("video") ? "VIDEO" : "IMAGE"
}

export function GetRecent(history) {
	return [...history].pop().value
}

export function EmptyHandler(req, res, next) {
	next()
}
export function GetCoin(history) {
	let total = 0
	history.forEach((item) => {
		total += parseInt(item.earned)
	})
	return total
}
export function GetBalance(account_balance) {
	let total = 0
	account_balance.forEach((item) => {
		total += parseInt(item.amount)
	})
	return total
}
