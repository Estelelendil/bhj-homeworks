const xhr = new XMLHttpRequest();
const pollAnswer = document.querySelector('#poll__answers');
const pollTitle = document.querySelector('#poll__title');
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState == xhr.DONE){

        let answer = JSON.parse(xhr.response);
        const title = answer.data.title;
        
        pollTitle.textContent = title;
        let responceAnswer = answer.data.answers;//массив
        responceAnswer.forEach(element => {
            // let btn = document.createElement('button');
            // btn.textContent = `${element}`;
            pollAnswer.insertAdjacentHTML('afterbegin', ` <button class="poll__answer">
            ${element}
          </button>`)
        });
        let answerBtn = pollAnswer.querySelectorAll('button');
        answerBtn.forEach(btn =>{
            btn.onclick = function(){
                alert('Спасибо, ваш голос засчитан!');
                // const xhrNew = new XMLHttpRequest();
                // xhrNew.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                // xhrNew.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                // xhrNew.send( 'vote=id_опроса&answer=индекс_ответа_в_массиве_ответов' );//??
            }
        })
       
    }
})