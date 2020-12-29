import React from 'react';

import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket} , dispatch]= useStateValue();


    const removeFromBasket =() => {
        //remove the item from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',  
            id :id,
        })
    }

    return (
        <div className="checkoutProduct" >

            <img className="checkoutProduct_image"  src={image} />

            <div className="checckoutProduct_info">
                <p className="checckoutProduct_title"> {title}</p>
                <p className="checckoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checckoutProduct_rating"> 
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>הסר מהסל</button>
            </div>

        </div>
    )
};

export default CheckoutProduct
