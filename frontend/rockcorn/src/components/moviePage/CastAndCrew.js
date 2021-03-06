import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

import TheRockPic from "./pics/theRock.jpg";

const CastAndCrew = ({ CandC }) => {
  return (
    <div>
      <Row>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Cast & Crew
        </h3>
        {CandC.map((c) => (
          <Col xs={6} md={4}>
            <Card>
              <Card.Img variant="top" src={c.picture} />
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CastAndCrew;
