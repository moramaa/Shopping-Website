import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return(
        <div className="home">
            <div className="home_container">
            <img className="home_imge" src="https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>

            

            
                <div className="home_row">
                <Product title="the last of us" price={369.99} image="https://images.pexels.com/photos/216695/pexels-photo-216695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" rating={5} />
                <Product title=" Spider Man " price={769.99} image="https://images.pexels.com/photos/1888403/pexels-photo-1888403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={4} />
                <Product title=" Spider Man " price={539.99} image="https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" rating={4} />
                </div>
                
                <div className="home_row">
                <Product title=" Spider Man " price={269.99} image="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={5} />
                <Product title=" Spider Man " price={949.99} image="https://images.pexels.com/photos/286305/pexels-photo-286305.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" rating={3} />
                </div>

                <div className="home_row">
                <Product title=" Spider Man " price={296.99} image="https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" rating={4} />
                <Product title=" Spider Man " price={669.99} image="https://images.pexels.com/photos/802127/pexels-photo-802127.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" rating={2} />
                <Product title=" Spider Man " price={259.99} image="https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={3} />

                </div>
           </div>
            
        </div>
    )
}

export default Home
