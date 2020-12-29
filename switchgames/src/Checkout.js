import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


function Checkout() {
    const [{basket} , dispatch]= useStateValue();

    return (
        <div className="checkout">
         <div className="checkout_product">
             
            <div >
                <h2 className="checkout_title">המוצרים שלך </h2>
            </div>
   

            {basket.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />

            ))}

            <div className="checkout_summary">
                <h2>סיכום הקניה</h2>

                <Subtotal />

            </div>
         </div>
        </div>
    )
}

export default Checkout
