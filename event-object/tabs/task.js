const tabs = Array.from(document.querySelectorAll('.tab'))

const content = Array.from(document.querySelectorAll('.tab__content'));
       

tabs.forEach((element) => {
    element.onclick = function(){

    let index = tabs.findIndex((item) => item.classList.contains('tab_active'))  

    tabs[index].classList.remove('tab_active')//удаляем маркер активного таба по индексу
    content[index].classList.remove('tab__content_active')//по этому же индексу удаляем маркер активного контента
        
    element.classList.add('tab_active')//устанавливаем для нажатого элемента таба активный маркер

    let newIndex = tabs.findIndex((item) => item.classList.contains('tab_active'))
    
    content[newIndex].classList.add('tab__content_active')
    
    };
})