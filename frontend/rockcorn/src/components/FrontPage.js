import Card from "react-bootstrap/Card";
import React from "react";
import axios from "axios";
import CustomButton from "./CustomButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MovieCard from "./MovieCard";

import Container from "react-bootstrap/Container";
class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: null, genres: null, width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    // GET request using axios with async/await
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const movies = await axios.get("http://localhost:5000/allMovies");
    const genres = await axios.get("http://localhost:5000/allGenres");

    this.setState({ movies: movies.data, genres: genres.data });
    console.log(this.state.movies);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleClick = () => {
    console.log("Click happened");
  };

  render() {
    const movies = this.state.movies;
    const genres = this.state.genres;

    const width = this.state.width;
    if (!movies && !genres) {
      return null;
    }
    if (width < 600) {
      return (
        <div align="center" className="my-4">
          <Tabs
            className="justify-content-center my-3"
            defaultActiveKey="Top"
            variant="pills"
          >
            <Tab eventKey="Top" title="Top list">
              <Container>
                <Row xs={1} md={2}>
                  {this.state.movies.map(function (movie, index) {
                    return (
                      <Col key={index}>
                        <MovieCard movie={movie}></MovieCard>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="genre" title="Genre">
              <Container>
                <Row xs={1} md={2}>
                  {this.state.genres.map(function (genre, index) {
                    return (
                      <Col key={index}>
                        <Card style={{ width: "18rem", color: "red" }}>
                          <Card.Body>
                            <Card.Title>{genre.name}</Card.Title>
                            <CustomButton
                              route="/movies"
                              text="Gå till genre"
                            ></CustomButton>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </div>
      );
    } else {
      return (
        <div align="center" className="my-4">
          <Tabs
            className="justify-content-center my-3"
            defaultActiveKey="Top"
            variant="pills"
          >
            <Tab eventKey="Top" title="Top list">
              <Container>
                <Row xs={1} md={2}>
                  {this.state.movies.map(function (movie, index) {
                    return (
                      <Col key={index}>
                        <MovieCard movie={movie}></MovieCard>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="Genre" title="Genre">
              <Container>
                <Row xs={1} md={2}>
                  {this.state.genres.map(function (genre, index) {
                    return (
                      <Col key={index}>
                        <Card style={{ width: "18rem", color: "red" }}>
                          <Card.Body>
                            <Card.Title>{genre.name}</Card.Title>
                            <CustomButton
                              route="/movies"
                              text="Gå till genre"
                            ></CustomButton>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </div>
      );
    }
  }
}

export default FrontPage;
