import { Component } from "react";
import logo from "./assets/LogoUpMiner.png";

export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <section className='header__section sectionOne'>
          <article className='sectionOne__article article'>
            <header className='article__header'>
              <img className='article__logo' src={logo} alt='Logo UpMiner' />
              <h1 className='article__title'>Histórico Empresarial</h1>
            </header>
            <p className='article__description'>
              O aplicativo Histórico Empresarial permite ao usuário ter acesso a
              todos os fatos e acontecimentos relevantes de uma empresa desde o
              seu ano de fundação.
            </p>
            <footer className='article__footer'>
              <small className='article__symbol'>R$</small>
              <span className='article__value'>40,00</span>
              <nav className='article__nav nav'>
                <button className='nav__button button'>
                  <a className='button__link' href='#' ref='nofollow'>
                    Saiba mais
                  </a>
                </button>
              </nav>
            </footer>
          </article>
        </section>
        <section className='header__section sectionTwo'></section>
      </header>
    );
  }
}
