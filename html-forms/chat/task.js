const chatPanel = document.querySelector('.chat-widget__side-text')
const chatWidget = document.querySelector('.chat-widget')

chatPanel.onclick = function(){
chatWidget.classList.add('chat-widget_active')
}

const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );


// console.log(chatInput.required)

document.addEventListener('keyup', (event)=>{
    if(event.code == 'Enter' && chatInput.checkValidity()){
// console.log(chatInput.required)
let currentDate = new Date;
currentDate = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
messages.innerHTML += `
<div class="message message_client">
    <div class="message__time">${currentDate}</div>
    <div class="message__text">${chatInput.value}</div>
</div>
`;
chatInput.value = ''
messages.innerHTML += `
  <div class="message">
    <div class="message__time">${currentDate}</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;
    }
})

