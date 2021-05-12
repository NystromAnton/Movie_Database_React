import React from "react";
import Title from "./Title";
import MovieInfo from "./MovieInfo";
import MovieTrailer from "./MovieTrailer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CastAndCrew from "./CastAndCrew";

function MoviePage() {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Container>
        <Row>
          <Title></Title>
        </Row>
        <Row>
          <MovieInfo></MovieInfo>
        </Row>
        <Row>
          <MovieTrailer></MovieTrailer>
        </Row>
        <Row>
          <CastAndCrew></CastAndCrew>
        </Row>
      </Container>
    </div>
  );
}

export default MoviePage;
