

let holes = document.getElementsByClassName('hole');//массив лунок

function getHole(index){
    let currentHole = document.getElementById(`hole${index}`);
    return currentHole;
}

let success = document.getElementById('dead');
let failure = document.getElementById('lost');
let successCounter = 0;
let failureCounter = 0;
function reset(){
    successCounter = 0;
    failureCounter = 0;
    success.textContent = successCounter;
    failure.textContent = failureCounter;
}

for(let i=1; i<=9; i++){
    const currentHole = getHole(i);

    currentHole.onclick = function(){
        if(this.classList.contains( 'hole_has-mole' )){
            successCounter+=1;
            success.textContent = successCounter;
            if(successCounter == 10){
                alert('Ты подебил!')
                reset()
            }
        }
        else{
            failureCounter+=1;
            failure.textContent = failureCounter; 
            if(failureCounter == 5){
                alert('Game over')
                reset()
            }
        }
    }
}

  



