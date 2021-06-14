import React, { useState } from 'react'
import {useHistory} from "react-router-dom"


// components
import Base from '../Components/Base'
function Dashboard() {
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
         <div className="text-center p-5 alert alert-primary">
         <h1>Welcome to subidhaonline.com</h1>
         <h3>Admin Panel</h3>

         </div>

            </Base>
            </div>
    )
}

export default Dashboard
