import React, { useState, useContext } from "react";
import { Table, Button, Form } from "react-bootstrap";
import StudentDetail from "./StudentDetail";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditStudentModal from "./EditStudentModal";
import { StudentContext } from "../Contexts/StudentContext";

const StudentList = () => {
  const { students, deleteStudent, editStudent } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseDetail = () => setShowDetailModal(false);
  const handleShowDetail = (student) => {
    setSelectedStudent(student);
    setShowDetailModal(true);
  };

  const handleShowDeleteModal = (id) => {
    setSelectedStudent(students.find((student) => student.id === id));
    setShowDeleteModal(true);
  };

  const handleShowEditModal = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const handleDeleteConfirm = () => {
    deleteStudent(selectedStudent.id);
    setShowDeleteModal(false);
    setSelectedStudent(null);
  };

  const handleEditConfirm = (updatedStudent) => {
    editStudent(updatedStudent);
    setShowEditModal(false);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student List</h2>

      <Form.Group controlId="search" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.class}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShowDetail(student)}
                    className="me-2"
                  >
                    View
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => handleShowEditModal(student)}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleShowDeleteModal(student.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <StudentDetail
        student={selectedStudent}
        show={showDetailModal}
        handleClose={handleCloseDetail}
      />

      <DeleteConfirmationModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleConfirm={handleDeleteConfirm}
      />

      <EditStudentModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        student={selectedStudent}
        handleUpdate={handleEditConfirm}
      />
    </div>
  );
};

export default StudentList;
