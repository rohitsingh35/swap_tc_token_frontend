import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Matricsview from "../Component/Matricsview";
const Matrics = () => {
  return (
    <div className="home-layout">
      <Container fluid>
        <Row>
          <Header />
          <Matricsview />
          <Footer />
        </Row>
      </Container>
    </div>
  );
};
export default Matrics;
