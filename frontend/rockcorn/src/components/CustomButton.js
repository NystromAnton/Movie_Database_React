import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const CustomButton = (props) => {
  const history = useHistory();
  const handleClick = (route) => history.push(route);

  return (
    <Button variant='primary' onClick={() => handleClick(props.route)}>
      {props.text}
    </Button>
  );
};

export default CustomButton;
