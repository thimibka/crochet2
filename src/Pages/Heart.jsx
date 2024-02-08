import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import coeur1 from "../assets/coeur/coeur1.webp";
import coeur2 from "../assets/coeur/coeur2.webp";
import coeur3 from "../assets/coeur/coeur3.webp";
import coeur4 from "../assets/coeur/coeur4.webp";
import coeur5 from "../assets/coeur/coeur5.webp";

export default function Heart() {
  const cardsInfos = [
    {
      id: 1,
      name: coeur1,
    },
    {
      id: 2,
      name: coeur2,
    },
    {
      id: 3,
      name: coeur3,
    },
    {
      id: 4,
      name: coeur4,
    },
    {
      id: 5,
      name: coeur5,
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {cardsInfos.map((info) => (
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
