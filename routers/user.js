import {Router} from "express"

let router=Router()

// admin routes

// client routes
router.get('/',(req,res)=>{
    res.send("Hi from user!")
})
export default router