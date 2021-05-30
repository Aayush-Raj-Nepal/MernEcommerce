import React,{useState} from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { useStateValue } from '../../StateProvider';

import {Link} from 'react-router-dom'
function HeaderBottom() {
	const [{basket,user},dispatch]=useStateValue();
	const [drop1, setDrop1] = useState(false);
	const [drop2, setDrop2] = useState(false);
	const showDropdown = (e,id)=>{
		switch (id) {
			case 1:
				setDrop1(!drop1)
				break;
			case 2:
				setDrop2(!drop2)
				break;
			
			default:
				break;
		}
	}

    return (
        <div>
            <div className="sub-header-group">
			<div className="sub-header">
				<div className="ui dropdown">
					<a href="#" className="category_drop hover-btn" data-toggle="modal" data-target="#category_model" title="Categories"><i className="uil uil-apps"></i><span className="cate__icon">Select Category</span></a>
				</div>
				<Navbar bg="white" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link to="/" className="navbar__nav__link active">Home</Nav.Link>
      <Nav.Link to="/newproduct" className="navbar__nav__link">New Products</Nav.Link>
      <Nav.Link to="/newproduct" className="navbar__nav__link">Featured Products</Nav.Link>
	  <NavDropdown  title={<span  className="navbar__nav__dropdown__link ">Pages <i className="uil uil-angle-down"></i></span>}  show={drop1}
   onMouseEnter={e=>showDropdown(e,1)} 
   onMouseLeave={e=>showDropdown(e,1)} id="basic-nav-dropdown">
	   
        <NavDropdown.Item className="item channel_item page__links" to="/">Account</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">About Us</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Shop Grid</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Single Product View</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">CheckOut</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Product Request</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Order Placed</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Bill Slip</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Sign In</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Sign Up</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Forget Password</NavDropdown.Item>
		<NavDropdown.Item className="item channel_item page__links" to="/">Contact Us</NavDropdown.Item>
           </NavDropdown>
      <Nav.Link to="/" className="navbar__nav__link">Contact Us</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
				
				<div className="catey__icon">
					<a href="#" className="cate__btn" data-toggle="modal" data-target="#category_model" title="Categories"><i className="uil uil-apps"></i></a>
				</div>
				<div className="header_cart order-1">
					<a href="#" className="cart__btn hover-btn pull-bs-canvas-left" title="Cart"><i className="fa fa-shopping-cart"></i><span>Cart</span><ins>{basket?.length}</ins><i className="uil uil-angle-down"></i></a>
				</div>
				<div className="search__icon order-1">
					<a href="#" className="search__btn hover-btn" data-toggle="modal" data-target="#search_model" title="Search"><i className="uil uil-search"></i></a>
				</div>
			</div>
		</div>
        </div>
    )
}

export default HeaderBottom
