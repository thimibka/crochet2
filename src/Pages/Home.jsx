import { useNavigate } from "react-router-dom";

import home from "../assets/logo/logocrochet.webp";

import p12 from "../assets/peluches/12.jpeg";
import plaid11 from "../assets/plaid/plaid11.webp";
import chale2 from "../assets/chale/chale2.webp";
import ensemble from "../assets/porteclef/ensemble.webp";

import decoration16 from "../assets/decorations/decoration16.webp";
import sacplage5 from "../assets/sac-plage/sacplage5.webp";


export default function Home() {
  const card1 = [p12];
  const card2 = [plaid11];
  const card3 = [chale2];
  const card4 = [ensemble];
 
  const card6 = [decoration16];
  const card7 = [sacplage5];

  const navigate = useNavigate();

  function amigurumiParadise() {
    navigate("/amigurumi");
  }
  function coverageParadise() {
    navigate("/couverture");
  }
  function snoodParadise() {
    navigate("/cachecou");
  }
  function portecleParadise() {
    navigate("/porte-clef");
  }

  function decorationParadise() {
    navigate("/decoration");
  }
  function sacParadise() {
    navigate("/sac-plage");
  }

  return (
    <>
      <div className="HomePresentation">
        <div className="HomePicture">
          <img className="picture" src={home} alt="home"></img>
        </div>
        <div className="TextHome">
          <p>
            Bienvenue sur mon site dédié au crochet,<br></br>
            <br></br>
            Chère amie des fils et des crochets ! Je suis ravie de vous
            accueillir parmi nous.<br></br>
            Permettez-moi de me présenter, je m&apos;appelle Marine, et je
            partage avec vous ma passion pour le crochet.<br></br>
            Ce qui a commencé comme une simple activité pendant ma grossesse est
            rapidement devenu un véritable amour pour cet art ancien et
            fascinant.<br></br>
            <br></br>
            Ici, vous trouverez un espace dédié à tous les amateurs et
            passionnés du crochet, quels que soient votre niveau
            d&apos;expérience ou vos objectifs. Que vous soyez débutante
            curieuse ou crocheteuse chevronnée, vous êtes au bon endroit pour
            découvrir des merveilles que le crochet peut créer. Des modèles de
            projets magnifiques, allant des écharpes et des bonnets aux
            couvertures et aux amigurumis, sont à votre disposition.
            <br></br>
            <br></br>
            Alors, installez-vous confortablement avec votre fil et votre
            crochet, laissez libre cours à votre imagination et préparez-vous à
            vivre de merveilleuses aventures crochet. Je vous souhaite une
            expérience enrichissante et inspirante sur mon site. Bienvenue dans
            l&apos;univers du crochet ! Marine
          </p>
        </div>
     
      </div>

      <div className="contLink">
        <div className="ContainerLink">
          <div className="linkCenter">
            <div className="LinkTotal">
              <div className="LinkText">
                <p>MES DOUDOUS</p>
              </div>
              <button onClick={amigurumiParadise} className="LinkPicture">
                <img src={card1} alt="" />
              </button>
            </div>
          </div>
          <div className="linkCenter">
            <div className="LinkTotal">
              <div className="LinkText">
                <p>MES P'TITS PLAIDS</p>
              </div>
              <button onClick={coverageParadise} className="LinkPicture">
                <img src={card2} alt="" />
              </button>
            </div>
          </div>
          <div className="linkCenter">
            <div className="LinkTotal">
              <div className="LinkText">
                <p>MES VET'S</p>
              </div>
              <button onClick={snoodParadise} className="LinkPicture">
                <img src={card3} alt="" />
              </button>
            </div>
          </div>
          <div className="linkCenter">
            <div className="LinkTotal">
              <div className="LinkText">
                <p>Porte-clef</p>
              </div>
              <button onClick={portecleParadise} className="LinkPicture">
                <img src={card4} alt="" />
              </button>
            </div>
          </div>
          
          <div className="linkCenter">
            <div className="LinkTotal">
              <div className="LinkText">
                <p>Decoration</p>
              </div>
              <button onClick={decorationParadise} className="LinkPicture">
                <img src={card6} alt="" />
              </button>
            </div>
          </div>
          <div className="linkCenter">
            <div className="LinkTotal">
              <div className="LinkText">
                <p>Sac-plage</p>
              </div>
              <button onClick={sacParadise} className="LinkPicture">
                <img src={card7} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="link-reseau">
     
          <ul>
            <a href="https://www.facebook.com/profile.php?id=100089088925441">
              facebook
            </a>
          </ul>
          <ul>
            <a href="https://www.instagram.com/les_crochets_de_marinette/?igshid=MzMyNGUyNmU2YQ%3D%3D">
              instagram
            </a>
          </ul>
        
      </div>
    </>
  );
}
