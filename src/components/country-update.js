import { LitElement, html, css } from 'lit';
import '@dile/crud/components/update/crud-update.js';

export class CountryUpdate extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <dile-input id="countryId" label="Dame el id de un país"></dile-input>
      <dile-button @click="${this.changeCountry}">Cambiar país</dile-button>

      <dile-crud-update
        relatedId="9"
        loadOnInit
        title="Actualizar un país"
        endpoint="https://timer.escuelait.com/api/countries"
        .formTemplate=${() => html`<demo-country-form id="updateform"></demo-country-form>`}
      ></dile-crud-update>
    `;
  }

  changeCountry() {
    const countryId = this.shadowRoot.getElementById('countryId').value;
    const updateElement = this.shadowRoot.querySelector('dile-crud-update');
    updateElement.edit(countryId);
  }
}
customElements.define('country-update', CountryUpdate);
