import React from 'react'
import { useStateValue } from '../../StateProvider'
import "./home.css"
import {Link} from 'react-router-dom'
import cartImage from '../../images/shopping-cart (1).png'

import {  toast } from 'react-toastify';
export default function Product({id='12234',title='asdad',image='asdad',price='adasd',rating=5, discount='abcd'}) {
    const [state,dispatch]=useStateValue();
    const addToBasket=()=>{
        // dispatch the item insto the data-layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
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
        <div className="product-item">
        <Link to={"/product/" + id} className="product-img" >
            <img className="product_img" src={image} alt=""/>
            <div className="product-absolute-options">
                <span className="offer-badge-1">-{discount}% off</span>
                <span className="like-icon" title="wishlist"></span>
            </div>
        </Link>
        <div className="product-text-dt">
            <p>Available<span>(In Stock)</span></p>
            <h4>{title}</h4>
            <div className="product-price">Rs{price}<span>Rs{price}</span></div>
            <div className="qty-cart text-center">
                {/* <div className="quantity buttons_added">
                    <input type="button"  className="minus minus-btn"/>
                    <input type="number" step="1" name="quantity"  className="input-text qty text"/>
                    <input type="button"  className="plus plus-btn"/>
                </div> */}
                <span className="btn " onClick={addToBasket}>Add to cart<img style={{height:"20px"}} src={cartImage} alt="cart"></img></span>
            </div>
        </div>
</div>
      
    )
}
