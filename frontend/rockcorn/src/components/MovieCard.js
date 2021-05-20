import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ticket from "./ticket.png";
import jumanji from "./jumanji.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Star } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

function MovieCard(props) {
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const handleClick = (movieName) =>
    history.push({
      pathname: "/movie",
      movieName: movieName,
    });
  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/allMovies");
    setMovies(response.data);
  }, []);

  if (!movies) {
    return null;
  }
  return (
    <div align="center" className="my-4">
      <Card
        border="none"
        style={{
          border: "none",
          width: "18rem",
          color: "black",
          position: "relative",
          right: "7rem",
          cursor: "pointer",
        }}
        onClick={() => handleClick(props.movie.name)}
      >
        <Card.Body>
          <Card.Img src={ticket} style={{ width: "30rem", height: "10rem" }} />
          <Card.ImgOverlay style={{ width: "30rem", height: "10rem" }}>
            <Container align="left">
              <Row
                style={{
                  top: "1rem",
                  left: "2rem",
                  position: "relative",
                }}
              >
                <Col xs={2}>
                  <Image
                    class="my-2 ml-5"
                    src={jumanji}
                    style={{
                      width: "4rem",
                      height: "4rem",
                      top: "1rem",
                      left: "5rem",
                    }}
                    rounded
                  />
                  <Row
                    style={{
                      width: "6rem",
                      position: "relative",
                      top: "1rem",
                    }}
                  >
                    <Card.Title
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <Star />
                      <span
                        style={{
                          position: "relative",
                          top: "2px",
                        }}
                      >
                        {" "}
                        {props.movie.rating}
                      </span>
                    </Card.Title>
                  </Row>
                </Col>
                <Col
                  xs={8}
                  style={{
                    position: "relative",
                    left: "2.5rem",
                  }}
                >
                  <Row>
                    <Col>
                      <Card.Title>{props.movie.name}</Card.Title>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      fontSize: "11px",
                    }}
                  >
                    <Col>
                      <Card.Text>{props.movie.genre}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>{props.movie.year}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>{props.movie.age}</Card.Text>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    <Card.Text>{props.movie.desc}</Card.Text>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
