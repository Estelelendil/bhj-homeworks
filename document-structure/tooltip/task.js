const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
console.log(tooltips);

tooltips.forEach(item =>{
    item.addEventListener('click', (event)=>{
        event.preventDefault();
        const {top, left, height} = item.getBoundingClientRect();

        let localTooltip = item.querySelector('.tooltip');
        if(localTooltip){
            localTooltip.remove();
            return;
        }
    
        let tooltip = document.querySelector('.tooltip');

        if(tooltip){ 
            tooltip.remove();
        }

        tooltipText = item.title;
            item.insertAdjacentHTML('afterBegin', `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top + height}px">${tooltipText}</div>`);
         
    })
})