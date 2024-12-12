import { LitElement, html, css } from 'lit';
import '@dile/crud/components/list/crud-list.js';
import { CrudConfigBuilder } from '@dile/crud/lib/CrudConfigBuilder';
import { GameApiAdapter} from '../lib/gameapiadapter';
import './demo-board-game-item';

export class GameList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  constructor() {
    super();
    const apiAdapter = new GameApiAdapter();
    const gameConfig = new CrudConfigBuilder('https://timer.escuelait.com/api/board-games', {
      responseAdapter: apiAdapter,
      templates: {
        item: (boardGame) => html`<demo-board-game-item .boardGame=${boardGame}></demo-board-game-item>`
      },
      customization: {
        disablePagination: false,
        disableDelete: true,
        hidePageReport: true,
        hideCountSummary: true,
      },
      pageSize: {
        available: [10, 25, 50],
        initial: 10,
      },
    });
    this.config = gameConfig.getConfig();
  }

  render() {
    return html`
      <dile-crud-list
        .config=${this.config}
        @crud-item-edit=${this.edit}
        language="es"
      ></dile-crud-list>
    `;
  }

  edit(e) {
    console.log('edición solicitada', e.detail);
  }
}
customElements.define('game-list', GameList);
