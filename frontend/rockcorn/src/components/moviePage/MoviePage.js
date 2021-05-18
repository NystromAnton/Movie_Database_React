import React from "react";
import Title from "./Title";
import MovieInfo from "./MovieInfo";
import MovieTrailer from "./MovieTrailer";
import { Container, Row, Col } from "react-bootstrap";
import CastAndCrew from "./CastAndCrew";
import Plot from "./Plot";
import DirectorWrite from "./DirectorWrite";

import { useEffect, useState } from "react";

const movieName = "Jumanji: Welcome to the Jungle";

function MoviePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movie/${movieName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setMovieData(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Still loading data</div>;
  } else {
    console.log(movieData[0].CandC);
    return (
      <div>
        <Container className="d-block d-lg-none">
          <Row>
            <Title title={movieData[0].name}></Title>
          </Row>
          <Row>
            <MovieInfo
              year={movieData[0].year}
              age={movieData[0].age}
              genre={movieData[0].genre}
              avgRate={movieData[0].averageRating}
              time={movieData[0].time}
            ></MovieInfo>
          </Row>
          <Row>
            <Col md={12}>
              <MovieTrailer trailerID={movieData[0].trailerID}></MovieTrailer>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xs={12} md={8}>
              <Plot desc={movieData[0].desc}></Plot>
            </Col>
            <Col xs={12} md={4}>
              <DirectorWrite
                director={movieData[0].director}
                writer={movieData[0].writer}
              ></DirectorWrite>
            </Col>
          </Row>
          <Row>
            <CastAndCrew CandC={movieData[0].CandC}></CastAndCrew>
          </Row>
        </Container>
        <Container fluid className="d-none d-lg-block">
          <Row>
            <Col lg={6}>
              <MovieTrailer trailerID={movieData[0].trailerID}></MovieTrailer>
              <Row>
                <Col lg={12} style={{ marginTop: "15px" }}>
                  <CastAndCrew CandC={movieData[0].CandC}></CastAndCrew>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 6 }}>
              <Container>
                <div
                  style={{
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "15px",
                  }}
                >
                  <Row>
                    <Title title={movieData[0].name}></Title>
                  </Row>
                  <Row>
                    <MovieInfo
                      year={movieData[0].year}
                      age={movieData[0].age}
                      genre={movieData[0].genre}
                      avgRate={movieData[0].averageRating}
                      time={movieData[0].time}
                    ></MovieInfo>
                  </Row>
                  <Row style={{ marginLeft: "5px", marginRight: "5px" }}>
                    <Col lg={{ span: 6 }}>
                      <Plot desc={movieData[0].desc}></Plot>
                    </Col>
                    <Col lg={{ span: 4, offset: 2 }}>
                      <DirectorWrite
                        director={movieData[0].director}
                        writer={movieData[0].writer}
                      ></DirectorWrite>
                    </Col>
                  </Row>
                </div>
              </Container>
              <Row>
                <Col lg={{ span: 12 }}>Photos</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MoviePage;
