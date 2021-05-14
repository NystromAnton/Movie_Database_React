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
      <Container style={{ padding: "5%" }} className="d-block d-lg-none">
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
      <Container fluid className="d-none d-lg-block">
        <Row>
          <Col lg={6}>
            <MovieTrailer></MovieTrailer>
          </Col>
          <Col lg={6}>
            <Container>
              <Row>
                <Title></Title>
              </Row>
              <Row>
                <MovieInfo></MovieInfo>
              </Row>
              <Row>
                <Col lg={6}>
                  <Plot></Plot>
                </Col>
                <Col lg={6}>
                  <DirectorWrite></DirectorWrite>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <CastAndCrew></CastAndCrew>
          </Col>
          <Col lg={6}>Photos</Col>
        </Row>
      </Container>
    </div>
  );
}

export default MoviePage;
