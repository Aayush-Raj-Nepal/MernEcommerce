import React, { useEffect, useState } from 'react'
import Base from "../../Components/Base"
import {getAllProducts} from "../../api/helper"
function Index() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getAllProducts().then(res=>{
            setProducts(res)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <Base>            <h1>All products list here!</h1>
</Base>
        </div>
    )
}

export default Index
