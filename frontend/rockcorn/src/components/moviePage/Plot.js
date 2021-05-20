import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Plot({ desc }) {
  return (
    <div>
      <Row>
        <Col>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "1.2em",
            }}
          >
            {desc}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Plot;
