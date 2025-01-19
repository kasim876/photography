(function() {
    const leftBtn = document.getElementById("slider-left-btn");
    const rightBtn = document.getElementById("slider-right-btn");

    const wrapper = document.getElementById("slider-wrapper");
    const slideCount = wrapper.querySelectorAll('.slider__link').length;
    const slideWidth = wrapper.querySelector('.slider__link').clientWidth;

    let translate = 0
    const gap = 20;
    const maxTranslate = slideWidth * slideCount + gap * (slideCount - 1) - wrapper.clientWidth;

    function leftScroll() {
        translate += 270;

        if (translate > 0) {
            translate = 0;
        }

        wrapper.style.transform = `translateX(${translate}px)`;
    }

    function rightScroll() {
        translate -= 270;

        if (translate < -maxTranslate) {
            translate = -maxTranslate;
        }
        
        wrapper.style.transform = `translateX(${translate}px)`;
    }
    
    leftBtn.addEventListener('click', leftScroll);
    rightBtn.addEventListener('click', rightScroll);

})()