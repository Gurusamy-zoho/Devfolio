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


// document.getElementById("allbtn").addEventListener("click",function(){
//         this.classList.toggle("bg-purple-500");
//         this.classList.toggle("text-white");
// })

// document.getElementById("websitebtn").addEventListener("click",function(){
//     this.classList.toggle("bg-purple-500");
//     this.classList.toggle("text-white");
// })

// document.getElementById("webappbtn").addEventListener("click",function(){
//     this.classList.toggle("bg-purple-500");
//     this.classList.toggle("text-white");
// })


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Reset all buttons
    buttons.forEach(btn => btn.classList.remove("bg-purple-500", "text-white"));

    // Apply new styles to clicked button
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
    event.preventDefault(); // Prevents form submission
    
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