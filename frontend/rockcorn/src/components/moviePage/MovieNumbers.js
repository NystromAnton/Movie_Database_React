import React from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";

function MovieNumbers({ year, age, genre, avgRate }) {
  console.log(avgRate);
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: " 25px",
      }}
    >
      <Container className="d-block d-md-none">
        <Row style={{ fontFamily: "Roboto", fontSize: "1em" }}>
          <Table borderless>
            <tbody>
              <tr>
                <td>{age}</td>
                <td>{avgRate}</td>
                <td>-----</td>
              </tr>
              <tr>
                <td>{genre}</td>
                <td> 120 min</td>
                <td>{year}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      <Container className="d-none d-md-block">
        <Row
          style={{
            fontFamily: "Roboto",
            fontSize: "2em",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <Table borderless>
            <tbody>
              <tr>
                <td>{avgRate}</td>
                <td>Rating function</td>
              </tr>
              <tr>
                <td>{age}</td>
                <td>{year}</td>
              </tr>
              <tr>
                <td>{genre}</td>
                <td> 120 min</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default MovieNumbers;
