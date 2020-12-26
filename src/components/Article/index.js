import { GetArticle } from "../../assets/index";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/arrowBack.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Article = () => {
  const article = GetArticle()[0];
  const slide = GetArticle()[1];
  const listSlides = slide.map((slide, id) => {
    return (
      <div
        key={id}
        id={`slide${id}`}
        className='article__sliders__each each-slide'
      >
        <div className='article__sliders__each__div'>
          {slide.image}
          <h3>{slide.description}</h3>
        </div>
      </div>
    );
  });
  return (
    <main className='main__slide'>
      <article className='article__slide'>
        <header className='article__slide__header'>
          <img src={arrowBack} alt='Seta para voltar' />
          <h1 className='header__slide__title'>
            <Link to='/'>{article.name}</Link>
          </h1>
        </header>
        <section id='sliders' className='article__slide__section'>
          <Slide className='article__sliders' duration={2500} autoplay={true}>
            {listSlides}
          </Slide>
        </section>
        <section className='article__slide__description'>
          {article.description} <br />
          {article.description2}
        </section>
        <footer className='article__slide__footer'>
          <div className='footer__currency'>
            <span>R$</span>
            <span>{article.price}</span>
          </div>
          <div className='footer__button'>
            <button>Habilitar</button>
          </div>
        </footer>
      </article>
    </main>
  );
};
