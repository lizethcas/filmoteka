import { LitElement, html, css } from "lit";
import "./c_button"; // IMPORTAMOS EL COMPONENTE QUE QUERAMOS INDEXAR
import NavStyle from "../sass/components/user_nav.scss"; // IMPORTAMOS EL ESTILO DE NUESTRO COMPONENTE PRINCIPAL
import bg from "../assets/images/desktop/desktop_main.png"; //importar imagenes
class C_Nav extends LitElement {
  static get styles() {
    return [NavStyle];
  }

  static properties = {};

  constructor() {
    super();
  }

  // FIRST UPDATE SE EJECUTA CUANDO SE RENDERIZA NUESTRO COMPONENTE
  // AQUI PODEMOS HACER LLAMADAS DE APIS AGREGAR EVENTOS A NUESTRO COMPONENTE PRINCIPAL O A SUS HIJOS
  firstUpdated() {
    // PARA ACCEDER A COMPONENTES HIJOS ES NECESARIO USAR SHADOWROOT
    const btn = this.shadowRoot.getElementById("id");
    btn.addEventListener("click", (e) => {
      console.log("btn clicked");
    });
    const cont = this.shadowRoot.querySelector(".container");
    cont.style.backgroundImage = `url('${bg}')`; //indexar imagen como fondo
    // cont.style.backgroundColor = "red";
    console.log(bg);
  }

  render() {
    return html`
      <div class="container">
        <slot name="title"></slot>
        <div class="btn_container">
          <!-- ESTE ES UN COMPONENTE CREADO CON LA PROPIEDAD TITLE  -->
          <c-button id="id" class="btn" title="boton1"></c-button>
          <c-button title="boton2"></c-button>
        </div>
      </div>
    `;
  }
}

customElements.define("c-nav", C_Nav);
