import React from "react";
import StoreItem from "../components/StoreItem";
import { Row, Col } from "react-bootstrap";

import storeItems from "../data/Items.json";

const Store = () => {
  return (
    <Row xs={1} lg={3} md={2}>
      {storeItems.map((item) => {
        return (
          <Col key={item.id} style={{ margin: ".65rem 0" }}>
            <StoreItem {...item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Store;
