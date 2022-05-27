const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));

const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));

plus.forEach(item =>{
    item.addEventListener('click',()=>{
const productQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
const productQuantityValue = productQuantity.textContent;

productQuantity.textContent = Number(productQuantityValue) + 1;
    })
})

minus.forEach(item =>{
    item.addEventListener('click',()=>{
const productQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
const productQuantityValue = productQuantity.textContent;

productQuantityValue > 0 ? productQuantity.textContent = Number(productQuantityValue) - 1 : productQuantity.textContent = 0;
    })
})

// Перенос в корзину 

const productAdd = Array.from(document.querySelectorAll('.product__add'));// кнопки "Добавить"
const cardProducts = document.querySelector('.cart__products');// Корзина контейнер

productAdd.forEach(item =>{//При нажатии на кнопку "Добавить"
    item.addEventListener('click', ()=>{
        const picture = item.closest('.product').querySelector('.product__image').getAttribute('src');
       
        const quantity = item.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
        
        const productId = item.closest('.product').dataset.id;
        
        const productInCard = Array.from(cardProducts.querySelectorAll('.cart__product'));//массив уже добавленных товаров

        AddProduct(productId, picture, quantity);

        // productInCard.forEach(elem =>{// проходимся по уже добавленным товарам
        //     if(elem.dataset.id = productId){// смотрим, не совпадает ли ID
        //         quantity = quantity + elem.querySelector('.cart__product-count').textContent;

        //         AddProduct(productId, picture, quantity)
        //     }
        //      AddProduct(productId, picture, quantity) 

        // })
        
        })

})

function AddProduct(Id, picture, quantity){

    quantity > 0 ? cardProducts.insertAdjacentHTML('afterBegin', ` <div class="cart__product" data-id="${Id}">
                <img class="cart__product-image" src="${picture}">
                <div class="cart__product-count">${quantity}</div>
                </div>`) : alert('Выберите хотя бы один продукт');
                return true;
}
