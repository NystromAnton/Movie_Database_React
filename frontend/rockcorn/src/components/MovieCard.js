import Card from "react-bootstrap/Card";
import React from "react";
import axios from "axios";
import CustomButton from "./CustomButton";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: null };
  }
  async componentDidMount() {
    // GET request using axios with async/await
    const response = await axios.get("http://localhost:5000/allMovies");
    this.setState({ movies: response.data });
    console.log(this.state.movies);
  }
  render() {
    const movies = this.state.movies;
    if (!movies) {
      return null;
    }
    return (
      <div align='center' className='my-4'>
        {this.state.movies.map(function (movie, index) {
          return (
            <Card key={index} style={{ width: "18rem", color: "red" }}>
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.year}</Card.Text>
                <Card.Text>{movie.age}</Card.Text>
                <Card.Text>{movie.genre}</Card.Text>
                <CustomButton
                  info={movie}
                  route='/movie'
                  text='Gå till Film'
                ></CustomButton>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default MovieCard;
