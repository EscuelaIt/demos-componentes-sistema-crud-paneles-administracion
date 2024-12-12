import { LitElement, html, css } from 'lit';
import '@dile/crud/components/ajax-switch/ajax-switch.js';

export class DemoGameDetail extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      p {
        margin: 0 0 1rem;
      }
      .last {
        margin-bottom: 0;
      }
    `
  ];

  static get properties() {
    return {
      game: { type: Object }
    };
  }

  render() {
    return html`
      <p>Nombre: <b>${this.game.name}</b> (${this.game.year})</p>
      <dile-ajax-switch 
        endpoint="https://timer.escuelait.com/api/board-games/${this.game.id}/change-essential"
        method="patch"
        checkedLabel="Essential" 
        uncheckedLabel="Not essential"
        ?value=${this.game.essential}
      ></dile-ajax-switch>
    `;
  }
}
customElements.define('demo-game-detail', DemoGameDetail);
