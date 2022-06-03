const progress = document.getElementById( 'progress' );
progress.value = 0.0;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();

// xhr.addEventListener('readystatechange', ()=>{
//     if(xhr.readyState == xhr.DONE){

//     }
// })
xhr.upload.onprogress = function(event) {
    console.log(event.loaded);
    console.log(event.total)
    alert( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );
  }