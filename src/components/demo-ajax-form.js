import { LitElement, html, css } from 'lit';
import { TodoResponseApiAdapter } from '../lib/todoapiadapter';

export class DemoAjaxForm extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  constructor() {
    super();
    this.formAdapter = new TodoResponseApiAdapter()
  }

  render() {
    return html`
      <dile-ajax-form
        id="updateformtodo"
        operation="update"
        relatedId="4"
        endpoint="https://todolistapi.escuelait.com/api/todos"
        actionLabel="Actualizar la tarea"
        formIdentifier="formupdatetodo"
        .responseAdapter=${this.formAdapter}
        loadOnInit
      >

        <demo-todo-form id="formupdatetodo"></demo-todo-form>
      </dile-ajax-form>
    `;
  }
}
customElements.define('demo-ajax-form', DemoAjaxForm);
