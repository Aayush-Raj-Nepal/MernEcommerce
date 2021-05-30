 import ResourceController from "./resource/resource_controller"
 import Admin from "../models/Admin"
 import _ from 'lodash'
 import bcrypt from 'bcrypt'

 class AdminController extends ResourceController{
     constructor(){
         super(Admin)
     }
 }
 
 export default AdminController