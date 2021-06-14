import React,{useEffect, useState} from 'react'
import {getCategories} from "../../api/helper"
import Base from "../../Components/Base"
import { useTable } from 'react-table'

function AllCategories() {
    const [categories,setCategories]=useState([])
    useEffect(() => {
        getCategories().then(resp=>{
            setCategories(JSON.stringify(resp))
        })
        return () => {
            
        }
    }, [])
    
    return (
        <Base>
        <div>
         <h1>All categories here</h1>
         <p>{categories}</p>
      
        </div>
        </Base>
    )
}

export default AllCategories
