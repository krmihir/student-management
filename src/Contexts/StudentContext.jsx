import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/students.json")
      .then((response) => setStudents(response.data || []))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const editStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent, editStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
