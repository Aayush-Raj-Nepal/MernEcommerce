import React,{useState} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
function base({children}) {
    const [sidebarShow,setSidebarShow]=useState(false)
 
    const toggleSidebar=()=>{
        setSidebarShow(!sidebarShow)
    }
    return (
        <div>
            <Header sidebarToggleFunction={toggleSidebar}></Header>
            <div className="d-flex">
                <Sidebar  collapsed={sidebarShow}></Sidebar>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default base
