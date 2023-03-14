document.addEventListener("DOMContentLoaded", function (event) {
    let serviceItem = document.querySelectorAll(".service-item a");
    let imgPanel = document.querySelectorAll(".panel-img img");

    for (let i = 0; i < serviceItem.length; i++) {
        serviceItem[i].addEventListener('mouseenter', () => {
            imgPanel[i].style.opacity = 1;
        });
        serviceItem[i].addEventListener('mouseleave', () => {
            imgPanel[i].style.opacity = 0;
        });
    }
});