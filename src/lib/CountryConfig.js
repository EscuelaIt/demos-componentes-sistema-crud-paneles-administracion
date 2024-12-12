import { html } from 'lit';
import { CrudConfigBuilder } from '@dile/crud/lib/CrudConfigBuilder';
import '../components/demo-country-form';
import '../components/demo-country-list-item';
import '../components/demo-country-detail';
import '../components/demo-set-asia-as-continent-action';
import '../components/demo-set-europe-as-continent-action';
import '../components/demo-country-relations'

export const CountryConfig = (superclass) => class extends superclass {

  constructor() {
    super();
    const countryConfig = new CrudConfigBuilder('https://timer.escuelait.com/api/countries', {
      templates: {
        item: (country) => html`<demo-country-list-item @country-click=${this.clicked} .country=${country}></demo-country-list-item>`,
        insertForm: () => html`<demo-country-form id="insertform"></demo-country-form>`,
        updateForm: () => html`<demo-country-form id="updateform"></demo-country-form>`,
        help: () => html`<p>Este es el crud para los países</p><p>Esto es la ayuda</p>`,
        detail: (country) => html`<demo-country-detail .country=${country}></demo-country-detail>`,
        formSingleActions: (actionName, country) => html`
            <dile-pages attrForSelected="action" selected="${actionName}">
                <demo-set-europe-as-continent-action action="SetEurope" .country=${country}></demo-set-europe-as-continent-action>
                <demo-set-asia-as-continent-action action="SetAsia"></demo-set-asia-as-continent-action>
            </dile-pages>
        `,
        //relations: (country) => html`<demo-country-relations .country=${country}></demo-country-relations>`
      },
      customization: {
        disableKeywordSearch: false,
        hideCountSummary: false,
        // hidePageReport: false,
        hideCheckboxSelection: false,
        disableEdit: true,
        disableDelete: true,
        // disablePagination: true,
        disableHelp: false,
        disableFilter: false,
        disableSort: false,
      },
      labels: {
        insertAction: 'Crear',
        insertWindowTitle: 'Crear un país',
      },
      availableFilters: [
        {
          type: 'select',
          name: 'continent',
          label: 'Continent',
          active: false,
          value: false,
          options: [
            {
              name: 'Europe',
              label: 'Europe'
            },
            {
              name: 'Africa',
              label: 'Africa'
            },
            {
              name: 'Asia',
              label: 'Asia'
            },
          ]
        },
      ],
      sort: {
        options: [
          {
            name: 'name',
            label: 'Name',
            direction: 'asc'
          },
          {
            name: 'continent',
            label: 'Continente',
            direction: 'asc'
          },
        ],
        initialSortField: 'name',
      },
      actions: {
        single: [
          {
            name: "SetEurope",
            label: "Set Europe as continent",
            destructive: true,
          },
          {
            name: "SetAsia",
            label: "Set Asia as continent"
          },
        ]
      }
    });
    this.config = countryConfig.getConfig();
  }

}