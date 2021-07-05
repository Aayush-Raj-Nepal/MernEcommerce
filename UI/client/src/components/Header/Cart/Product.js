import React, { useState,useEffect } from 'react'
import { useStateValue } from "../../../StateProvider";
import {  toast } from 'react-toastify';

function Product({pid}) {
    const [{basket},dispatch]=useStateValue()
    const [product,setProduct]=useState({})
    let {image,title,discount,price,id,count}=product
    useEffect(() => {
        setProduct(basket.filter(b=>b.id==pid)[0])
    }, [basket])
    const removeFromBasket=()=>{
	dispatch({
		type:'REMOVE_FROM_CART',
		id:pid
	})
	toast.error('Removed From Cart', {
		position: "bottom-right",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		}); 
}
const handlecount=(e,v)=>{
    let newCount=0
    if (e &&e.target.value) {
      newCount=e.target.value
  } else if(v=='-') {
      newCount=--count
  } else if(v=='+') {
    newCount=++count
}
  dispatch({
      type:"EDIT_CART_COUNT",
      item:{...product,count:newCount}
  })
  
  }
    return (
              <div className="cart-item"> 
                        <div className="cart-product-img">
                          <img src={image} alt="" />
                          <div className="offer-badge">-{discount}%</div>
                        </div>
                        <div className="cart-text">
                          <h4>{title}</h4>
                          <div className="cart-radio">
                            {/* <ul className="kggrm-now">
									<li>
										<input type="radio" id="a1" name="cart1"/>
										<label >0.50</label>
									</li>
									<li>
										<input type="radio" id="a2" name="cart1"/>
										<label >1kg</label>
									</li>
									<li>
										<input type="radio" id="a3" name="cart1"/>
										<label >2kg</label>
									</li>
									<li>
										<input type="radio" id="a4" name="cart1"/>
										<label >3kg</label>
									</li>
								</ul> */}
                          </div>
                          <div className="qty-group">
                            <div className="quantity buttons_added">
                              <button className="" onClick={()=>handlecount(null,'-')}><i className="fa fa-minus"></i></button>
							  <input style={{maxWidth:"60px",textAlign:'center'}} type="text" onChange={handlecount} value={count} />
							  <button onClick={()=>handlecount(null,'+')} className=""><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="cart-item-price">
                              Rs{price} <span>Rs{price}</span>
                            </div>
                          </div>

                          <button type="button" className="cart-close-btn" onClick={()=>removeFromBasket()}>
                            <i className="fa fa-times"></i>
                          </button>
                        </div>
                      </div>
    )
}

export default Product
