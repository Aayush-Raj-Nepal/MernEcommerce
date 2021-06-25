import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../store/actions/auth";
import { HOME } from "../api/backend";
function Header({ sidebarToggleFunction }) {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    // return window.location.reload(true);
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">Subidhaonline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={sidebarToggleFunction}>
              <i className="fa fa-bars"></i>
            </Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              title={user.name ? user.name : "User"}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={logoutUser}>LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link href={HOME}>Visit Site <i className="fa fa-globe"></i> </Nav.Link>


          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
