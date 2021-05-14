import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function MovieNumbers() {
  return (
    <div>
      <Row style={{ fontFamily: "Roboto" }}>
        <Col xs={4} md={6}>
          PG13
        </Col>
        <Col xs={4} md={6}>
          Ratin
        </Col>
        <Col xs={4} md={6}>
          Rating function
        </Col>
        <Col xs={4} md={6}>
          Action, Comedy
        </Col>
        <Col xs={4} md={6}>
          120 min
        </Col>
        <Col xs={4} md={6}>
          2019
        </Col>
      </Row>
    </div>
  );
}

export default MovieNumbers;
