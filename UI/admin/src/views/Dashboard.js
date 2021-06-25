import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import { useSelector } from "react-redux";


// components
import Base from '../Components/Base'
function Dashboard() {
    const user = useSelector((state) => state.auth.user);
    const [sidebarShow,setSidebarShow]=useState(false)
    let history=useHistory()
    function gotoLink(link){
        history.push(link)
    }
    const toggleSidebar=()=>{
        setSidebarShow(!sidebarShow)
    }

    return (
        <div>
         <Base>
         <div className="container-fluid">
         <div className="text-center p-5 alert alert-primary">
         <h1>Welcome {user.name}! <br /></h1>
        <h4> To subidhaonline.com's</h4>
         <h3>Admin Panel</h3>

         </div>
         </div>

            </Base>
            </div>
    )
}

export default Dashboard
