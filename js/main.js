//Panel hover effect
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

// Heading typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["ideas", "dreams", "goals"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) 
            cursorSpan
                .classList
                .add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan
            .classList
            .remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) 
            cursorSpan
                .classList
                .add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan
            .classList
            .remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) 
            textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function () { // On DOM Load initiate the effect
        if (textArray.length) 
            setTimeout(type, newTextDelay + 250);
        }
    );

// FAQ

let question = document.querySelectorAll(".question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
            active
                .classList
                .toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question
            .classList
            .toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})
