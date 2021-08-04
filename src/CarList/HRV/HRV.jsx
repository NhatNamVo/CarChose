import React, { Component } from "react";
import View360 from "./view360.js";
import changeColor from './changeColor.js';
export default class HRV extends Component {
  currColrSl = 'blue';
  componentDidMount() {
    View360(0);
  }
  ChoseColor = (event) => {
    changeColor(event);
  }
  render() {
    return (
      <div>
        <div id="spritespin" onClick={this.ChoseColor}>
        <button data-color = "blue" className="btn">Blue</button>
        <button data-color = "black" className="btn">Black</button>
        <button data-color = "silver" className="btn">Silver</button>
        <button data-color = "red" className="btn">Red</button>
        <button data-color = "steel" className="btn">Steel</button>
        <button data-color = "amethyst" className="btn">Amethyst</button>
        <button data-color = "white" className="btn">White</button>
        </div>
      </div>
    );
  }
}
