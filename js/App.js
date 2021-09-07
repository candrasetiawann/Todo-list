function todolist() {
    const button = document.querySelector('.btn-submit');
    const field = document.querySelector('.text-field');

    button.addEventListener('click', function() {

        if (field.value) {

            //membuat elemen dengan javascipt
            const listContent = document.createElement('div');
            listContent.classList.add('list-content');

            const list = document.createElement('div');
            list.classList.add('list');

            const span = document.createElement('span');
            span.classList.add('teks-todo');
            const textSpan = document.createTextNode(`${field.value}`);


            //input checkbox
            const inputCheckbox = document.createElement('INPUT');
            inputCheckbox.setAttribute("type", "checkbox");
            inputCheckbox.classList.add('checkbox');

            //icon trashi
            const Trash = document.createElement('i');
            Trash.className = 'fa fa-trash-o fa-lg';


            const containerList = document.querySelector('.container-list');
            containerList.appendChild(listContent);


            //when trash icon clicked
            Trash.addEventListener('click', () => listContent.remove());



            listContent.appendChild(list);
            list.appendChild(span);
            list.appendChild(inputCheckbox);
            list.appendChild(Trash);
            span.appendChild(textSpan);



            field.value = '';
        }


    });


}

todolist();