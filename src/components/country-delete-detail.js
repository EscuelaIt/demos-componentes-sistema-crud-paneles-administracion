import { LitElement, html, css } from 'lit';
import '@dile/crud/components/item-delete/crud-item-delete.js';
import '@dile/ui/components/button/button.js';
import '@dile/ui/components/input/input';
import '@dile/crud/components/detail/crud-detail.js';
import './demo-country-detail';

export class CountryDelete extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        --dile-modal-width: 100%;
      }
    `
  ];

  static get properties() {
    return {
      countryId: { type: String },
    };
  }

  render() {
    return html`
      <dile-input id="countryId" label="Dame el id de un país"></dile-input>
      <dile-button @click="${this.detailCountry}">Ver un país</dile-button>

      <dile-crud-item-delete
        endpoint="https://timer.escuelait.com/api/countries"
        language="es"
        @delete-success=${this.deleteSuccess}
        @delete-error=${this.deleteError}
      ></dile-crud-item-delete>

      ${this.countryId
        ? html`
          <dile-crud-detail
            endpoint="https://timer.escuelait.com/api/countries/${this.countryId}"
            .itemDetailTemplate=${(country) => html`<demo-country-detail .country="${country}"></demo-country-detail>`}
            @crud-item-detail-load-error=${this.loadError}
          ></dile-crud-detail>
          <dile-button @click="${this.deleteCountry}">Borrar el país</dile-button>

        `
        : ''
      }


    `;
  }

  detailCountry() {
    this.countryId = this.shadowRoot.getElementById('countryId').value;

  }
  deleteCountry() {
    this.shadowRoot.querySelector('dile-crud-item-delete').delete(this.countryId);
  }

  deleteSuccess(e) {
    console.log('success', e.detail);
    this.countryId = undefined;
  }

  deleteError(e) {
    console.log('error', e.detail);
  }

  loadError(e) {
    console.log('load error', e.detail);
    this.countryId = undefined;
  }
}
customElements.define('country-delete-detail', CountryDelete);
