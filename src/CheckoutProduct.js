import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,rating,price}) {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt=""/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹​ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating).fill().map((_,i)=>
          <span role="img" aria-label="star">⭐</span>)}
        </div>
        <button className="hvr-shutter-in-vertical" onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
