import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ensemblemontage from "../assets/porteclef/ensemblemontage.webp";
import chausson1 from "../assets/chaussons-bébé/chausson1.webp";
import decoration16 from "../assets/decorations/decoration16.webp";
import sacplage4 from "../assets/sac-plage/sacplage4.webp";

export default function Divers() {
  const card1 = [ensemblemontage];
  const card2 = [chausson1];
  const card3 = [decoration16];
  const card4 = [sacplage4];

  const navigate = useNavigate();

  function keyRingParadise() {
    navigate("/divers/porte-clef");
  }
  function babySlipperParadise() {
    navigate("/divers/chausson-bb");
  }
  function decorationParadise() {
    navigate("/divers/decoration");
  }
  function bagParadise() {
    navigate("/divers/sac-plage");
  }

  return (
    <>
      <div className="projets">
        <Row xs={1} sm={2} md={3} lg={3} xl={3}>
          <Col>
            <Card.Title>Porte-clefs</Card.Title>

            <button onClick={keyRingParadise} className="LinkPicture">
              <img src={card1} alt="" />
            </button>
          </Col>

          <Col>
            <Card.Title> Chausson bébé </Card.Title>
            <button onClick={babySlipperParadise} className="LinkPicture">
              <img src={card2} alt="" />
            </button>
          </Col>

          <Col>
            <Card.Title>Decoration</Card.Title>
            <button onClick={decorationParadise} className="LinkPicture">
              <img src={card3} alt="" />
            </button>
          </Col>

          <Col>
            <Card.Title>Sac de plage</Card.Title>
            <button onClick={bagParadise} className="LinkPicture">
              <img src={card4} alt="" />
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}
