import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

import TheRockPic from "./pics/theRock.jpg";

const CastAndCrew = () => {
  //const [castCrew, setCastCrew] = useState(["Dave", "The rock", "the dude"]);

  const tempC = [
    {
      key: 1,
      name: "The rock",
      picture: "Pic",
    },
    {
      key: 2,
      name: "The stone",
      picture: "Pic",
    },
    {
      key: 3,
      name: "The dude",
      picture: "Pic",
    },
    {
      key: 4,
      name: "Big Rock",
      picture: "Pic",
    },
    {
      key: 5,
      name: "Small rock",
      picture: "Pic",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <h3>Cast & Crew</h3>
          {tempC.map((c) => (
            <Col key={c.key} xs={6} md={4}>
              <Card style={{ backgroundColor: "#E5E5E5" }}>
                <Card.Img variant="top" src={TheRockPic} />
                <Card.Body>
                  <Card.Title>{c.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CastAndCrew;
