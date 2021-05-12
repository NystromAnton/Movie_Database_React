import React from "react";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdbreact";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function MovieTrailer() {
  return (
    <div>
      <Container>
        <Row>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/2QKg5SZ_35I&ab_channel=SonyPicturesEntertainment"
              allowFullScreen
            ></iframe>
          </div>
        </Row>
        <Row>
          <p>
            In Jumanji: The Next Level, the gang is back but the game has
            changed. As they return to rescue one of their own, the players will
            have to brave parts unknown from arid deserts to snowy mountains, to
            escape the world's most dangerous game.
          </p>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: "#E5E5E5" }}>
              <Card.Body>
                <Card.Title>Director</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  The Rock
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ backgroundColor: "#E5E5E5" }}>
              <Card.Body>
                <Card.Title>Writer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  The Stone
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieTrailer;
