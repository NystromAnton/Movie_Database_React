import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MovieInfo() {
  const lock = true;
  return (
    <div>
      {lock ? (
        <Container>
          <Row>
            <Col xs={4}>PG13</Col>
            <Col xs={4}>Rating</Col>
            <Col xs={4}>Rate function</Col>
          </Row>
          <Row>
            <Col xs={4}>Genres</Col>
            <Col xs={4}>Play time</Col>
            <Col xs={4}>Year</Col>
          </Row>
        </Container>
      ) : (
        <div>HEJSAN</div>
      )}
    </div>
  );
}

export default MovieInfo;
