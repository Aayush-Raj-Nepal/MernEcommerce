import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SingleProductView from '../components/SingleProductView';


function Singleproductview({match}) {
    return (
        <div>
            <Header></Header>
            <SingleProductView id={match.params.id}></SingleProductView > 
            <Footer></Footer>
        </div>
    )
}

export default Singleproductview
