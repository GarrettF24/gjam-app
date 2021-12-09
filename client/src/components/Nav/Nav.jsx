import { NavLink } from "react-router-dom"
import "./Nav.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, NavDropdown } from "react-bootstrap"

export default function NavMenu(props) {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="sm"
      className="navbar-dark justify-content-center"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <NavDropdown title="products" id="products-dropdown">
          <NavDropdown.Item href="/">premium</NavDropdown.Item>
          <NavDropdown.Item href="/jams">jams list</NavDropdown.Item>
        </NavDropdown>
        <NavLink className="nav-link" to="/jams/new">
          create
        </NavLink>
        <NavLink className="nav-link" to="/about">
          about
        </NavLink>
        <NavDropdown title="account" id="products-dropdown">
          {props.user ? (
            <>
              <NavDropdown.Item href="/cart">cart</NavDropdown.Item>
              <NavDropdown.Item href="/profile">profile</NavDropdown.Item>
              <NavDropdown.Item href="/signout">sign out</NavDropdown.Item>
            </>
          ) : (
            <>
              <NavDropdown.Item href="/signin">sign in</NavDropdown.Item>
              <NavDropdown.Item href="/signup">sign up</NavDropdown.Item>
            </>
          )}
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}
