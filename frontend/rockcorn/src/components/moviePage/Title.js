import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Title.css";

function Title({ title }) {
  return (
    <div>
      <Row>
        <Col xs={12}>
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
