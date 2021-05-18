import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function DirectorWrite({ director, writer }) {
  return (
    <div>
      <Row>
        <Col xs={6} md={12}>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>Director</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {director}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={12}>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>Writer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {writer}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DirectorWrite;
