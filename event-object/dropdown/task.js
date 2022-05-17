let buttom = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list')
let items = document.querySelectorAll('.dropdown__item')

buttom.onclick = function(){
    list.classList.add('dropdown__list_active')
    let buttomContent = buttom.textContent;
    items.forEach((item) =>{
        item.onclick = function(){
            let itemContent = item.textContent;
            buttom.textContent = itemContent;
            item.textContent = buttomContent;
            list.classList.remove('dropdown__list_active')
            return false
        }
        
    })
}