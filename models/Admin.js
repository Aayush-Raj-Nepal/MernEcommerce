const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
import HistorySchema from "../library/schema/history"
import TokenSchema from "../library/schema/token"


const AdminSchema= Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:Schema.Types.ObjectId,
        ref:'Media'
    },
    incentive: [
        {
            title: {
                type: String,
            },
            amount: {
                type: Number,
            },
            description: {
                type: String,
                default: "",
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    address:{
        type:String,
        required:true
    },
    access_level: {
        type: Number,
        enum: [1, 2, 3],
        required: true
    },
    task_history:[
        {
            task_severity:{
                type:String,
                enum:['danger','moderate','normal']
            },
            description:{
                type:String
            },
            date:{
                type:Date
            }
        }
    ],
    phone:{
        type:String
    },
    password_history: [HistorySchema],
    tokens: [TokenSchema],

},{
    timestamps:true
})
module.exports=mongoose.models.Admin || Model("Admin", AdminSchema, "admins")

