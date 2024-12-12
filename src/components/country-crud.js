import { LitElement, html, css } from 'lit';
import '@dile/crud/components/crud/crud.js';
import { CountryConfig } from '../lib/CountryConfig';

export class CountryCrud extends CountryConfig(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <dile-crud
        .config=${this.config}
        language="es"
      ></dile-crud>
    `;
  }

  clicked(e) {
    console.log('has hecho clic en y estoy en country crud', e.detail);
  }
}
customElements.define('country-crud', CountryCrud);
