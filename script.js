// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Menu Toggle
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    });

    // Remove navbar active class on scroll
    window.addEventListener("scroll", function () {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });

    // Typed.js for changing text dynamically
    if (document.querySelector(".multiple-text")) {
        new Typed(".multiple-text", {
            strings: ["Frontend Developer", "Backend Developer", "Application Developer", "Web Designer"],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1200,
            loop: true,
        });
    }
});
