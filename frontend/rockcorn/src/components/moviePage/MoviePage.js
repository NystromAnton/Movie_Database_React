import React from "react";
import Title from "./Title";
import MovieInfo from "./MovieInfo";
import MovieTrailer from "./MovieTrailer";
import { Container, Row, Col } from "react-bootstrap";
import CastAndCrew from "./CastAndCrew";
import Plot from "./Plot";
import DirectorWrite from "./DirectorWrite";

function MoviePage() {
  return (
    <div>
      <Container style={{ padding: "5%" }}>
        <Row>
          <Title></Title>
        </Row>
        <Row>
          <MovieInfo></MovieInfo>
        </Row>
        <Row>
          <Col md={12}>
            <MovieTrailer></MovieTrailer>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Plot></Plot>
          </Col>
          <Col xs={12} md={4}>
            <DirectorWrite></DirectorWrite>
          </Col>
        </Row>
        <Row>
          <CastAndCrew></CastAndCrew>
        </Row>
      </Container>
    </div>
  );
}

export default MoviePage;
