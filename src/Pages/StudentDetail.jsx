import React from "react";
import { Modal, Button } from "react-bootstrap";

const StudentDetail = ({ student, show, handleClose }) => {
  if (!student) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Class:</strong> {student.class}
        </p>
        <p>
          <strong>Age:</strong> {student.age}
        </p>
        <p>
          <strong>Phone:</strong> {student.phone}
        </p>
        <p>
          <strong>Address:</strong> {student.address}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentDetail;
