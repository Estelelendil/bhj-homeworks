const cookie = document.getElementById('cookie');
let status = document.getElementById('clicker__counter')
console.log(cookie)
let clickerCounter = 0;
let clickerSpeed = document.getElementById('clicker__speed')
let counterSpeed = 0;
let timeNow = new Date;
console.log(timeNow)

cookie.onclick = function(){

clickerCounter+=1;
let timeCurrent = new Date;
let delta = (timeCurrent - timeNow) / 1000;//секунды
let speed = 1 / delta;
clickerSpeed.textContent = speed.toFixed(2);
timeNow = new Date;
status.textContent = clickerCounter;
cookie.width = 250;
counterSpeed+=1; // количество кликов увеличивается при каждом нажатии

const changeSize = function(){
    cookie.width = 200;
}
setTimeout(changeSize, 50)
}

// let start = Date.now();
// setInterval(function() {
    
//     let speed = counterSpeed / 1; // количество кликов в течении этой секунды
//     clickerSpeed.textContent = speed;
//     counterSpeed = 0;
// }, 1000); 
