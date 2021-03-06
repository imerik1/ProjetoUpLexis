import { Component } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logoUpMinerWhite.png";
import logoBlack from "../../assets/logoUpMinerBlack.png";

export class Header extends Component {
  render() {
    return (
      <header className={`header white ${this.props.bg}`}>
        <section className='header__section sectionOne'>
          <article className='sectionOne__article article'>
            <header className='article__header'>
              <img
                src={this.props.color ? logoWhite : logoBlack}
                className='article__logo'
                alt='Logo UpMiner'
              />
              <h1 className={`article__title ${this.props.bg}`}>
                Histórico Empresarial
              </h1>
            </header>
            <p className={`article__description ${this.props.bg}`}>
              O aplicativo Histórico Empresarial permite ao usuário ter acesso a
              todos os fatos e acontecimentos relevantes de uma empresa desde o
              seu ano de fundação.
            </p>
            <footer className='article__footer'>
              <small className='article__symbol'>R$</small>
              <span className='article__value'>40,00</span>
              <nav className='article__nav nav'>
                <button className='nav__button button'>
                  <Link
                    className='button__link'
                    to={this.props.color ? "/sobre" : "/"}
                  >
                    Saiba Mais
                  </Link>
                </button>
              </nav>
            </footer>
          </article>
        </section>
        <section
          className={`header__section sectionTwo ${this.props.bg}`}
        ></section>
      </header>
    );
  }
}
