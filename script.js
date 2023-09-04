window.addEventListener('load', () =>{
    const form = document.querySelector('#box');
    const input = document.querySelector('#inputBx');
    const listElment = document.querySelector('#task-List');
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert('please fill out the task');
            return;
        }
        const taskEl = document.createElement('div');
        taskEl.classList.add("tasks");
        const task_content_el = document.createElement('div');
        task_content_el.classList.add("Content");
        taskEl.appendChild(task_content_el);
        console.log(listElment); 
        const task_input_el = document.createElement('input');
        task_input_el.classList.add("text");
        task_input_el.type ='text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el);
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        const editTask ='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#b9dcf2}</style><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>';
        task_edit_el.innerHTML = editTask;
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML ='<i class="fa-regular fa-square-minus" style="color: #f29171;"></i>';
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        taskEl.appendChild(task_actions_el);
        listElment.appendChild(taskEl);
        input.value ='';
        task_edit_el.addEventListener('click', () => {

            if(task_edit_el.innerHTML != "save"){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerHTML = "save";
            }else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerHTML = editTask;
            }
            
        })
        task_delete_el.addEventListener('click', () =>{
            listElment.removeChild(taskEl); 
        })

    })
})
