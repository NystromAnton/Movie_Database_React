import Card from "react-bootstrap/Card";
import React from "react";
import axios from "axios";
import CustomButton from "./CustomButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: null, width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    // GET request using axios with async/await
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const response = await axios.get("http://localhost:5000/allMovies");
    this.setState({ movies: response.data });
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
    const width = this.state.width;
    if (!movies) {
      return null;
    }
    if (width < 600) {
      return (
        <div align="center" className="my-4">
          {this.state.movies.map(function (movie, index) {
            return (
              <Row>
                <Col>
                  <Card key={index} style={{ width: "18rem", color: "red" }}>
                    <Card.Body>
                      <Card.Title>{movie.name}</Card.Title>
                      <Card.Text>{movie.year}</Card.Text>
                      <Card.Text>{movie.age}</Card.Text>
                      <Card.Text>{movie.genre}</Card.Text>
                      <CustomButton
                        route="/movies"
                        text="Gå till genre"
                      ></CustomButton>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
      );
    } else {
      return (
        <div align="center" className="my-4">
          <Container>
            <Row xs={1} md={2}>
              {this.state.movies.map(function (movie, index) {
                return (
                  <Col key={index}>
                    <Card style={{ width: "18rem", color: "red" }}>
                      <Card.Body>
                        <Card.Title>{movie.name}</Card.Title>
                        <Card.Text>{movie.year}</Card.Text>
                        <Card.Text>{movie.age}</Card.Text>
                        <Card.Text>{movie.genre}</Card.Text>
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
        </div>
      );
    }
  }
}

export default Genre;
