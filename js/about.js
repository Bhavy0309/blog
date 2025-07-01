alert(`Welcome user to the About page`);
let indexLinks = document.getElementById('index-links');
let contactLinks = document.getElementById('contact-links')

contactLinks.addEventListener('click', function () {
    let askContactt = prompt(`this will take you to the Contact page. Want to continue? Enter y to continue or n `)
    if (askContactt == "y"){
        window.open('Contact.html')
    }
    else if (askContactt == "n"){
        window.open("about.html")
    }
    else {
        alert("enter a valid value - y or n")
    }
});

indexLinks.addEventListener('click', function () {
    let ask = prompt(`this will take you to the Home page. Want to continue? Enter y to continue or n `)
    if (ask == "y"){
        window.open('index.html')
    }
    else if (ask == "n"){
        window.open("about.html")
    }
    else {
        alert("enter a valid value - y or n")
    }

});

