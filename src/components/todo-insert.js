import { LitElement, html, css } from 'lit';
import './demo-todo-form';

export class TodoInsert extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <dile-crud-insert
        title="Insertar una tarea"
        endpoint="https://todolistapi.escuelait.com/api/todos"
        formIdentifier="f1"
        language="es"
        .formTemplate=${ () => html`<demo-todo-form id="f1"></demo-todo-form>` }
      ></dile-crud-insert>
    `;
  }
}
customElements.define('todo-insert', TodoInsert);
