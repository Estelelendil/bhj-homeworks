const rotators = Array.from(document.querySelectorAll('.rotator__case'));
console.log(rotators)

function changeRotator(arr){
    return function() {
        let ind = arr.findIndex((item) => item.className.includes('rotator__case_active'));
        arr[ind].classList.remove('rotator__case_active');
        let newInd = ind+1;
        if(newInd>arr.length-1){
            newInd = 0;
        }
        arr[newInd].classList.add('rotator__case_active') 
        const interval = arr[newInd].dataset.speed;
        arr[newInd].style.color = arr[newInd].dataset.color;
        setTimeout(changeRotator(rotators), interval)
    }
}

changeRotator(rotators)();

