import all from "./all.svg";
import profissional from "./profissional.svg";
import regular from "./regular.svg";
import socAmb from "./socAmb.svg";
import juridic from "./juridic.svg";
import listRest from "./listRest.svg";
import midiaNet from "./midiaNet.svg";
import bensIm from "./bensIm.svg";
import cad from "./cad.svg";
import finan from "./finan.svg";

export default function getData() {
  const navs = [
    {
      name: "Todos",
      logo: <img src={all} alt='Logo Todos' />,
      active: true,
      value: "29,99",
      data: 1,
    },
    {
      name: "Profissional",
      logo: <img src={profissional} alt='Logo Profissional' />,
      active: false,
      description: "",
      value: "29,99",
      data: 2,
    },
    {
      name: "Reguladores",
      logo: <img src={regular} alt='Logo Reguladores' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 3,
    },
    {
      name: "Sócio Ambiental",
      logo: <img src={socAmb} alt='Logo Sócio Ambiental' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 4,
    },
    {
      name: "Jurídico",
      logo: <img src={juridic} alt='Logo Jurídico' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 5,
    },
    {
      name: "Listas Restritivas",
      logo: <img src={listRest} alt='Logo Listas Restritivas' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 6,
    },
    {
      name: "Mídia/Internet",
      logo: <img src={midiaNet} alt='Logo Mídia/Internet' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 7,
    },
    {
      name: "Bens e Imóveis",
      logo: <img src={bensIm} alt='Logo Bens e Imóveis' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 8,
    },
    {
      name: "Cadastro",
      logo: <img src={cad} alt='Logo Cadastro' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 9,
    },
    {
      name: "Financeiro",
      logo: <img src={finan} alt='Logo Financeiro' />,
      active: false,
      description: `O aplicativo Balanço Patrimonial realiza a 
      consulta de todos os balanços que são 
      publicados nos Diários Oficiais de 
      empresas S.A., de capital aberto e limitadas 
      (LTDA) de grande porte.
      `,
      value: "29,99",
      data: 10,
    },
  ];

  return navs;
}
