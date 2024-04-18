document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var listItems = document.querySelectorAll('#subtitle-list .subtitle');
        var displayTextElement = document.getElementById('display-text');
        var nextButtons = document.querySelectorAll('.next-button'); // Define nextButtons here
        var pages = document.querySelectorAll('.page'); // Define pages here

        if (listItems.length === 0) {
            console.error('No list items found');
            return;
        }

        var activeListItem = listItems[0]; // The first li element is active by default

        // Make the first li element active by default
        if (activeListItem.querySelector('a')) {
            activeListItem
                .querySelector('a')
                .style
                .color = '#7224B3';
        }

        if (activeListItem.querySelector('.hidden-info')) {
            displayTextElement.innerHTML = activeListItem
                .querySelector('.hidden-info')
                .innerHTML;
        }

        listItems.forEach(function (listItem) {
            listItem.addEventListener('mouseover', function () {
                var hiddenInfo = listItem.querySelector('.hidden-info');
                if (hiddenInfo) {
                    displayTextElement.innerHTML = hiddenInfo.innerHTML;
                }

                if (activeListItem.querySelector('a')) {
                    activeListItem
                        .querySelector('a')
                        .style
                        .color = ''; // Reset the color of the previously active li element
                }

                if (listItem.querySelector('a')) {
                    listItem
                        .querySelector('a')
                        .style
                        .color = '#7224B3'; // Make the hovered li element active
                }

                activeListItem = listItem; // Update the active li element
            });
        });

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