// src/components/Dashboard.js
import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Container, Row, Col } from "react-bootstrap";
import { StudentContext } from "../contexts/StudentContext";
import StudentRegistration from "./StudentRegistration";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { students } = useContext(StudentContext);

  // Calculate class and age distributions
  const studentsPerClass = useMemo(() => {
    return students.reduce((acc, student) => {
      acc[student.class] = (acc[student.class] || 0) + 1;
      return acc;
    }, {});
  }, [students]);

  const studentsPerAge = useMemo(() => {
    return students.reduce((acc, student) => {
      acc[student.age] = (acc[student.age] || 0) + 1;
      return acc;
    }, {});
  }, [students]);

  // Chart data configurations
  const classChartData = {
    labels: Object.keys(studentsPerClass),
    datasets: [
      {
        label: "Number of Students per Class",
        data: Object.values(studentsPerClass),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const ageChartData = {
    labels: ["16", "17", "18"],
    datasets: [
      {
        label: "Number of Students by Age",
        data: [
          studentsPerAge[16] || 0,
          studentsPerAge[17] || 0,
          studentsPerAge[18] || 0,
        ],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Student Dashboard</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Students</Card.Title>
              <Card.Text>{students.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Students Per Class</Card.Title>
              <div style={{ height: "400px" }}>
                <Bar data={classChartData} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Students by Age</Card.Title>
              <div style={{ height: "400px" }}>
                <Bar data={ageChartData} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <Col>
          <StudentRegistration />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Dashboard;
