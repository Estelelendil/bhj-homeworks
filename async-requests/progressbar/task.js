const progress = document.getElementById( 'progress' );
progress.value = 0.0;
const btn = document.querySelector('#send');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
btn.onclick = function(){xhr.send()};

// xhr.addEventListener('readystatechange', ()=>{
//     if(xhr.readyState == xhr.DONE){

//     }
// })
xhr.upload.addEventListener('progress',(event)=>{
  console.log(event.loaded);
  console.log(event.total)
  alert( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );

}) 
