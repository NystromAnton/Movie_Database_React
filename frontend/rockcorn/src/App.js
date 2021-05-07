import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Genre from "./components/Genre";
import MoviePage from "./components/MoviePage";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Genre} />
        <Route path='/movies' component={MovieCard} />
        <Route path='/movie' component={MoviePage} />
      </Switch>
    </Router>
  );
}

export default App;
