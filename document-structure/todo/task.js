const input= document.querySelector('input');
const taskList = document.getElementById('tasks__list');
const btn = document.querySelector('button');
const task = document.querySelector('.task');

function removeElementOnClick(){
    this.closest('.task').remove();
}
const btnRemove = Array.from(document.querySelectorAll('.task__remove'));

btn.onclick = function(){
    if(input.value.trim().length == 0){
        return
    }
    const inputContent = input.value;

    taskList.insertAdjacentHTML("afterBegin", `<div class="task">
    <div class="task__title">
    ${inputContent}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`);

    taskList.querySelector('.task__remove').onclick = removeElementOnClick;
    
    input.value = '';
    }

btnRemove.forEach(item => item.addEventListener('click', removeElementOnClick));

document.addEventListener('keyup', (event)=>{
    event.preventDefault();

        if(event.code == 'Enter'){
            btn.click()
        }
})

function buttonOnClick(){
    const inputContent = input.value;

    taskList.insertAdjacentHTML("afterBegin", `<div class="task">
    <div class="task__title">
    ${inputContent}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`);

    taskList.querySelector('.task__remove').onclick = removeElementOnClick;

    input.value = '';
}
