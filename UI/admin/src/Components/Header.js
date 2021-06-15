import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import {logout} from "../store/actions/auth"
function Header({sidebarToggleFunction}) {
  const dispatch=useDispatch()
  const logoutUser=()=>{
    dispatch(logout())
    return window.location.reload(true)
  }
  const user=useSelector(state=>state.auth.user)
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Subidhaonline</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={sidebarToggleFunction}><i className="fa fa-bars"></i></Nav.Link>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/admins">Admins</Nav.Link>
      <NavDropdown title={user.name?user.name:"User"} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logoutUser}>LogOut</NavDropdown.Item>
      </NavDropdown>
    </Nav>
 
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
