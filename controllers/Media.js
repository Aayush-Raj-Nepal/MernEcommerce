import Media from "../models/Media"
import { GetMediaType } from "../library/helpers"

let Jimp = require('jimp');
import { v4 as uuidv4 } from 'uuid'
const fs = require('fs')
const s3 = require("../app/aws")
	const getSignedURL=async(key)=> {
		var params = {
			Bucket: process.env.BUCKET_NAME,
			Key: key,
			Expires: 100,
		}
		try {
			let url = await s3.getSignedUrlPromise('getObject', params)
			return url
		} catch (err) {
			console.log(err)
		}
	}
	exports.generatePlaceholder=async(url,id,media)=>{
		const image = await Jimp.read(url);
			// await image.resize(185,245);
			await image.quality(10);
			console.log(image)
			let buff=''
			image.getBuffer(image._originalMime,(err,Buffer)=>{
				buff=Buffer
			})
			// return "cdcdc"
			var bucketName = process.env.BUCKET_NAME
			var params = {
				Bucket: bucketName,
				Key: uuidv4(),
				Body:new Buffer.from(buff, 'binary') ,
				// ContentLength: image.size,
				ContentType: image._originalMime,
				Metadata: {
					'originalName': media.metadata.get('originalname')
				}
			}

			var options = {
				partSize: 6 * 1024 * 1024,
				queueSize: 3
			}
			s3.upload(params, options, async(err, mediaKey) => {
				if (err) {
					console.group()
					console.log("Something went wrong")
					console.log(err)
					console.groupEnd()
					return false
				} else {
						Media.findByIdAndUpdate(id,{placeholder:mediaKey.key},{new:true}).then(media=>{
							console.log("placeholder added",media)								
						}).catch(err=>{
							
							console.log('error here')
						})
						
					}
				})
		
	}
	
	
	exports.getProductImage=async(req, res)=> {
		console.log(req.body)
		if (req.body.id) {
			let media = await Media.findById(req.body.id)
			if (media) {
                if (req.body.placeholder && req.body.placeholder=='true') {
                    let url = await getSignedURL(media.placeholder)
					console.log('placeholder')
                    res.redirect(url)
                } else {
                    let url = await getSignedURL(media.url)
					console.log('original')
                    res.redirect(url)
                }    
            } else {
                res.status(403).json({
                    message: "Media Not Found"
                })    
            }
            
		} else {
			res.status(403).json({
				message: "Required data not passed"
			})
		}
	}

	exports.createProductImage=async(req, res) =>{
		const fileTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf", "video/mp4", "video/mov"]
		if (fileTypes.includes(req.file.mimetype)) {
			const fileContent = fs.readFileSync(req.file.path)
			var bucketName = process.env.BUCKET_NAME
			var fileName=req.file.originalname
			var params = {
				Bucket: bucketName,
				Key: uuidv4(),
				Body: fileContent,
				ContentLength: req.file.size,
				ContentType: req.file.mimetype,
				Metadata: {
					'originalName': fileName
				}
			}
			var options = {
				partSize: 6 * 1024 * 1024,
				queueSize: 3
			}
			s3.upload(params, options, async (err, mediaKey) => {
				if (err) {
					console.group()
					console.log("Something went wrong")
					console.log(err)
					console.groupEnd()
					res.send({ message: "Something Went Wrong", code: 20 })
				} else {
                    const mainImageUrl=mediaKey.key
                    const mediaType=GetMediaType(req.file.mimetype)
                    const metadata=req.file
                        let url = await getSignedURL(mainImageUrl)
                        const image = await Jimp.read(url);
                        // await image.resize(185,245);
                        await image.quality(10);
                        let buff=''
                        image.getBuffer(image._originalMime,(err,Buffer)=>{
                            buff=Buffer
                        })
                        var placeholderParams = {
                            Bucket: bucketName,
                            Key: uuidv4(),
                            Body:new Buffer.from(buff, 'binary') ,
                            // ContentLength: image.size,
                            ContentType: image._originalMime,
                            Metadata: {
                                'originalName':fileName
                            }
                        }
                        var options = {
                            partSize: 6 * 1024 * 1024,
                            queueSize: 3
                        }
                        s3.upload(placeholderParams, options, async(err, placeholderMediaKey) => {
                            if (err) {
                                console.group()
                                console.log("Something went wrong")
                                console.log(err)
                                console.groupEnd()
                                return false
                            } else {
                                    Media.create({url:mainImageUrl,mediaType:mediaType,metadata:metadata, placeholder:placeholderMediaKey.key},{new:true}).then(media=>{
                                        console.log("placeholder added",media[0])	
										return res.json(media[0])							
                                    }).catch(err=>{
										console.log('error here')
										return res.status(400).json({error:err})
                                    })
                                    
                                }
                            })
                        
					
				}
			})
		
		} else {
			res.status(403).json({
				message: "Something Went Wrong",
				code: 10
			})
		}
	}


