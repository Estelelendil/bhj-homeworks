const sliderRight = document.querySelector('.slider__arrow_next');
const sliderLeft = document.querySelector('.slider__arrow_prev');
const sliderImages = document.getElementsByClassName('slider__item');
arrSliderImages = Array.from(sliderImages);// массив картинок


let ind = arrSliderImages.findIndex((item) => item.className.includes('slider__item_active'));

function changeSlide(slideNumber){
arrSliderImages[ind].classList.remove('slider__item_active');
arrSliderImages[slideNumber].classList.add('slider__item_active');
ind = slideNumber;
}

sliderRight.onclick = function(){
    let newInd = ind + 1;
    if(newInd >= arrSliderImages.length){
        newInd = 0;
    }
    changeSlide(newInd)
    ind = newInd;
 }

 sliderLeft.onclick = function(){
    let newInd = ind - 1;
    if(newInd < 0){
        newInd = arrSliderImages.length - 1;
    }
    changeSlide(newInd)
    ind = newInd;
 
}



