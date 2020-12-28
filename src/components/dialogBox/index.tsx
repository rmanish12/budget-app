import React from "react";

import { Modal, Button } from "react-bootstrap";
import "../../index.css";

import { IDialogBoxComponentProps } from "../types"

const dialogBox: React.FC<IDialogBoxComponentProps> = (props): JSX.Element => {
  const { heading, message, level, onHide } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className={
            level === "success"
              ? "success-background-color"
              : "error-background-color"
          }
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter" className="italic">
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="italic">{message}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            onClick={onHide}
            className={
              level === "success"
                ? "dialog-success-button"
                : "dialog-error-button"
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default dialogBox;
