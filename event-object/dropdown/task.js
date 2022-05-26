const buttom = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__link');

buttom.onclick = function(){
    list.classList.toggle('dropdown__list_active');
}
items.forEach((item) =>{
    item.onclick = function(){
        buttom.textContent = this.textContent;
       
        list.classList.remove('dropdown__list_active');
        return false;
    }
    
})