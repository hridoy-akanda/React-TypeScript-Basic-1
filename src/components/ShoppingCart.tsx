import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { ShoppingCartValues } from "../context/ShoppingCartContext";
import { formatCurrency } from "../Utilities/FormatCurrency";
import CartItem from "./cartItem";
import storeItems from "../data/Items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = ShoppingCartValues();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="ms-auto fs-5 fw-bold">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, currItem) => {
                const item = storeItems.find((i) => i.id === currItem.id);
                return total + currItem.quantity * (item?.price || 0);
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
