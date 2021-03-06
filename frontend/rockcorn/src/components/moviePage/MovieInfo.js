import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import MovieNumbers from "./MovieNumbers";
import TheRockPic from "./pics/theRock.jpg";

//"https://i.pinimg.com/originals/3d/75/61/3d75610e80b82baabfe224ee0e7b3ac7.jpg"

function MovieInfo({ year, age, genre, avgRate, time, headPic }) {
  console.log(time);
  return (
    <div style={{ marginBottom: "15px" }}>
      <Row>
        <Col md={{ span: 6 }}>
          <Image
            src={headPic}
            rounded
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Col>
        <Col xs={12} md={6}>
          <MovieNumbers
            year={year}
            age={age}
            genre={genre}
            avgRate={avgRate}
            time={time}
          ></MovieNumbers>
        </Col>
      </Row>
    </div>
  );
}

export default MovieInfo;
