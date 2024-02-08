import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import plume from "../assets/marque-page/plume.webp";
import plumes from "../assets/marque-page/plumes.webp";
import sourisecrase from "../assets/marque-page/sourisecrase.webp";
import sourismp from "../assets/marque-page/sourismp.webp";
import sourismpplume from "../assets/marque-page/sourismpplume.webp";

export default function Bookmark() {
  const cardsInfos = [
    {
      id: 1,
      text: "description à venir",
      name: plume,
    },
    {
      id: 2,
      text: "description à venir",
      name: plumes,
    },
    {
      id: 3,
      text: "description à venir",
      name: sourisecrase,
    },
    {
      id: 4,
      text: "description à venir",
      name: sourismp,
    },
    {
      id: 5,
      text: "description à venir",
      name: sourismpplume,
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
