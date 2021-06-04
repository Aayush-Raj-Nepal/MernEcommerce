import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../StateProvider';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function Index() {
    const [{basket,user},dispatch]=useStateValue();
    const [sidebarOpen, setSidebarOpen] = useState(false)
     let toggleSidebar=(status)=>{
         setSidebarOpen(status)
     }
    return (
        <div className="header_cart order-1">
        <a onClick={()=>(setSidebarOpen(!sidebarOpen))} className="cart__btn hover-btn pull-bs-canvas-left" title="Cart"><i className="fa fa-shopping-cart"></i>Cart<ins>{basket?.length}</ins><i className="uil uil-angle-down"></i></a>
        <ProSidebar collapsed={sidebarOpen}>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;

        </div>
        
      );
    }

export default Index
