import { LitElement, html, css } from "lit";
import BtnStyle from "../sass/components/c_button.scss";

class C_Button extends LitElement {
  static get styles() {
    return [BtnStyle];
  }

  static properties = {
    title: { type: String },
  };

  constructor() {
    super();
    this.title = "";
  }

  // set counter_val(value) {
  //   this.counter = value;
  // }

  // get counter_val() {
  //   return this.counter;
  // }

  render() {
    return html` <button>${this.title}</button> `;
  }
}

customElements.define("c-button", C_Button);
