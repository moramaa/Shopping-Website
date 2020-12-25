import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
         <div className="checkout_product">
             
            <div className="checkout_title">
                <h2>המוצרים שלך </h2>
            </div>

            <div className="checkout_summary">
                <h2>סיכום הקניה</h2>

                <Subtotal />

            </div>
         </div>
        </div>
    )
}

export default Checkout
