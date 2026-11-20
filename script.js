
// =====================================
// ASAPH ENERGY SOLUTIONS
// MAIN WEBSITE JAVASCRIPT
// =====================================


// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });
}


// CLOSE MOBILE MENU AFTER CLICKING A LINK
if (navigation) {
    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    });
}


// CURRENT YEAR IN FOOTER
const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});


// CONTACT FORM
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for contacting Asaph Energy Solutions. Our team will get back to you.");

        contactForm.reset();
    });
}


// QUOTE FORM
const quoteForm = document.getElementById("quote-form");

if (quoteForm) {
    quoteForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for your quote request. Our team will contact you soon.");

        quoteForm.reset();
    });
}
