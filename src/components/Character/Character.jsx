//Libraries
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Character = props => {
  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Body>
        <li className="media">
          <img
            className="mr-3"
            src={props.data.sprites ? props.data.sprites.front_default : ""}
            alt="..."
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              {props.data.name
                ? props.data.name.charAt(0).toUpperCase() +
                  props.data.name.slice(1)
                : ""}
            </h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </li>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Character;
