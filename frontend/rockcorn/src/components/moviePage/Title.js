import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Title.css";
import { ArrowLeft } from "react-bootstrap-icons";

function Title() {
  return (
    <div>
      <Row>
        <Col xs={2}>
          <Button
            style={{
              width: "100%",
              height: "100%",
              color: "black",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <ArrowLeft
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Button>
        </Col>
        <Col xs={10}>
          <h2
            style={{
              fontSize: "5vw",
              fontFamily: "Red Hat Display",
              textAlign: "center",
              lineHeight: "100%",
              verticalAlign: "middle",
            }}
          >
            Jumanji: The next level
          </h2>
        </Col>
      </Row>
    </div>
  );
}

export default Title;
