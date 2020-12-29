import { FilledInput } from '@material-ui/core';
import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,price,image,rating}) {
    const [{ basket }, dispatch]= useStateValue();
        console.log( "A: " ,basket);
    const addToBacket=()=>{
        //dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BACKET", 
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title} </p>
               
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="seller_rating">
                    {/* star */}
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                  
                   
                </div>      
            </div>
            {/* image of product */}
            <img src={image} />
        <button onClick={addToBacket}>הוסף לעגלה</button>
        </div>
    )
}

export default Product;
