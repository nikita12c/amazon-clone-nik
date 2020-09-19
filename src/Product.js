import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
  
  const [{basket},dispatch]=useStateValue();
  // console.log("this is back--> ",basket);
  const addToBasket=()=>{
    //dispatch the item into dataLayer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        price:price,
        image:image,
        rating:rating
      },
    });
  };
  return (
    <div  className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹​ </small>
          <strong>{price}</strong>
        </p>
      <div className="product__rating">
        {Array(rating).fill().map((_,i)=>
          <span role="img" aria-label="star">⭐</span>)}
      </div>
      </div>
      <img src={image} alt=""/>
      
      <button onClick={addToBasket} className="product__button">Add to basket</button>
    </div>
  )
}

export default Product;
