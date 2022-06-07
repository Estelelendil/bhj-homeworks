const progress = document.getElementById( 'progress' );
progress.value = 0.0;
const btn = document.querySelector('#send');
const form = document.getElementById('form');


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  let data = new FormData(form);
  console.log(data.get('file'));
  xhr.upload.addEventListener('progress',(event)=>{
  console.log(event.loaded);
  console.log(event.total);
  progress.value = event.total > 0 ? event.loaded / event.total : 1;
  console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );
    
  }) 
  xhr.send(data);
})
  

