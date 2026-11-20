
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the footer year
    const yearElements = document.querySelectorAll(".current-year");
    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });


    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    // Contact form: prepare a WhatsApp message
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const phone = document.getElementById("contact-phone").value.trim();
            const message = document.getElementById("contact-message").value.trim();

            const whatsappMessage =
                "Hello Asaph Energy Solutions,\n\n" +
                "I would like to make an enquiry.\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phone + "\n" +
                "Message: " + message;

            const whatsappURL =
                "https://wa.me/2349124005190?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        });
    }


    // Quote form: prepare a WhatsApp quotation request
    const quoteForm = document.getElementById("quote-form");

    if (quoteForm) {
        quoteForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!quoteForm.reportValidity()) {
                return;
            }

            const name = document.getElementById("quote-name").value.trim();
            const phone = document.getElementById("quote-phone").value.trim();
            const email = document.getElementById("quote-email").value.trim();
            const location = document.getElementById("quote-location").value.trim();
            const property = document.getElementById("property-type").value;
            const service = document.getElementById("service-type").value;
            const powerNeeds = document.getElementById("power-needs").value.trim();

            const whatsappMessage =
                "Hello Asaph Energy Solutions,\n\n" +
                "I would like to request a solar quotation.\n\n" +
                "Name: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "Email: " + (email || "Not provided") + "\n" +
                "Location: " + location + "\n" +
                "Property Type: " + property + "\n" +
                "Service Required: " + service + "\n" +
                "Power Needs: " + powerNeeds;

            const whatsappURL =
                "https://wa.me/2349124005190?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        });
    }

});
