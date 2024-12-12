import { LitElement, html, css } from 'lit';
import '@dile/crud/components/list/crud-list.js';
import { CrudConfigBuilder } from '@dile/crud/lib/CrudConfigBuilder';
import './demo-country-list-item';
import './country-update';
import './demo-country-form';
import '@dile/crud/components/item-delete/crud-item-delete';

export class CountryList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .hide {
        display: none;
      }
    `
  ];

  static get properties() {
    return {
      showEdit: { type: Boolean }
    };
  }

  constructor() {
    super();
    const countryConfig = new CrudConfigBuilder('https://timer.escuelait.com/api/countries', {
      templates: {
        item: (country) => html`<demo-country-list-item @country-click=${this.clicked} .country=${country}></demo-country-list-item>`,
      },
    });
    this.config = countryConfig.getConfig();
  }

  render() {
    return html`
      <dile-crud-list
        id="ellist"
        .config=${this.config}
        @crud-item-edit=${this.edit}
        @crud-item-delete=${this.itemDelete}
      ></dile-crud-list>

      <dile-crud-update
        class="${this.showEdit ? '' : 'hide'}"
        id="eledit"
        title="Actualizar un país"
        endpoint="https://timer.escuelait.com/api/countries"
        .formTemplate=${() => html`<demo-country-form id="updateform"></demo-country-form>`}
        @crud-update-success=${this.updateSuccess}
      ></dile-crud-update>

      <dile-crud-item-delete
        id="eldelete"
        endpoint="https://timer.escuelait.com/api/countries"
        language="es"
        @delete-success=${this.deleteSuccess}
        @delete-error=${this.deleteError}
      ></dile-crud-item-delete>
    `;
  }

  clicked(e) {
    console.log('el país se ha clicado', e.detail);
  }

  edit(e) {
    this.showEdit = true;
    this.shadowRoot.getElementById('eledit').edit(e.detail.itemId);
  }

  updateSuccess() {
    this.showEdit = false;
    this.shadowRoot.getElementById('ellist').refresh();
  }

  itemDelete(e) {
    this.shadowRoot.getElementById('eldelete').delete(e.detail.itemId);
  }

  deleteSuccess() {
    this.shadowRoot.getElementById('ellist').refresh();
  }
}
customElements.define('country-list', CountryList);
