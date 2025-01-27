"use strict";

//IIFE -Immediately Invoked Functional Expression
(function() {
    function Start() {
        console.log("App starting...");
        setActiveLink();
        DisplayHomePage();
    }

// Function to set active link based on the current URL
function setActiveLink() {
    var navLinks = document.querySelectorAll('.nav-link');
    var currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

function DisplayHomePage() {
    let AboutUsButton = document.getElementById("AboutUsBtn");
    AboutUsButton.addEventListener("click", function() 
    {
        location.href = "about.html"
    });
}

    window.addEventListener("load", Start);
})();

