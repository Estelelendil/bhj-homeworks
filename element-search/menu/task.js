
let elements = document.getElementsByClassName('menu__link')

let arrElements = Array.from(elements)

arrElements.forEach(element => {
    element.onclick = function (){
        let menu = element.closest('.menu__item');
        console.log(menu)
        let subMenu = menu.querySelector('.menu_sub');
        console.log(subMenu)
        if(subMenu){
            subMenu.classList.add('menu_active')
            let closeSub = function(){
                subMenu.classList.remove('menu_active')
            }
            setTimeout(closeSub, 2000)
            return false
        }
    }
});
