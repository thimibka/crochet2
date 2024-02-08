import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import cachecou1 from "../assets/snood/cachecou1.webp";
import cachecou2 from "../assets/snood/cachecou2.webp";
import cachecou3 from "../assets/snood/cachecou3.webp";
import cachecou4 from "../assets/snood/cachecou4.webp";

import chale1 from "../assets/chale/chale1.webp";
import chale2 from "../assets/chale/chale2.webp";

export default function SnoodNeckCoverChale() {
  const neckCoverCards = [
    {
      id: 1,
      name: cachecou1,
    },
    {
      id: 2,
      name: cachecou2,
    },
    {
      id: 3,
      name: cachecou3,
    },
    {
      id: 4,
      name: cachecou4,
    },

    {
      id: 1,
      name: chale1,
    },
    {
      id: 2,
      name: chale2,
    },
  ];

  return (
    <>
      <Container>
        <Row>
          {neckCoverCards.map((info) => (
            <Col key={info.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={info.name} />
              
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
