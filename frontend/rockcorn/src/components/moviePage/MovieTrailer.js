import React from "react";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdbreact";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function MovieTrailer() {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={"https://www.youtube.com/embed/2QKg5SZ_35I"}
        frameBorder="0"
      />
    </div>
  );
}

export default MovieTrailer;
