const main = Array.from(document.querySelector('.interests_main').querySelector('ul').children);

const allCheck = Array.from(document.querySelectorAll('.interest__check'))

// allCheck.forEach(element =>{
//     element.onclick = function(){
//         const ancestorLi = element.parentElement.parentElement;

//         if (main.find(el => el.isEqualNode(ancestorLi))) {
//             Array.from(ancestorLi.querySelectorAll('input')).forEach(item => item.checked = element.checked);
//         } 
//         else {
//             const closestUl = element.closest('ul');
//             const cardChildren = Array.from(closestUl.querySelectorAll('.interest__check'));
            
//             const cardParent = closestUl.parentElement.querySelector('input');
            
//             if (cardChildren.every(item => item.checked)){
//                 cardParent.checked = true;
//             }
//         }
//     }
// });

// передаю как аргумент input
function checkUpward(element,isChecked){
    const closestLi = element.closest('li');

    // условие остановки
    if(main.find(el => el.isEqualNode(closestLi))){
        return;
    }

    const closestUl = closestLi.closest('ul');
    const allSiblinsLi = Array.from(closestUl.children)

    const allSiblingChecked = allSiblinsLi.every(el => el.querySelector('input').checked == isChecked);
    const parentLi = closestUl.closest('li');
    const parentInput = parentLi.querySelector('input');

    if(allSiblingChecked){
        parentInput.checked = isChecked;
        parentInput.indeterminate = false;
    }
    else {
        parentInput.indeterminate = true;
    }

    checkUpward(parentInput, isChecked);
}

allCheck.forEach(element =>{
    element.onclick = function(){
        // флаг статус
        const isChecked = this.checked;
        const children = Array.from(this.closest('li').querySelectorAll('.interest__check'));

        // сразу проставили всем детям тот же статус
        children.forEach(el => {
            el.checked = isChecked;
            el.indeterminate = false;
        });

        // вызываем рекурсивную функцию для всех верхних родителей
        checkUpward(this, isChecked);
    }
})