import { LitElement, html, css } from 'lit';
import '@dile/crud/components/item-delete/crud-item-delete.js';
import '@dile/ui/components/button/button.js';
import '@dile/ui/components/input/input';

export class CountryDelete extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        --dile-modal-width: 100%;
      }
    `
  ];

  render() {
    return html`
      <dile-input id="countryId" label="Dame el id de un país"></dile-input>
      <dile-button @click="${this.deleteCountry}">Borrar país</dile-button>

      <dile-crud-item-delete
        endpoint="https://timer.escuelait.com/api/countries"
        language="es"
        @delete-success=${this.deleteSuccess}
        @delete-error=${this.deleteError}
      ></dile-crud-item-delete>
    `;
  }

  deleteCountry() {
    const countryId = this.shadowRoot.getElementById('countryId').value;
    this.shadowRoot.querySelector('dile-crud-item-delete').delete(countryId);
  }

  deleteSuccess(e) {
    console.log('success', e.detail);
  }

  deleteError(e) {
    console.log('error', e.detail);
  }
}
customElements.define('country-delete', CountryDelete);
