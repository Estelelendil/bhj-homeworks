let timeID;
const timerTimeOut = 30000;
const chatPanel = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');

const chatContainer = document.querySelector('.chat-widget__messages-container');
chatPanel.onclick = function() {
  chatWidget.classList.add('chat-widget_active');
}

const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

document.addEventListener('keyup', (event)=>{
  clearTimeout(timeID);
  if(event.code == 'Enter' && chatInput.checkValidity()){
  
    messages.innerHTML += generateUserMessage(chatInput.value);

    chatInput.value = '';
    messages.innerHTML += generateRobotMessage('Добрый день, мы ещё не проснулись. Позвоните через 10 лет');
    chatContainer.scrollTop = messages.lastElementChild.getBoundingClientRect().top;

  }
  timeID = setTimeout(messengeIfYouForgoteChat, timerTimeOut );
})

chatInput.addEventListener('focus', e =>{
  clearTimeout(timeID);
  timeID = setTimeout(messengeIfYouForgoteChat, timerTimeOut );
})

function messengeIfYouForgoteChat(){
  
  messages.innerHTML += generateRobotMessage('Проснись и не занимай чужое время!');
  chatContainer.scrollTop = messages.lastElementChild.getBoundingClientRect().top;

}

function getNewTimeString(){
  let currentDate = new Date;
  return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
}

function generateRobotMessage(str){
  return `
  <div class="message">
    <div class="message__time">${getNewTimeString()}</div>
    <div class="message__text">
      ${str}
    </div>
  </div>
  `;
}

function generateUserMessage(str){
  return `
  <div class="message message_client">
    <div class="message__time">${getNewTimeString()}</div>
    <div class="message__text">
      ${str}
    </div>
  </div>
  `;
}

