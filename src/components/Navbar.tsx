import React from "react";
import { Navbar as NavbarBs, Nav } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { ShoppingCartValues } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { cartQuantity, openCart } = ShoppingCartValues();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            className="rounded-circle"
            variant="outline-primary"
            style={{ position: "relative" }}
          >
            <HiShoppingCart />
            <div
              style={{
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute",
                color: "white",
                transform: "translate(25%,-15%)",
              }}
              className="rounded-circle bg-danger"
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
