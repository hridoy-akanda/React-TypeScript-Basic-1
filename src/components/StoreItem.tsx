import React from "react";
import { Card, Button } from "react-bootstrap";
import { ShoppingCartValues } from "../context/ShoppingCartContext";
import { formatCurrency } from "../Utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItem,
  } = ShoppingCartValues();
  let quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span className="text-muted ms-2">{formatCurrency(price)}</span>
        </Card.Title>
        {quantity === 0 ? (
          <Button
            className="w-100"
            onClick={() => {
              increaseCartQuantity(id);
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <div className="d-flex gap-2 flex-column align-items-center">
            <div className="d-flex gap-2">
              <Button
                onClick={() => {
                  decreaseCartQuantity(id);
                }}
              >
                -
              </Button>
              <div>
                <span className="fs-3">{quantity}</span>in Cart
              </div>
              <Button
                onClick={() => {
                  increaseCartQuantity(id);
                }}
              >
                +
              </Button>
            </div>
            <div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  removeItem(id);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
