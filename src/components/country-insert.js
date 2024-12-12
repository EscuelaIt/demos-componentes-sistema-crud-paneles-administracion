import { LitElement, html, css } from 'lit';
import '@dile/crud/components/insert/crud-insert.js';
import './demo-country-form';

export class CountryInsert extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <dile-crud-insert
        title="Insertar un país"
        actionLabel="Crear"
        endpoint="https://timer.escuelait.com/api/countries"
        formIdentifier="f1"
        .formTemplate=${ () => html`<demo-country-form id="f1"></demo-country-form>` }
      ></dile-crud-insert>
    
    `;
  }
}
customElements.define('country-insert', CountryInsert);
