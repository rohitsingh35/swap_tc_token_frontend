import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import FinanceTable from "../Component/Financetable";
import Navigationflow from "../Component/Navingationflow";
const Home = () => {
  return (
    <div className="home-layout">
      <Container fluid>
        <Row>
          <Header />
          <Navigationflow/>
          <FinanceTable />

          <Footer />
        </Row>
      </Container>
    </div>
  );
};
export default Home;
