// Wait for the DOM to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling when clicking on anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of anchorLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(link.getAttribute("href"));
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        });
    }
});