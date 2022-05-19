const btns = Array.from(document.querySelectorAll('.font-size'));
console.log(btns);
const book = document.getElementById('book');
console.log(book);

btns.forEach(element =>{

    element.onclick = function(){

        btns.forEach(btn=> btn.classList.remove('font-size_active'))
        this.classList.add('font-size_active');
        const atr = this.getAttribute('data-size');
        book.className = atr ? 'book book_fs-'+atr : 'book';
        return false
    }
})


const colorTextParent = document.querySelector('.book__control_color');
const colorText = colorTextParent.querySelectorAll('.color');
console.log(colorText);
const colorBgParent = Array.from(document.querySelector('.book__control_background'));
const colorBg = Array.from(colorBgParent.querySelectorAll('.color'));
console.log(colorBg);

