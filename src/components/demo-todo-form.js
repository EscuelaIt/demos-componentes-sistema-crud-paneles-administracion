import { LitElement, html, css } from 'lit';
import { DileForm } from '@dile/ui/mixins/form';
import '@dile/ui/components/input/input.js';
import '@dile/ui/components/textarea/textarea';

export class DemoTodoForm extends DileForm(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <dile-input label="Tarea" name="name"></dile-input>
      <dile-textarea label="Descripción" placeholder="Descripción opcional" name="description"></dile-textarea>
    `;
  }
}
customElements.define('demo-todo-form', DemoTodoForm);
