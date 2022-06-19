const popap = document.querySelector('#subscribe-modal');
const btn = document.querySelector('.modal__close');

const getCookie = (name) => {
        const value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts
            .pop()
            .split(";")
            .shift();
        }
    }
    
console.log(getCookie('flag'))

if(!getCookie('flag')){
    popap.classList.add('modal_active');
}
btn.onclick = function(){
    popap.classList.remove('modal_active');
    setCookie('flag', true);
}

function setCookie(name, value){
    document.cookie = name + '=' + encodeURIComponent(value);
}

// function getCookie (name){
//     const pairs = document.cookie.split('; ');
//     const cookie = pairs.find(p => p.startsWith(name + '='))
    // return cookie.substr(name.length + 1);
