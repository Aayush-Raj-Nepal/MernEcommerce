import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SingleProductView from '../components/SingleProductView';


function Singleproductview({match}) {
    return (
        <div>
            <Header></Header>
            <div className="mt-5">
              
            <SingleProductView id={match.params.id}></SingleProductView > 
            
              
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Singleproductview
