alert(`Welcome user to the Contact page`);
let indexLinks = document.getElementById('index-links');
let aboutLinks = document.getElementById('about-links');

indexLinks.addEventListener('click', function () {
    let askContactt = prompt(`this will take you to the Home page. Want to continue? Enter y to continue or n `).toUpperCase()
    console.log(askContactt == "N")
    if (askContactt == "Y"){
        window.open('index.html')
    }
    else if (askContactt == "N"){
        window.open("contact.html")
    }
    else {
        alert("enter a valid value - y or n")
    }
});

aboutLinks.addEventListener('click', function () {
    let ask = prompt(`this will take you to the About page. Want to continue? Enter y to continue or n `).toUpperCase()
    if (ask == "Y"){
        window.open('about.html')
    }
    else if (ask == "N"){
        window.open("contact.html")
    }
    else {
        alert("enter a valid value - y or n")
    }

});



