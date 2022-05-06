// let timer = document.getElementById('timer');
// let currentTime = timer.textContent;


// setInterval(function() {
    
//     currentTime-=1;
//     timer.textContent = currentTime;
//     if(currentTime <= 0){
//     alert('Вы победили в конкурсе!')
//     currentTime = 59;
// }

// }, 1000); 

let timer = document.getElementById('timer');
let currentTime = new Date (2022, 5, 6, 13, 30);
timer.textContent =  `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSecond()}`;


setInterval(function() {
    let nowTime = new Date;
    currentTime = currentTime - nowTime;
    timer.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSecond()}`;
    if(currentTime <= 0){
    alert('Вы победили в конкурсе!')
    // currentTime = 59;
}

}, 1000);