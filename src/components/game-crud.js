import { LitElement, html, css } from 'lit';
import { GameConfig } from '../lib/GameConfig';

export class GameCrud extends GameConfig(LitElement) {
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
}
customElements.define('game-crud', GameCrud);
