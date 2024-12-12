import '@dile/crud/components/ajax/ajax.js';

console.log('Hola!!');

document.addEventListener('DOMContentLoaded', function() {

  const elajax = document.getElementById('elajax');

  elajax.addEventListener('ajax-success', function(e) {
    console.log(e.detail);
    const todos = e.detail;
    todos.forEach(todo => {
      const paragraph = document.createElement('p');
      paragraph.innerText = `${todo.id}: ${todo.title}`;
      document.body.appendChild(paragraph);
    });
  });
  elajax.addEventListener('ajax-error', function(e) {
    console.log('error', e.detail);
    const paragraph = document.createElement('p');
    paragraph.innerText = `${e.detail.message}`;
    document.body.appendChild(paragraph);
  });

  elajax.generateRequest();


  document.getElementById('botoncreate').addEventListener('click', function() {
    const data = {
      name: 'Andorra2',
      slug: 'andorra2',
      continent: 'Europe'
    }

    const ajaxcreate = document.getElementById('ajaxcreate');

    ajaxcreate.addEventListener('ajax-error', function(e) {
      console.log(e.detail);
    });

    ajaxcreate.addEventListener('ajax-success', function(e) {
      console.log(e.detail);
    });

    ajaxcreate.data = data;
    ajaxcreate.generateRequest();
  })

});
