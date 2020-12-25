import { getData } from "../../../../assets/index";
import { useState } from "react";
import { Link } from "react-router-dom";

const orderArray = getData().sort((a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

const OrderNav = orderArray.map((nav, id) => {
  if (nav.name !== "Todos") {
    return (
      <article
        key={id}
        className={`list__products products ${nav.class} active`}
        id={`items${nav.class}`}
      >
        <header className='products__header'>
          {nav.logo}
          <h3 className='products__title'>{nav.name}</h3>
        </header>
        <p className='products__description'>{nav.description}</p>
        <footer className='products__footer footer'>
          <div className='footer__value'>
            <span>R$</span>
            <span>{nav.value}</span>
          </div>
          <div className='footer__button'>
            <Link to='/sobre'>Saiba Mais</Link>
          </div>
        </footer>
      </article>
    );
  }
  return null;
});

const listNav = getData().map((nav, id) => {
  if (nav.name !== "Todos") {
    return (
      <article
        key={id}
        className={`list__products products ${nav.class} active`}
        id={`items${nav.class}`}
      >
        <header className='products__header'>
          {nav.logo}
          <h3 className='products__title'>{nav.name}</h3>
        </header>
        <p className='products__description'>{nav.description}</p>
        <footer className='products__footer footer'>
          <div className='footer__value'>
            <span>R$</span>
            <span>{nav.value}</span>
          </div>
          <div className='footer__button'>
            <Link to='/sobre'>Saiba Mais</Link>
          </div>
        </footer>
      </article>
    );
  }
  return null;
});

export function Items() {
  const [list, setList] = useState(true);
  const ToggleList = () => {
    setList(!list);
    document
      .querySelectorAll(".list__items.Todos")[0]
      .classList.remove("active");
    document.querySelectorAll(".list__items.Todos")[0].classList.add("active");
    document
      .querySelectorAll(".list__items.Profissional")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.Reguladores")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.SócioAmbiental")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.Jurídico")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.ListasRestritivas")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.MídiaInternet")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.BenseImóveis")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.Cadastro")[0]
      .classList.remove("active");
    document
      .querySelectorAll(".list__items.Financeiro")[0]
      .classList.remove("active");
  };
  return (
    <div className='main__order'>
      <section className='order'>
        <label className='order__label' htmlFor='order'>
          Ordenar
        </label>
        <select
          onChange={ToggleList}
          className='order__select select'
          name='order'
          id='order'
        >
          <option className='select__value' value='new'>
            Lançamento
          </option>
          <option className='select__value' value='alph'>
            Ordem Alfabética
          </option>
        </select>
      </section>
      <section className='listProducts'>{list ? listNav : OrderNav}</section>
    </div>
  );
}
