import React from "react";

import { Stack, Button } from "react-bootstrap";
import { ShoppingCartValues } from "../context/ShoppingCartContext";
import storeItems from "../data/Items.json";
import { formatCurrency } from "../Utilities/FormatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = ShoppingCartValues();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) {
    return null;
  }
  return (
    <>
      <Stack
        direction="horizontal"
        className="d-flex align-items-center"
        gap={2}
      >
        <img
          src={item?.imgUrl}
          style={{ height: "75px", width: "125px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          onClick={() => removeItem(id)}
          variant="outline-danger"
          size="sm"
        >
          &times;
        </Button>
      </Stack>
    </>
  );
};

export default CartItem;
