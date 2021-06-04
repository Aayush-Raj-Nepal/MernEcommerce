import React from 'react'
import { useStateValue } from '../../StateProvider'

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
                rating:rating
            }
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
        <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/single_product_view.html" className="product-img">
            <img src={image} alt=""/>
            <div className="product-absolute-options">
                <span className="offer-badge-1">-{discount}% off</span>
                <span className="like-icon" title="wishlist"></span>
            </div>
        </a>
        <div className="product-text-dt">
            <p>Available<span>(In Stock)</span></p>
            <h4>{title}</h4>
            <div className="product-price">Rs{price}<span>Rs{price}</span></div>
            <div className="qty-cart">
                <div className="quantity buttons_added">
                    <input type="button"  className="minus minus-btn"/>
                    <input type="number" step="1" name="quantity"  className="input-text qty text"/>
                    <input type="button"  className="plus plus-btn"/>
                </div>
                <span className="" onClick={addToBasket}><i className="fa fa-shopping-cart"></i></span>
            </div>
        </div>
</div>
      
    )
}