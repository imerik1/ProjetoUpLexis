import { Header } from "./components/Header/index";
import { Main } from "./components/Main";
function App() {
  return (
    <section id='root' className='pageOne'>
      <Header color={true} bg='blue' />
      <Main />
    </section>
  );
}

export default App;
