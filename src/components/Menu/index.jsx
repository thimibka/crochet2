import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="Menu">
        <div className="orgaLink">
          <div className="decolinkMenu">
            <NavLink to="/" className="acceuil">
              ACCUEIL
            </NavLink>
          </div>
        </div>
        <div className="decolinkMenu">
          <NavLink to="amigurumi" className="amigurumi">
            MES DOUDOUS
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="couverture" className="couverture">
            MES P&apos;TITS PLAIDS
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="cachecou" className="cache-cou">
            MES VET&apos;S
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="porte-clef" className="divers">
            PORTE-CLEF
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="decoration" className="divers">
            DECORATION
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="sac-plage" className="divers">
            SAC-PLAGE
          </NavLink>
        </div>
       
      </div>
    </>
  );
};

export default Menu;
