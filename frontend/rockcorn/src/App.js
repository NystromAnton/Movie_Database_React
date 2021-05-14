import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Genre from "./components/Genre";
import MoviePage from "./components//moviePage/MoviePage";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Testing from "./components/moviePage/Testing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Genre} />
        <Route path="/movies" component={MovieCard} />
        <Route path="/movie" component={MoviePage} />
        <Route path="/testing" component={Testing} />
      </Switch>
    </Router>
  );
}

export default App;
