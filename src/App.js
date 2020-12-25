import { Header } from "./components/Header/index";
import { Main } from "./components/Main";
function App() {
  return (
    <section id='root'>
      <Header color={true} bg='blue' />
      <Main />
    </section>
  );
}

export default App;
