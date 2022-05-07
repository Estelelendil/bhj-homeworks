let timer = document.getElementById('timer');
let currentTime = timer.textContent;

function numToStrLengthTwo(num){
return String(num).padStart(2, '0')
}

function getTimeStringFromSeconds(seconds) {
    const hours = Math.trunc(seconds / 3600);
    const minutesLeft = Math.trunc(Math.trunc(seconds % 3600)/60);
    const secondsLeft = seconds % 60;

    return `${numToStrLengthTwo(hours)}:${numToStrLengthTwo(minutesLeft)}:${numToStrLengthTwo(secondsLeft)}`;
}

setInterval(function() {
    
    currentTime-=1;
    timer.textContent = getTimeStringFromSeconds(currentTime);
    if(currentTime <= 0) {
        window.location = 'https://customerscanvas.com/help/designers-manual/adobe/photoshop/files/text.psd'
        currentTime = 120;
}

}, 1000); 


