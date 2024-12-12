import { LitElement, html, css } from 'lit';
import { TodoResponseApiAdapter } from '../lib/todoapiadapter';

export class TodoUpdate extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  constructor() {
    super();
    this.formAdapter = new TodoResponseApiAdapter();
  }

  render() {
    return html`
      <dile-crud-update
        title="Actualizar una tarea"
        relatedId="2"
        loadOnInit
        endpoint="https://todolistapi.escuelait.com/api/todos"
        .formTemplate=${() => html`<demo-todo-form id="updateform"></demo-todo-form>`}
        .responseAdapter=${this.formAdapter}
        language="es"
      ></dile-crud-update>
    `;
  }
}
customElements.define('todo-update', TodoUpdate);
