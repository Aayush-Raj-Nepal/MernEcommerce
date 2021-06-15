const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let MediaSchema=new Schema({
    mediaType:{
        type:String,
        enum:['VIDEO',"IMAGE","PDF"]
    },
    url:{
        type:String
    },
    thumbnail:{
        type:String
    },
    placeholder:{
        type:String
    },
    metadata:{
        type:Map
    }

},{timestamps:true})

module.exports=mongoose.models.Media || Model("Media",MediaSchema,"medias")