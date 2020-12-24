import { Component } from "react";
import NavBar from "./components/NavBar";

export class Main extends Component {
  render() {
    return (
      <main className='main'>
        <h2 className='main__alert'>Deslize para o lado</h2>
        <NavBar />
      </main>
    );
  }
}
