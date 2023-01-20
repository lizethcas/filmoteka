import { LitElement, html, css } from "lit";
//  SE IMPORTAN LOS ESTILOS DE NUESTRO COMPONENTE
import BtnStyle from "../sass/components/c_button.scss";

// CREAMOS UNA CLASE DE NUESTRO COMPONENTE
class C_Button extends LitElement {
  // INDEXAMOS LOS ESTILOS DE NUESTRO COMPONENTE
  static get styles() {
    return [BtnStyle];
  }

  // PODEMOS AGREGAR PROPIEDADES A NUESTRO COMPONENTE Y SE PUEDEN MODIFICAR
  static properties = {
    title: { type: String },
  };

  // HEREDAMOS DE NUESTRA CLASE LIT E INICIALIZAMOS LA PROPUEDAD DE NUESTRO COMPONENTE

  constructor() {
    super();
    this.title = "";
  }

  //  RENDERIZAMOS NUESTRO COMPONENTE PARA ANEXARLO AL SHADOWDOM
  render() {
    return html` <button>${this.title}</button> `;
  }
}

//  DEFINIMOS EL NOMBRE DE LA ETIQUETA DE NUESTRO COMPONENTE SIEMPRE CON -
// customElements.define("X-NOMBREETIQUETAHTML", NOMBRE DE LA CLASE);
customElements.define("c-button", C_Button);
