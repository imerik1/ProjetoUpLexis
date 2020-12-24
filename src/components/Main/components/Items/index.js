import getData from "../../../../assets/index";
export default function Items(props) {
  const listNav = getData().map((nav, id) => {
    if (id > 0) {
      return (
        <article key={id} className='list__products products'>
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
              <a href='/'>Saiba Mais</a>
            </div>
          </footer>
        </article>
      );
    }
    return null;
  });
  return <section className='listProducts'>{listNav}</section>;
}
