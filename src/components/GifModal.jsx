import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const GifModal = ({ title, url }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="outline-pink" variant="primary" onClick={handleShow}>
        Expand
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-grid">
          <div className="card">
              <img src={url} alt="gif" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

GifModal.defaultProps = {
  title: 'Gif title',
  url: '...'
}