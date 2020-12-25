import React from 'react';
import './Header.css'
// icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        // the header
        <div className='header'>
            {/* logo imge*/}
            
        <Link to="/">
            <img className="header_logo" src="data:image/jpeg;base64,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"></img>
        </Link>
            
            {/*  search   */}
            <div className='header_search'>
                <input className="header_search_Input" type="text" />  
                <SearchIcon className="header_serchIcom" />
                
            </div>
            {/* header option */}
        <div className="header_nav">

            <div className="header_option">
                <span className='header_option_text1'>hello guest</span>
                <span className='header_option_text2'>Sing In</span>
            </div>
            <div className="header_option">
                <span className='header_option_text1'>Returns</span>
                <span className='header_option_text2'>& Orders</span>
            </div>
            <div className="header_option">
                <span className='header_option_text1'>Your</span>
                <span className='header_option_text2'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header_optionBasket">
            <span   className="header_basketCount header_option_text2" > 0 </span>
            <ShoppingBasketIcon />
            </div>
            </Link>
        </div>


        </div>
    )
} 

export default Header