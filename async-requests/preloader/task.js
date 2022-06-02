const animation = document.querySelector('.loader');
const xhr = new XMLHttpRequest();
const itemCode = document.querySelector('.item__code');
const itemContainer = document.querySelector('#items');
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
try {
    renderObject(JSON.parse(localStorage.getItem('valute')))
} catch {    
}

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState == xhr.DONE){
        itemContainer.textContent = '';
        animation.classList.remove('loader_active');
        let answer = JSON.parse(xhr.response);
        const valute = answer.response.Valute;

        localStorage.setItem('valute', JSON.stringify(valute));
        renderObject(valute);
    }
})

function renderObject(obj){
    
    Object.values(obj).forEach(element =>{
        itemContainer.insertAdjacentHTML('beforeend', ` <div class="item">
        <div class="item__code">
                ${element.CharCode}
            </div>
            <div class="item__value">
                ${element.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>`);
    })
}