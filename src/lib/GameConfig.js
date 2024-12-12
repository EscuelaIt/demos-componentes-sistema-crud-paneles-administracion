import { html } from 'lit';
import { CrudConfigBuilder } from '@dile/crud/lib/CrudConfigBuilder';
import { GameApiAdapter} from './gameapiadapter';
import '../components/demo-board-game-item';
import '../components/demo-board-game-form';
import '@dile/ui/components/pages/pages';
import '../components/demo-change-essential-action';
import '../components/demo-game-detail'

export const GameConfig = (superclass) => class extends superclass {

  constructor() {
    super();
    const apiAdapter = new GameApiAdapter();
    const gameConfig = new CrudConfigBuilder('https://timer.escuelait.com/api/board-games', {
      responseAdapter: apiAdapter,
      templates: {
        item: (boardGame) => html`<demo-board-game-item .boardGame=${boardGame}></demo-board-game-item>`,
        insertForm: (belongsTo, relationId) => html`<demo-board-game-form id="insertform" belongsTo="${belongsTo}" relationId="${relationId}"></demo-board-game-form>`,
        updateForm: () => html`<demo-board-game-form id="updateform"></demo-board-game-form>`,
        formActions: (actionName, actionIds) => html`
            <dile-pages attrForSelected="action" selected="${actionName}">
                <dile-crud-delete-action language="es" action="DeleteAction"></dile-crud-delete-action>
                <demo-change-essential-action action="DemoChangeEssentialAction" .actionIds=${actionIds}></demo-change-essential-action>
            </dile-pages>
        `,
        detail: (game) => html`<demo-game-detail .game=${game}></demo-game-detail>`
      },
      customization: {
        disablePagination: false,
        disableDelete: false,
        hidePageReport: false,
        hideCountSummary: false,
        disableFilter: false,
        disableKeywordSearch: false,
        hideCheckboxSelection: false,
      },
      pageSize: {
        available: [10, 25, 50],
        initial: 10,
      },
      availableFilters: [
        {
          type: 'boolean',
          name: 'essential',
          label: 'Is essential',
          active: false,
          value: false,
        },
      ],
      actions: {
        list: [
          {
            label: 'Borrar juegos',
            name: 'DeleteAction',
            
          },
          {
            label: 'Change Essential',
            name: 'DemoChangeEssentialAction'
          },
        ],
      },
    });
    this.config = gameConfig.getConfig();
  }

}