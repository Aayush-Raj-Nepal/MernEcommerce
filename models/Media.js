import {Schema,model as Model} from 'mongoose'

let MediaSchema=new Schema({
    mediaType:{
        type:String,
        enum:['VIDEO',"IMAGE","PDF"]
    },
    url:{
        type:string
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

export default Model("Media",MediaSchema,"medias")