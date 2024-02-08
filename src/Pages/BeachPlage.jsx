import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import sacplage1 from "../assets/sac-plage/sacplage1.webp";
import sacplage2 from "../assets/sac-plage/sacplage2.webp";
import sacplage3 from "../assets/sac-plage/sacplage3.webp";
import sacplage4 from "../assets/sac-plage/sacplage4.webp";
import sacplage5 from "../assets/sac-plage/sacplage5.webp";
import sacplage6 from "../assets/sac-plage/sacplage6.webp";

export default function BeachPlage() {
  const sacCards = [
    {
      id: 1,
      name: sacplage1,
    },
    {
      id: 2,
      name: sacplage2,
    },
    {
      id: 3,
      name: sacplage3,
    },
    {
      id: 4,
      name: sacplage4,
    },
    {
      id: 5,
      name: sacplage5,
    },
    {
      id: 6,
      name: sacplage6,
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {sacCards.map((info) => (
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
