const sliderRight = document.getElementsByClassName('slider__arrow_next');
const sliderImages = document.getElementsByClassName('slider__item');
arrSliderImages = Array.from(sliderImages);// массив картинок
console.log(sliderRight)


    

sliderRight.onclick = function(){
    console.log('recm')
    for (let i = 0; i < arrSliderImages.length; i++) {
        let ind = 0;
        if(arrSliderImages[i].className.includes('slider__item_active')){
        ind = i;
        console.log(arrSliderImages[i], ind)
        }
        arrSliderImages[i].classList.remove('slider__item_active')
        arrSliderImages[i++].classList.add('slider__item_active')
        ind++;
        
    }

    // arrSliderImages.forEach(element, index => {
    //     let ind;
    //     if(element.className.includes('slider__item_active')){
    //         ind = index;
    //     }

    // });
}



