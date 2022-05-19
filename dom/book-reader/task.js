const btns = Array.from(document.querySelectorAll('.font-size'));
console.log(btns)
const book = document.getElementById('book')
console.log(book)

btns.forEach(element =>{
    element.onclick = function(){
        element.classList.add('font-size_active')
        let atr = element.getAttribute('data-size')
        book.classList.toggle('book_fs-'+atr)
        console.log('book_fs-'+atr)
        return false
    }
})

const colorTextParent = document.querySelector('.book__control_color')
const colorText = colorTextParent.querySelectorAll('.color')
console.log(colorText)
const colorBgParent = Array.from(document.querySelector('.book__control_background'))
const colorBg = Array.from(colorBgParent.querySelectorAll('.color'))
console.log(colorBg)