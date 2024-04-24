$(document).ready(function() {
    var slideItems = $('.slider-card');
    var container = $('.content-card');
    var activeItem = 0;
    var move = 0;

    var leftArrow = $('.left-arrow');
    var rightArrow = $('.right-arrow');

    // Left arrow click
    leftArrow.click(function() {
        activeItem--;
        if (activeItem < 0) {
            activeItem = slideItems.length - 1; // Go to last slide
        }
        move = activeItem * -0.8;
        container.css('transform', 'translate(' + (move * 100) + '%)');
    });

    // Right arrow click
    rightArrow.click(function() {
        activeItem++;
        if (activeItem >= slideItems.length) {
            activeItem = 0; // Go to first slide
        }
        move = activeItem * -0.8;
        container.css('transform', 'translate(' + (move * 100) + '%)');
    });

    // Swipe left
    container.on('swipeleft', function() {
        rightArrow.click(); // Trigger right arrow click
    });

    // Swipe right
    container.on('swiperight', function() {
        leftArrow.click(); // Trigger left arrow click
    });
    (function () {
        nextButtons.forEach(function (button, index) {
            button.addEventListener('click', function () {
                var inputs = Array.from(
                    pages[index].querySelectorAll('input[required], textarea[required], select[required]')
                );
                var isValid = inputs.every(function (input) {
                    return input.value !== '';
                });

                if (isValid) {
                    pages[index]
                        .classList
                        .remove('active');
                    pages[index + 1]
                        .classList
                        .add('active');
                } else {
                    alert('Please fill out all required fields before proceeding.');
                }
            });
        });
    })();
});