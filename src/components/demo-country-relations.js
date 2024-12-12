import { LitElement, html, css } from 'lit';
import { GameConfig } from '../lib/GameConfig';
import '@dile/crud/components/crud/crud';

export class DemoCountryRelations extends GameConfig(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  static get properties() {
    return {
      boardGameConfig: { type: Object },
      country: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
    ${this.country
      ? html `
        <dile-crud
          title="Juegos de ${this.country.name}"
          .config="${this.config}"
          belongsTo="country"
          relationId="${this.country.id}"
          language="es"
        ></dile-crud>  
      `
      : ''
    }
    
    `;
  }
}
customElements.define('demo-country-relations', DemoCountryRelations);
