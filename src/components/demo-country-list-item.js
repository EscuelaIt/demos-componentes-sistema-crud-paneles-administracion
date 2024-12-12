import { LitElement, html, css } from 'lit';

export class DemoCountryListItem extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
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
      <b @click=${this.countryClick}>${this.country.name}</b> en ${this.country.continent}
    `;
  }

  countryClick() {
    this.dispatchEvent(new CustomEvent('country-click', { detail: this.country}));
  }
}
customElements.define('demo-country-list-item', DemoCountryListItem);
