import { LitElement, html, css } from 'lit';
import { DileForm } from '@dile/ui/mixins/form';

export class DemoSetAsiaAsContinentAction extends DileForm(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
    <p>Do you really want to set Asia as continent of this country?</p>
    <dile-input name="un_dato" label="escribe algo..."></dile-input>
    `;
  }
}
customElements.define('demo-set-asia-as-continent-action', DemoSetAsiaAsContinentAction);
