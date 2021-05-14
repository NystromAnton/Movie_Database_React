import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import MovieNumbers from "./MovieNumbers";
import TheRockPic from "./pics/theRock.jpg";

function MovieInfo() {
  return (
    <div>
      <Row>
        <Col md={6} className="d-none d-md-block">
          <Image src={TheRockPic} rounded />
        </Col>
        <Col xs={12} md={6}>
          <MovieNumbers></MovieNumbers>
        </Col>
      </Row>
    </div>
  );
}

export default MovieInfo;
