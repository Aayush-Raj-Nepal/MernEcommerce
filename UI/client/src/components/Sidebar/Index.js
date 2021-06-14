import React, { useState } from "react";
import "./sidebar.css"
function SideBar ({isSidebarOpen,onSidebarToggle,togglerButton,children}){
 
 

    return (
        <div className="header_cart order-1">
        <span onClick={()=>(onSidebarToggle(isSidebarOpen))}>{togglerButton}</span>
   
    <div className={`sidebar-menu${isSidebarOpen === true ? ' open' : ''}`}>
        <button type="button" className="button small float-right" onClick={()=>onSidebarToggle(isSidebarOpen)}>Toggle Menu</button>
        {children}
      </div>
      </div>
    )
}
 
export default SideBar;