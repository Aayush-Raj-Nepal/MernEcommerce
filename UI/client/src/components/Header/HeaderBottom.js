import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useStateValue } from "../../StateProvider";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import { ModalFooter } from "react-bootstrap";
import Cart from "./Cart/Index";
import { getCategory } from "../../api/helper";
import { Link } from "react-router-dom";
import { getMediaUrl } from "../../api/functions";

function HeaderBottom() {
  const [show, setShow] = useState(false);
  // const [cartSidebar, setCartSidebar] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [{ basket,cartSidebar, user }, dispatch] = useStateValue();
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  let toggleCartSidebar = (status) => {
    dispatch({
      type:'CART_SIDEBAR_TOGGLE',
    })
  };
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      return getCategory().then((res) => {
        console.log(res);
        setCategory(res);
      });
    })();
  }, []);
  const showDropdown = (e, id) => {
    switch (id) {
      case 1:
        setDrop1(!drop1);
        break;
      case 2:
        setDrop2(!drop2);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="sub-header-group">
        <div className="sub-header">
          <div className="ui dropdown">
            <a className="bg-white">
              <i className="uil uil-apps"></i>
              <span className="cate__icon">
                <div
                  className="category_drop hover-btn btn"
                  title="Categories"
                  onClick={handleShow}
                >Select Category
                </div>
              </span>
            </a>
            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
              <div className="category-area" role="document">
                <div className="category-area-inner">
                  <ModalHeader
                    className="category-model-content modal-content"
                    closeButton
                  >
                    <ModalTitle
                      className="category-model-content modal-content "
                      id="contained-modal-title-vcenter"
                    >
                      Categories
                    </ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <ul className="category-by-cat">
                      {category && category.length > 0
                        ? category.map((cat, index) => (
                            <li key={index}>
                                                        <Link className="single-cat-item" to={`/category/${cat._id}`}>

                                <div className="icon">
                                  <img
                                    src={getMediaUrl("product/" + cat.image)}
                                    alt=""
                                  />
                                </div>
                                <div className="text"> {cat.eng_name}</div>
</Link>                            </li>
                          ))
                        : "fetching categories.."}
                    </ul>
                    {/* {JSON.stringify(category)} */}
                  </ModalBody>
                  <ModalFooter>
                    <a href="#" className="morecate-btn">
                      <i className="fa fa-bars"></i>More Categories
                    </a>
                  </ModalFooter>
                </div>
              </div>
            </Modal>
          </div>
          <Navbar bg="white" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="navbar__nav__link active">
                  <Link to="/" className="navbarlink">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link className="navbar__nav__link">
                  <Link to="/newproduct" className="navbarlink">
                    New Products
                  </Link>
                </Nav.Link>
                <Nav.Link className="navbar__nav__link">
                  <Link to="/featuredproduct" className="navbarlink">
                    Featured Products
                  </Link>
                </Nav.Link>
                <Nav.Link className="navbar__nav__link">
                  <Link to="/contact" className="navbarlink">
                    Contact Us
                  </Link>
                </Nav.Link>
                <Nav.Link className="navbar__nav__link">
                  <Link to="/aboutus" className="navbarlink">
                    About Us
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="catey__icon">
            <a
              href="#"
              className="cate__btn"
              data-toggle="modal"
              data-target="#category_model"
              title="Categories"
            >
              <i className="uil uil-apps"></i>
            </a>
          </div>
          <Cart
            isSidebarOpen={cartSidebar}
            onSidebarToggle={toggleCartSidebar}
          ></Cart>
          <div className="search__icon order-1">
            <a
              href="#"
              className="search__btn hover-btn"
              data-toggle="modal"
              data-target="#search_model"
              title="Search"
            >
              <i className="uil uil-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
