import React,{useState} from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { useStateValue } from '../../StateProvider';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import { ModalFooter } from 'react-bootstrap'
import Cart from './Cart/Index'
import {Link} from 'react-router-dom'
function HeaderBottom() {
	const [show, setShow] = useState(false);
	const [cartSidebar,setCartSidebar]=useState(false)
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [{basket,user},dispatch]=useStateValue();
	const [drop1, setDrop1] = useState(false);
	const [drop2, setDrop2] = useState(false);
	let toggleCartSidebar=(status)=>{
		setCartSidebar(!status)
	}
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
					<a className="bg-white" ><i className="uil uil-apps"></i><span className="cate__icon"><button className="category_drop hover-btn  btn-light" title="Categories" onClick={handleShow}>Select Category</button></span></a>
					<Modal 
					size="lg" show={show} onHide={handleClose} animation={false}>
	        <div className="category-area" role="document">
            <div className="category-area-inner">
                <ModalHeader className="category-model-content modal-content" closeButton>
						<ModalTitle className="category-model-content modal-content " id="contained-modal-title-vcenter">Categories</ModalTitle>
						</ModalHeader>
						<ModalBody>
                    <ul className="category-by-cat">
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-1.svg" alt=""/>
								</div>
								<div className="text"> Fruits and Vegetables </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-2.svg" alt=""/>
								</div>
								<div className="text"> Grocery & Staples </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-3.svg" alt=""/>
								</div>
								<div className="text"> Dairy & Eggs </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-4.svg" alt=""/>
								</div>
								<div className="text"> Beverages </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-5.svg" alt=""/>
								</div>
								<div className="text"> Snacks </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-6.svg" alt=""/>
								</div>
								<div className="text"> Home Care </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-7.svg" alt=""/>
								</div>
								<div className="text"> Noodles & Sauces </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-8.svg" alt=""/>
								</div>
								<div className="text"> Personal Care </div>
							</a>
						</li>
						<li>
							<a href="#" className="single-cat-item">
								<div className="icon">
									<img src="images/category/icon-9.svg" alt=""/>
								</div>
								<div className="text"> Pet Care </div>
							</a>
						</li>
                    </ul>
					</ModalBody>
					<ModalFooter>
					<a href="#" className="morecate-btn"><i className="uil uil-apps"></i>More Categories</a>
					</ModalFooter>
            </div>
        </div>
    
					</Modal>
				</div>
				<Navbar bg="white" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="navbar__nav__link active"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link className="navbar__nav__link"><Link to="/newproduct" >New Products</Link></Nav.Link>
      <Nav.Link  className="navbar__nav__link"><Link to="/newproduct">Featured Products</Link></Nav.Link>
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
      <Nav.Link  className="navbar__nav__link"><Link to="/contact">Contact Us</Link></Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
				
				<div className="catey__icon">
					<a href="#" className="cate__btn" data-toggle="modal" data-target="#category_model" title="Categories"><i className="uil uil-apps"></i></a>
				</div>
				<Cart isSidebarOpen={cartSidebar} onSidebarToggle={toggleCartSidebar}></Cart>
				<div className="search__icon order-1">
					<a href="#" className="search__btn hover-btn" data-toggle="modal" data-target="#search_model" title="Search"><i className="uil uil-search"></i></a>
				</div>
			</div>
		</div>
        </div>
    )
}

export default HeaderBottom
