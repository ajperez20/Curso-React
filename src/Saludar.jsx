//! los componentes en react también se pueden escribir como clases, esta es la forma mas antigua de escribirlos, por lo que preferiré seguir usando la programación funcional.

import { Component } from "react";

export class Saludar extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
