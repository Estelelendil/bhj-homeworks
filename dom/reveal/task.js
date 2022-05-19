let reveal = document.querySelectorAll('.reveal');
// console.log(reveal)

let isInViewport = function(element){
    let viewportHeight = window.innerHeight;
    domRect = element.getBoundingClientRect();
    let elementTop = domRect.top;
    // console.log(elementTop)
    return elementTop < viewportHeight ? true : false;
    };
    

window.addEventListener('scroll', function() {
    
    isInViewport(reveal[0]) && reveal[0].classList.add('reveal_active');
    isInViewport(reveal[1]) && reveal[1].classList.add('reveal_active');
})