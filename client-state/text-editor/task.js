let textFrame = document.getElementById('editor');
let text = localStorage.getItem('content');
const btn = document.querySelector('.btn');
textFrame.value = text;


textFrame.addEventListener('keyup', e=>{
    console.log(textFrame.value);
    localStorage.setItem('content', textFrame.value );
});

btn.onclick = function(){
    localStorage.removeItem('content')
    textFrame.value = '';
}

