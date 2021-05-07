import Card from "react-bootstrap/Card";
import React from "react";
import axios from "axios";
class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: null };
  }

  render() {
    const movies = this.state.movies;
    if (!movies) {
      return null;
    }
    return (
      <div align='center' class='my-4'>
        <Card style={{ width: "18rem", color: "red" }}>
          <Card.Body>
            <Card.Title>{this.props.info.name}</Card.Title>
            <Card.Text>{this.props.info.year}</Card.Text>
            <Card.Text>{this.props.info.age}</Card.Text>
            <Card.Text>{this.props.info.genre}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MoviePage;
