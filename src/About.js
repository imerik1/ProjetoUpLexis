import { Article } from "./components/Article";
import { Header } from "./components/Header/index";
function About() {
  return (
    <section id='root'>
      <Header color={false} bg='' />
      <Article />
    </section>
  );
}

export default About;
