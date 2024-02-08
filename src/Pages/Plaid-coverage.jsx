
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";import couverture1 from "../assets/couvertures/couverture1.webp";
import couverture2 from "../assets/couvertures/couverture2.webp";
import couverture3 from "../assets/couvertures/couverture3.webp";
import couverture4 from "../assets/couvertures/couverture4.webp";
import couverture5 from "../assets/couvertures/couverture5.webp";
import couverture6 from "../assets/couvertures/couverture6.webp";
import couverture7 from "../assets/couvertures/couverture7.webp";
import couverture8 from "../assets/couvertures/couverture8.webp";
import couverture9 from "../assets/couvertures/couverture9.webp";
import couverture10 from "../assets/couvertures/couverture10.webp";
import couverture11 from "../assets/couvertures/couverture11.webp";
import couverture12 from "../assets/couvertures/couverture12.webp";
import couverture13 from "../assets/couvertures/couverture13.webp";
import couverture14 from "../assets/couvertures/couverture14.webp";
import couverture15 from "../assets/couvertures/couverture15.webp";
import couverture16 from "../assets/couvertures/couverture16.webp";
import plaid1 from "../assets/plaid/plaid1.webp";
import plaid2 from "../assets/plaid/plaid2.webp";
import plaid3 from "../assets/plaid/plaid3.webp";
import plaid4 from "../assets/plaid/plaid4.webp";
import plaid5 from "../assets/plaid/plaid5.webp";
import plaid6 from "../assets/plaid/plaid6.webp";
import plaid7 from "../assets/plaid/plaid7.webp";
import plaid8 from "../assets/plaid/plaid8.webp";
import plaid9 from "../assets/plaid/plaid9.webp";
import plaid10 from "../assets/plaid/plaid10.webp";
import plaid11 from "../assets/plaid/plaid11.webp";

export default function PlaidCoverage() {
  const plaidCoverageCards = [
    {
      id: 1,
      name: couverture1,
    },
    {
      id: 2,
      name: couverture2,
    },
    {
      id: 3,
      name: couverture3,
    },
    {
      id: 4,
      name: couverture4,
    },
    {
      id: 5,
      name: couverture5,
    },
    {
      id: 6,
      name: couverture6,
    },
    {
      id: 7,
      name: couverture7,
    },
    {
      id: 8,
      name: couverture8,
    },
    {
      id: 9,
      name: couverture9,
    },
    {
      id: 10,
      name: couverture10,
    },
    {
      id: 11,
      name: couverture11,
    },
    {
      id: 12,
      name: couverture12,
    },
    {
      id: 13,
      name: couverture13,
    },
    {
      id: 14,
      name: couverture14,
    },
    {
      id: 15,
      name: couverture15,
    },
    {
      id: 16,
      name: couverture16,
    },
    {
      id: 17,
      name: plaid1,
    },
    {
      id: 18,
      name: plaid2,
    },
    {
      id: 19,
      name: plaid3,
    },
    {
      id: 20,
      name: plaid4,
    },
    {
      id: 21,
      name: plaid5,
    },
    {
      id: 22,
      name: plaid6,
    },
    {
      id: 23,
      name: plaid7,
    },
    {
      id: 24,
      name: plaid8,
    },
    {
      id: 25,
      name: plaid9,
    },
    {
      id: 26,
      name: plaid10,
    },
    {
      id: 27,
      name: plaid11,
    },
  ];

  return (
    <>
      <Container>
        <Row>
          {plaidCoverageCards.map((info) => (
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
