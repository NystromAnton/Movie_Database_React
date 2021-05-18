import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Table,
  Button,
  Modal,
} from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import { useState } from "react";

function MovieNumbers({ year, age, genre, avgRate, time }) {
  const [showing, setShowing] = useState(false);

  return (
    <div>
      <Modal size="sm" show={showing} onHide={() => setShowing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rate the movie</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
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
                  <td>
                    <Star style={{ marginRight: "5px" }}></Star> {avgRate}
                  </td>
                  <td>
                    <Button variant="light" onClick={() => setShowing(true)}>
                      Rate
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>{genre}</td>
                  <td> {time}</td>
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
              fontSize: "1.5em",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <Table borderless>
              <tbody>
                <tr>
                  <td>
                    <Star style={{ marginRight: "5px" }}></Star>
                    {avgRate}
                  </td>
                  <td>
                    <Button variant="light" onClick={() => setShowing(true)}>
                      Rate
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>{age}</td>
                  <td>{year}</td>
                </tr>
                <tr>
                  <td>{genre}</td>
                  <td> {time}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MovieNumbers;
