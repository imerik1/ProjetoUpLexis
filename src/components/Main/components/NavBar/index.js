import all from "./assets/all.svg";
import profissional from "./assets/profissional.svg";
import regular from "./assets/regular.svg";
import socAmb from "./assets/socAmb.svg";
import juridic from "./assets/juridic.svg";
import listRest from "./assets/listRest.svg";
import midiaNet from "./assets/midiaNet.svg";
import bensIm from "./assets/bensIm.svg";
import cad from "./assets/cad.svg";
import finan from "./assets/finan.svg";
const navs = [
  {
    name: "Todos",
    logo: <img src={all} alt='Logo Todos' />,
    active: true,
  },
  {
    name: "Profissional",
    logo: <img src={profissional} alt='Logo Profissional' />,
  },
  {
    name: "Reguladores",
    logo: <img src={regular} alt='Logo Reguladores' />,
  },
  {
    name: "Sócio Ambiental",
    logo: <img src={socAmb} alt='Logo Sócio Ambiental' />,
  },
  {
    name: "Jurídico",
    logo: <img src={juridic} alt='Logo Jurídico' />,
  },
  {
    name: "Listas Restritivas",
    logo: <img src={listRest} alt='Logo Listas Restritivas' />,
  },
  {
    name: "Mídia/Internet",
    logo: <img src={midiaNet} alt='Logo Mídia/Internet' />,
  },
  {
    name: "Bens e Imóveis",
    logo: <img src={bensIm} alt='Logo Bens e Imóveis' />,
  },
  {
    name: "Cadastro",
    logo: <img src={cad} alt='Logo Cadastro' />,
  },
  {
    name: "Financeiro",
    logo: <img src={finan} alt='Logo Financeiro' />,
  },
];

export default function NavBar() {
  const listNav = navs.map((nav) => (
    <div
      onClick={(e) => {
        if (e.currentTarget.classList !== "active") {
          e.currentTarget.classList.toggle("active");
        }
      }}
      className={nav.active ? "list__items active" : "list__items"}
    >
      {nav.logo}
      <h3 className='list__title'>{nav.name}</h3>
    </div>
  ));

  return <nav className='list'>{listNav}</nav>;
}
