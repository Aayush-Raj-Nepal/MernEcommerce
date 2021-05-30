// import {Schema,model as Model} from 'mongoose'
import mongoose from "mongoose"
let Schema=mongoose.Schema
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
    phone_number:{
        type:String
    },
    password_history: [HistorySchema],
    tokens: [TokenSchema],

},{
    timestamps:true
})
module.exports = mongoose.model('Admin',AdminSchema);          

// export default Model("Admin",AdminSchema,'admins')