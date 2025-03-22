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
    strings: ["Programmer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
    cursorChar: "_" 
});



const buttons = document.querySelectorAll("button");
const allbtn = document.getElementById("allbtn");

if (allbtn) {
  allbtn.classList.add("bg-purple-500", "text-white");
}

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("bg-purple-500", "text-white"));

    button.classList.add("bg-purple-500", "text-white");
  });
});



const filterButtons = document.querySelectorAll(".btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        projects.forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert("Your message has been submitted successfully!");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});


