import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useStateValue } from '../../StateProvider'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getMediaUrl,getDiscountedPrice } from "../../api/functions";
import {  toast } from 'react-toastify';
import { isArray } from 'lodash';

function SimilarProducts({product}) {
    const [state,dispatch]=useStateValue();
    console.log(product)
    const [products,setProducts]=useState([])
    const getPlaceholder=(image)=>console.log(image)
    //  getMediaUrl("product/" +image[0]+'?placeholder=true')
    const  getImage=(image)=>console.log(image)
    //  getMediaUrl("product/" +image[0])
    useEffect(() => {
       if (product && product!={}) {
           axios.get("/product/getSimilar",{
               params:{
                count:10,id:product._id   
               }
           }).then(resp=>{
               if (resp.error_message) {
                   console.log(resp.err_message)
               } else {
                   console.log(resp.data)
                   setProducts(resp.data)
                   console.log(products)
               }
           }).catch(err=>{
               console.log(err)
           })
       }
    }, [])
    const addToBasket=(product)=>{
        // dispatch the item insto the data-layer
        let {id,title,image,price,rating,discount}=product
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:getPlaceholder(image),
                price:price,
                rating:rating,
                discount:discount,
                count:1
            },
        })
       
        toast.error('Added to Cart', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); 
    }
    return (
        <div>
              <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>More Like This</h4>
                  </div>
                  <div className="pdpt-body scrollstyle_4">
                      {products && products.length>0 && isArray( products) && products.map((product,index)=>(
  <div className="cart-item border_radius" key={index}>
  
  <Link to={"/product/" + product.id} className="cart-product-img" >
            <LazyLoadImage
      alt={product.title}
      className="product_img"
      placeholderSrc={()=>getImage(product.image)}
      src={()=>getPlaceholder(product.image)} 
 />
    <div className="offer-badge">4% OFF</div>
  </Link>
  <div className="cart-text">
    <h4>{product.title}</h4>
    <div className="cart-radio">
     
    </div>
    <div className="qty-group">
      <div className="quantity buttons_added">
      <span className="btn " onClick={()=>addToBasket(product)}>Add to cart <i className="fa fa-shopping-cart"></i></span>
      </div>
      <div className="cart-item-price">
        Rs {getDiscountedPrice(
                                        product.price,
                                        product.discount
                                      )} <span>Rs{product.price}</span>
      </div>
    </div>
  </div>
</div>




                      ))}
                  
                  </div>
                </div>
        </div>
    )
}

export default SimilarProducts
