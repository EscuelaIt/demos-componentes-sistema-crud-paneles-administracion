import { LitElement, html, css } from 'lit';

export class DemoCountryDetail extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      p {
        margin: 0 0 1rem;
      }
      .last {
        margin-bottom: 0;
      }
    `
  ];

  static get properties() {
    return {
      country: { type: Object }
    };
  }

  render() {
    return html`
      <p>Nombre: <b>${this.country.name}</b></p>
      <p class="last">Continente: ${this.country.continent}</p>
    `;
  }
}
customElements.define('demo-country-detail', DemoCountryDetail);
