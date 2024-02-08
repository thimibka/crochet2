import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


import p1 from "../assets/peluches/1.jpeg";
import p2 from "../assets/peluches/2.jpg";
import p3 from "../assets/peluches/3.jpg";
import p4 from "../assets/peluches/4.jpeg";
import p5 from "../assets/peluches/5.jpeg";
import p6 from "../assets/peluches/6.jpeg";
import p7 from "../assets/peluches/7.jpeg";
import p8 from "../assets/peluches/8.jpeg";
import p9 from "../assets/peluches/9.jpeg";
import p10 from "../assets/peluches/10.jpeg";
import p11 from "../assets/peluches/11.jpeg";
import p12 from "../assets/peluches/12.jpeg";
import p13 from "../assets/peluches/13.jpeg";
import p14 from "../assets/peluches/14.jpeg";
import p15 from "../assets/peluches/15.jpeg";
import p16 from "../assets/peluches/16.jpeg";
import p17 from "../assets/peluches/17.jpeg";

export default function Amigurumi() {
  const amigurumiCards = [
    {
      id: 1,
      name: p1,
    },
    {
      id: 2,
      name: p2,
    },
    {
      id: 3,
      name: p3,
    },
    {
      id: 4,
      name: p4,
    },
    {
      id: 5,
      name: p5,
    },
    {
      id: 6,
      name: p6,
    },
    {
      id: 7,
      name: p7,
    },
    {
      id: 8,
      name: p8,
    },
    {
      id: 9,
      name: p9,
    },
    {
      id: 10,
      name: p10,
    },
    {
      id: 11,
      name: p11,
    },
    {
      id: 12,
      name: p12,
    },
    {
      id: 13,
      name: p13,
    },
    {
      id: 14,
      name: p14,
    },
    {
      id: 15,
      name: p15,
    },
    {
      id: 16,
      name: p16,
    },
    {
      id: 17,
      name: p17,
    },


    
  ];
  return (
    <>
      {/* <div className="Cont">
        <div className="ContainerCards">
          {amigurumiCards.map((info) => (
            <div key={info.id} className="grid-item">
              <div className="ImgInfo">
                <img className="imgBox" src={info.name} id="ige" alt="" />
              </div>
              <div className="TextInfo">
                <p>{info.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <Container>
        <Row>
          {amigurumiCards.map((info) => (
            <Col key={info.id}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={info.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
