import React from "react";

import { Modal, Button } from "react-bootstrap";

const dialogBox = (props) => {
  const { heading, message } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>{message}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default dialogBox;
