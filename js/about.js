alert(`Welcome user to the About page`);
let indexLinks = document.getElementById('index-links');
let aboutLinks = document.getElementById('about-links');
let contactLinks = document.getElementsByClassName('contact-links');

contactLinks.addEventListener('click', function () {
    let askContactt = prompt(`this will take you to the Contact page. Want to continue? Enter y to continue or n `).toUpperCase()
    if (askContactt == "Y"){
        window.open('Contact.html')
    }
    else if (askContactt == "N"){
        window.open("about.html")
    }
    else {
        alert("enter a valid value - y or n")
    }
});

indexLinks.addEventListener('click', function () {
    let ask = prompt(`this will take you to the Home page. Want to continue? Enter y to continue or n `).toUpperCase()
    if (ask == "Y"){
        window.open('index.html')
    }
    else if (ask == "N"){
        window.open("about.html")
    }
    else {
        alert("enter a valid value - y or n")
    }

});

