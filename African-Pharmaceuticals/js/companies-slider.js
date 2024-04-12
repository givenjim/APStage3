const slider = document.querySelector('.slider');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        let currentSlide = 0;

        function moveSlide(direction) {
            if (direction === 'left') {
                currentSlide = (currentSlide - 1 + 10) % 10;
            } else {
                currentSlide = (currentSlide + 1) % 10;
            }
            slider.style.transform = `translateX(-${currentSlide * 50}%)`;
        }

        leftArrow.addEventListener('click', () => moveSlide('left'));
        rightArrow.addEventListener('click', () => moveSlide('right'));