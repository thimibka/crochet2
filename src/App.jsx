import { Route, Routes } from "react-router-dom";
import "../src/styles/index.scss";

import Home from "./Pages/Home";
import Amigurumi from "./Pages/Amigurumi";
import NeckCover from "./Pages/NeckCover";

import Heart from "./Pages/Heart";
import Bookmark from "./Pages/Bookmark";
import BeachPlage from "./Pages/BeachPlage";
import KeyRing from "./Pages/KeyRing";
import PlaidCoverage from "./Pages/Plaid-coverage";
import Divers from "./Pages/Divers";
import Decoration from "./Pages/Decoration";

// import image from "../src/assets/fond-ecran/cf.jpeg";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      
      <Menu />
      {/* <div className="background" style={{ backgroundImage: `url(${image})` }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amigurumi" element={<Amigurumi />} />
        <Route path="/couverture" element={<PlaidCoverage />} />
        <Route path="/cachecou" element={<NeckCover />} />
        <Route path="/divers" element={<Divers />} />
        <Route path="/porte-clef" element={<KeyRing />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/sac-plage" element={<BeachPlage />} />

        <Route path="/coeur" element={<Heart />} />
        <Route path="/marque-pages" element={<Bookmark />} />
      </Routes>
      {/* </div> */}
      <ScrollToTop />
    </>
  );
}
