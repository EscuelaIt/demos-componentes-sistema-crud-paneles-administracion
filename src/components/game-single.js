import { LitElement, html, css } from 'lit';
import '@dile/crud/components/single/crud-single.js';
import { GameConfig } from '../lib/GameConfig';

export class GameSingle extends GameConfig(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        --dile-primary-dark-color: orange;
        --dile-primary-color: green;
        --dile-on-primary-color: white;
        --dile-secondary-light-color: beige;
      }
    `
  ];

  render() {
    return html`
      <dile-crud-single
        language="es"
        relatedId="10"
        .config="${this.config}"
      ></dile-crud-single>
    `;
  }
}
customElements.define('game-single', GameSingle);
