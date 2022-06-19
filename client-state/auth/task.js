const btn = document.querySelector('button');
const signin = document.querySelector('.signin')
const form = document.getElementById('signin__form');

const welcome = document.querySelector('.welcome')

btn.addEventListener('click', (e)=>{
    e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  let data = new FormData(form);
  xhr.send(data);

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      let answer = JSON.parse(this.response);
      if(answer.success){
        welcome.classList.add('welcome_active')
        signin.classList.remove('signin_active');
        welcome.textContent = `Добро пожаловать, пользователь #${answer.user_id}`
      }
      else{
        alert('Неверные логин и пароль')
      }
    }
  });
    
}) 

