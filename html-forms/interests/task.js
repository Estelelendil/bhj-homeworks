const main = Array.from(document.querySelector('.interests_main').querySelector('ul').children);

const allCheck = Array.from(document.querySelectorAll('.interest__check'))

allCheck.forEach(element =>{
    element.onclick = function(){
        const ancestorLi = element.parentElement.parentElement;

        if (main.find(el => el.isEqualNode(ancestorLi))) {
            Array.from(ancestorLi.querySelectorAll('input')).forEach(item => item.checked = element.checked);
        } 
        else {
            const closestUl = element.closest('ul');
            const cardChildren = Array.from(closestUl.querySelectorAll('.interest__check'));
            
            const cardParent = closestUl.parentElement.querySelector('input');
            
            if (cardChildren.every(item => item.checked)){
                cardParent.checked = true;
            }
        }
    }
});
