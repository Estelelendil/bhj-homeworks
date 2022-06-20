const btn = document.querySelector('button');
const signin = document.querySelector('.signin')
const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome')
if(localStorage.getItem('name')){
  welcome.classList.add('welcome_active')
  signin.classList.remove('signin_active');
  welcome.textContent = `Добро пожаловать, пользователь #${localStorage.getItem('name')}`
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  let data = new FormData(form);
  xhr.send(data);

  xhr.addEventListener("load", function () {
    // if (this.readyState === this.DONE) {
      // xhr.responseType = 'json';
      console.log(this.responseText);
      let answer = JSON.parse(this.response);
      if(answer.success){
        welcome.classList.add('welcome_active')
        signin.classList.remove('signin_active');
        welcome.textContent = `Добро пожаловать, пользователь #${answer.user_id}`
        form.reset();
        localStorage.setItem('name', answer.user_id)
      }
      else{
        alert('Неверные логин и пароль')
      }
      
    // }
  });
    
}) 

