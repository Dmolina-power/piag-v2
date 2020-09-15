import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

function Mow() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>PIAG MUSEUM ON WHEELS</h1>
        <p>
          If people can’t go to the museum...the museum will go to the people!
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Mow;
