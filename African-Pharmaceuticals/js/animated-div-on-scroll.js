 document.addEventListener('DOMContentLoaded', function () {
        const box = document.querySelector('.boxx');

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll() {
            if (isInViewport(boxx)) {
                boxx.style.display = 'block';
            } 
            else {
                boxx.style.display = 'none';
            }
        }

        window.addEventListener('scroll', handleScroll);
    });