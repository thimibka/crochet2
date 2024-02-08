import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import chausson1 from "../assets/chaussons-bébé/chausson1.webp";
import chausson2 from "../assets/chaussons-bébé/chausson2.webp";

export default function BabySlipper() {
  const chaussonCards = [
    {
      id: 1,
      name: chausson1,
    },
    {
      id: 2,
      name: chausson2,
    },
  ];

  return (
    <>
      <>
        <Container>
          <Row>
            {chaussonCards.map((info) => (
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
