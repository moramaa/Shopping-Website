import { FilledInput } from '@material-ui/core';
import React from 'react';
import "./Product.css";

function Product({id,title,price,image,rating}) {
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
        <button>הוסף לעגלה</button>
        </div>
    )
}

export default Product;
