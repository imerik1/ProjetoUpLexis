import { Component } from "react";
import { Items } from "./components/Items";
import { NavBar } from "./components/NavBar";

export class Main extends Component {
  render() {
    return (
      <main className='main'>
        <NavBar />
        <Items />
      </main>
    );
  }
}
