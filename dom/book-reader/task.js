const btns = Array.from(document.querySelectorAll('.font-size'));
console.log(btns);
const book = document.getElementById('book');
console.log(book);

btns.forEach(element =>{

    element.onclick = function(){

        btns.forEach(btn=> btn.classList.remove('font-size_active'))
        this.classList.add('font-size_active');
        const atr = this.dataset.size;
        book.className = atr ? `book book_fs-${atr}` : 'book';
        return false
    }
})

const colorTextParent = document.querySelector('.book__control_color');
const colorText = Array.from(colorTextParent.querySelectorAll('.color'));
console.log(colorText);

colorText.forEach(element =>{

    element.onclick = function(){

        colorText.forEach(btn=> btn.classList.remove('color_active'))
        this.classList.add('color_active');
        const atr = this.dataset.textColor;
        book.style.color = `${atr}`;
        return false
    }
})


const colorBgParent = document.querySelector('.book__control_background');
const colorBg = Array.from(colorBgParent.querySelectorAll('.color'));
console.log(colorBg);

colorBg.forEach(element =>{

    element.onclick = function(){

        colorBg.forEach(btn=> btn.classList.remove('color_active'))
        this.classList.add('color_active');
        const atr = this.dataset.bgColor;
        book.style.backgroundColor = `${atr}`;
        return false
    }
})

