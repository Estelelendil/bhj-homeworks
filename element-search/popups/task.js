let buttoms = document.getElementsByTagName('a')

let buttom = buttoms.item(1); //красная кнопка

let modalSeccess = document.getElementById('modal_success') //выбираем зеленое окно

buttom.onclick = function(){ // при нажатии добавляем класс, делающий видимым зеленое окно
    
    modalSeccess.classList.add('modal_active')
    modalMain.classList.remove('modal_active')
}

let closes = document.querySelectorAll('.modal__close.modal__close_times');// коллекция элементов-крестиков(2)
let modalMain = document.getElementById('modal_main') //выбираем красное окно
console.log(closes)

closes.forEach(element => {
    element.onclick = function(){
        this.closest(".modal_active").classList.remove('modal_active');
    }
});