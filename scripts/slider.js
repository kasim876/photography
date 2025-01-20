(function() {
    const leftBtn = document.getElementById("slider-left-btn");
    const rightBtn = document.getElementById("slider-right-btn");

    const wrapper = document.getElementById("slider-wrapper");
    const slides = wrapper.querySelectorAll('.slider__link');

    const gap = 20;

    let translate = 0;
    let slideWidth;
    let maxTranslate;

    function updateDimensions() {
        slideWidth = slides[0].clientWidth;
        const slideCount = slides.length;
        maxTranslate = slideWidth * slideCount + gap * (slideCount - 1) - wrapper.clientWidth;
    }

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

    updateDimensions();

    window.addEventListener('resize', () => {
        updateDimensions();
        if (translate < -maxTranslate) {
            translate = -maxTranslate;
        } else if (translate > 0) {
            translate = 0;
        }
        wrapper.style.transform = `translateX(${translate}px)`;
    });
    
    leftBtn.addEventListener('click', leftScroll);
    rightBtn.addEventListener('click', rightScroll);

})()