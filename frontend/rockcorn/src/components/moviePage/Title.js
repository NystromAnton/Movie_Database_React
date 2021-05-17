import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Title.css";
import { ArrowLeft } from "react-bootstrap-icons";

function Title({ title }) {
  return (
    <div>
      <Row>
        <Col xs={2}>
          <Button
            style={{
              color: "black",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
            size={"lg"}
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
              fontSize: "2em",
              fontFamily: "Red Hat Display",
              textAlign: "center",
              lineHeight: "100%",
              verticalAlign: "middle",
            }}
          >
            {title}
          </h2>
        </Col>
      </Row>
    </div>
  );
}

export default Title;
