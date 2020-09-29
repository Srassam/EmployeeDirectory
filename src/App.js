import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./components/DirectSearch";
import EmployeeTable from "./components/EmployeeList";

function App() {
  return (
    <>
      <Nav />
      <Layout>
        <Row>
          <Col>
            <Search></Search>
          </Col>
        </Row>
        <Row>
          <Col>
            <EmployeeTable></EmployeeTable>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default App;
