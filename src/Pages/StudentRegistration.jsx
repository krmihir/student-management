import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { StudentContext } from "../Contexts/StudentContext";

const StudentRegistration = () => {
  const { addStudent } = useContext(StudentContext);
  const [errors, setErrors] = useState({}); // Initialize as an empty object
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[a-zA-Z\s]{3,50}$/;
    const classPattern = /^[1-9][0-9]?$/;
    const agePattern = /^(16|17|18)$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10}$/;
    const addressPattern = /^.{5,100}$/;

    if (!namePattern.test(formData.name))
      newErrors.name = "Enter a valid name (3-50 characters).";
    if (!classPattern.test(formData.class))
      newErrors.class = "Enter a valid class (1-99).";
    if (!agePattern.test(formData.age))
      newErrors.age = "Age must be 16, 17, or 18.";
    if (!emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!phonePattern.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!addressPattern.test(formData.address))
      newErrors.address = "Address must be 5-100 characters.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addStudent(formData); // Add student to list
      setFormData({
        name: "",
        class: "",
        age: "",
        email: "",
        phone: "",
        address: "",
      });
      setErrors({});
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Student Registration</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter student's name"
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formClass" className="mt-3">
                  <Form.Label>Class</Form.Label>
                  <Form.Control
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    placeholder="Enter student's class"
                    isInvalid={!!errors.class}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.class}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAge" className="mt-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter student's age"
                    isInvalid={!!errors.age}
                    min="16"
                    max="18"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.age}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter student's email"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhone" className="mt-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter student's phone number"
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAddress" className="mt-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter student's address"
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4 w-100">
                  Register Student
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentRegistration;
