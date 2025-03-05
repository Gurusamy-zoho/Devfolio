const menu = document.querySelector('.menu');
const mobileMenu = document.getElementById('mobile-menu');

menu.addEventListener('click', () => {
    if (mobileMenu.style.left === "0px") {
        mobileMenu.style.left = "-100%"; // Hide menu
    } else {
        mobileMenu.style.left = "0px"; // Show menu
    }
});


let typed = new Typed(".auto-type", {
    strings: ["Programmer", "Developer"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
    cursorChar: "_" 
});
