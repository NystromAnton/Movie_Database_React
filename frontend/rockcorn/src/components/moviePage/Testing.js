import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Plot from "./Plot";
import DirectorWrite from "./DirectorWrite";

import TheRockPic from "./pics/theRock.jpg";
import MovieNumbers from "./MovieNumbers";

import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

function Testing() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="d-none d-md-block">
            <Image src={TheRockPic} rounded />
          </Col>
          <Col>
            <MovieNumbers></MovieNumbers>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testing;
