import Product from "../models/Product"

const {  validationResult } = require("express-validator");
exports.getLatestProducts=(req,res)=>{

    Product.find({}).then(Products=>{
        res.status(200).json(Products)
    }).catch(err=>{
        console.log(err)
        res.status(404).json({
            error_message:'Cannot get list of Products'
        })
    })
}
exports.addProduct=(req,res)=>{
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(422).json({
       error: errors.array()[0].msg
     });
   }
   let payload=req.body

   let product = new Product({
       category:payload.category,
     nep_name: payload.nep_name,
     images:payload.images,
     price_history:[{
        key: "Number",
        value: payload.price,
     }],
     discount_history:[{
        key: "Number",
        value: payload.discount,
    }],
     product_source_type:payload.product_source_type,
     short_description:payload.short_description,
     short_name:payload.short_name,
     eng_name: payload.eng_name,
        short_name:payload.short_name,
     image:payload.image,
     description:payload.description,
   
 })
 product.save(function (err, Product) {
     if (err) {console.log(err)
        res.status(401).json({ message: "Something Went Wrong12" }) }
     res.status(200).json(Product)
 })
}
exports.deleteProduct=(req,res)=>{
    Product.findByIdAndDelete(req.body.id, function (err, product) {
      if (err){
          console.log(err)
          res.status(404).json({
            message:'Cannot find the document'
          })
      }
      else{
        res.status(200).send(product)
          console.log("Deleted : ", product);
      }
  });
  }