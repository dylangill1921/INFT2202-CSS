"use strict";

//IIFE -Immediately Invoked Functional Expression
(function() {
    function Start() {
        console.log("App starting...");
        setActiveLink();
        DisplayHomePage();
        DisplayContactListPage();
        InitializeCalendar();
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
    MainParagraph.textContent = `${firstString} the Main Paragraph!`;
    MainContent.appendChild(MainParagraph);
    }

// Initializes and display the contact list if available
function DisplayContactListPage() {
    console.log("Contact Us Page");

    if(localStorage.length > 0){
        let contactList = document.getElementById("contactList");
        let data = "";

        let keys = Object.keys(localStorage);

        let index = 1;
        for(const key of keys) {
            let contactData = localStorage.getItem(key);
            let contact = new Contact();
            contact.deserialize(contactData);
            data += <tr><th scope="row" class="text-center">${index}</th>
            <td>${contact.FullName}</td>
            <td>${contact.ContactNumber}</td>
            <td>${contact.EmailAddress}</td>
            <td></td>
            <td></td>
            </tr> ;
            index++;
        }
        contactList.innerHTML = data;
    }
}

// Initializes and displays a calendar on the events page
function InitializeCalendar() {
    var calendarEl = document.getElementById('eventsCalendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
        { title: 'Fundraiser Event', start: '', category: 'Fundraisers' },
        { title: 'Workshop on Development', start: '', category: 'Donations' },
        { title: 'Neighborhood Cleanup', start: '2', category: 'Cleanups' }
    ]
    });
    calendar.render();

    document.querySelectorAll('.filters button').forEach(button => {
        button.addEventListener('click', function() {
            filterEvents(button.textContent);
        });
    });

    function filterEvents(category) {
        var filteredEvents = calendar.getEvents().filter(event => 
            category === 'All' ? true : event.extendedProps.category === category
        );
        calendar.removeAllEvents();
        calendar.addEventSource(filteredEvents);
        document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    }
}

    window.addEventListener("load", Start);
})();

