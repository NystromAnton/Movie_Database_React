import React from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import Plot from "./Plot";
import DirectorWrite from "./DirectorWrite";

import TheRockPic from "./pics/theRock.jpg";
import MovieNumbers from "./MovieNumbers";

import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

function Testing() {
  return (
    <Container>
      <div style={{ borderStyle: "solid", borderWidth: "1px" }}>
        <Row>
          <Table size="sm" borderless>
            <tbody>
              <tr>
                <td>PG13</td>
                <td>Rating</td>
                <td>Rating function</td>
              </tr>
              <tr>
                <td>Action, Comedy</td>
                <td> 120 min</td>
                <td>2019</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>
    </Container>
  );
}

export default Testing;
