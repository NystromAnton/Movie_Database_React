import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Title() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2}>
            <Button>Go back</Button>
          </Col>
          <Col xs={10}>
            <h2>Jumanji: The next level</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Title;
