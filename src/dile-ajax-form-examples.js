import '@dile/crud/components/ajax-form/ajax-form.js';
import './components/demo-country-form';
import './components/demo-todo-form';
import './components/demo-ajax-form';
import { TodoResponseApiAdapter } from './lib/todoapiadapter';

document.getElementById('updateform').addEventListener('dile-ajax-form-get-error', function(e) {
  // window.location = '/';
  console.log('No se ha podido cargar!!!', e.detail);
})

const todoResponseAdapter = new TodoResponseApiAdapter();
const todoFormElement = document.getElementById('updateformtodo');
todoFormElement.responseAdapter = todoResponseAdapter;
todoFormElement.loadData();
