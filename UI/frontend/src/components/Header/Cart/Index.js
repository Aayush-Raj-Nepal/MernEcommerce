import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../StateProvider';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from "../../Sidebar/Index"

function Index() {
    const [{basket,user},dispatch]=useStateValue();
    const [sidebarOpen, setSidebarOpen] = useState(false)
     let toggleSidebar=(status)=>{
         setSidebarOpen(!status)
     }
    return (
        <div className="header_cart order-1">
        <Sidebar isSidebarOpen={sidebarOpen} onSidebarToggle={toggleSidebar} togglerButton={(
        <a className="cart__btn hover-btn pull-bs-canvas-left" title="Cart"><i className="fa fa-shopping-cart"></i>Cart<ins>{basket?.length}</ins><i className="uil uil-angle-down"></i></a>
        )} >

          {/* pranish add sidebar content here */}
        </Sidebar>
       

        </div>
        
      );
    }

export default Index
