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

// Set up event listener for the About Us button
function DisplayHomePage() {
    let AboutUsButton = document.getElementById("AboutUsBtn");
    AboutUsButton.addEventListener("click", function() 
    {
        location.href = "about.html"
    });

    // Create and update paragraph using template strings
    let MainContent = document.getElementsByTagName("main")[0];
    let MainParagraph = document.createElement("p");
    let firstString = "This is";
    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");
    MainParagraph.textContent = `${firstString} the Main Paragraph!`;  // Using template string
    MainContent.appendChild(MainParagraph);
    }

    // Create and append an article
    let Article = document.createElement("article");
    let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
    Article.setAttribute("class", "container");
    Article.innerHTML = ArticleParagraph;
    document.body.appendChild(Article);  // Appending to the body, adjust if needed


    window.addEventListener("load", Start);
})();

