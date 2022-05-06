const cookie = document.getElementById('cookie');
let status = document.getElementById('clicker__counter')
console.log(cookie)
let clickerCounter = 0;
let clickerSpeed = document.getElementById('clicker__speed')
let counterSpeed = 0;

cookie.onclick = function(){

clickerCounter+=1;
status.textContent = clickerCounter;
cookie.width = 250;
counterSpeed+=1; // количество кликов увеличивается при каждом нажатии

const changeSize = function(){
    cookie.width = 200;
}
setTimeout(changeSize, 50)
}

// let start = Date.now();
setInterval(function() {
    
    let speed = counterSpeed / 1; // количество кликов в течении этой секунды
    clickerSpeed.textContent = speed;
    counterSpeed = 0;
}, 1000); 
