import { Component } from "react";
import Items from "./components/Items";
import NavBar from "./components/NavBar";
import Order from "./components/Order";

export class Main extends Component {
  render() {
    return (
      <main className='main'>
        <NavBar />
        <Order />
        <Items />
      </main>
    );
  }
}
