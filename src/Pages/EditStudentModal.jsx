// src/EditStudentModal.js
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditStudentModal = ({ show, handleClose, student, handleUpdate }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    class: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (student) {
      setFormData(student); // Prefill form data with the selected student's details
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData); // Call the update function
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formClass" className="mt-3">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAge" className="mt-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mt-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAddress" className="mt-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Update Student
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditStudentModal;
