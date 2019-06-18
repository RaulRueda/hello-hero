//Libraries
import React from "react";
import { Pagination } from "react-bootstrap";

const Paginator = props => {
  let items = [];
  for (let number = 1; number <= props.size; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.activePage}
        onClick={() => props.clicked(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default Paginator;
