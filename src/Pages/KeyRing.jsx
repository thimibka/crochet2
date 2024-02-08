import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import beignet from "../assets/porteclef/beignet.webp";
import cerise from "../assets/porteclef/cerise.webp";
import donuts from "../assets/porteclef/donuts.webp";
import ensemble from "../assets/porteclef/ensemble.webp";
import ensemblemontage from "../assets/porteclef/ensemblemontage.webp";
import oreo from "../assets/porteclef/oreo.webp";
import pasteque from "../assets/porteclef/pasteque.webp";
import tassegrise from "../assets/porteclef/tassegrise.webp";
import tassejaune from "../assets/porteclef/tassejaune.webp";
import tong from "../assets/porteclef/tong.webp";

export default function KeyRing() {
  const portecleCards = [
    {
      id: 1,
      name: beignet,
    },
    {
      id: 2,
      name: cerise,
    },
    {
      id: 3,
      name: donuts,
    },
    {
      id: 4,
      name: ensemble,
    },
    {
      id: 5,
      name: ensemblemontage,
    },
    {
      id: 6,
      name: oreo,
    },
    {
      id: 7,
      name: pasteque,
    },
    {
      id: 8,
      name: tassegrise,
    },
    {
      id: 9,
      name: tassejaune,
    },
    {
      id: 10,
      name: tong,
    },
    {
      id: 11,
      name: beignet,
    },
  ];
  return (
    <>
      <>
        <Container>
          <Row>
            {portecleCards.map((info) => (
              <Col key={info.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={info.name} />
                
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    </>
  );
}
