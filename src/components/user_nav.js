import { LitElement, html, css } from "lit";
import "./c_button";
import NavStyle from "../sass/components/user_nav.scss";

class C_Nav extends LitElement {
  static get styles() {
    return [NavStyle];
  }

  static properties = {};

  constructor() {
    super();
  }

  firstUpdated() {
    const btn = this.shadowRoot.getElementById("id");
    btn.addEventListener("click", (e) => {
      console.log("btn clicked");
    });
  }

  render() {
    return html`
      <div class="container">
        <slot name="title"></slot>
        <div class="btn_container">
          <c-button id="id" class="btn" title="boton1"></c-button>
          <c-button title="boton2"></c-button>
        </div>
      </div>
    `;
  }
}

customElements.define("c-nav", C_Nav);
