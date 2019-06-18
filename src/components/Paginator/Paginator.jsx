//Libraries
import React from "react";
import { Pagination } from "react-bootstrap";

const Paginator = props => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= props.size; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default Paginator;
