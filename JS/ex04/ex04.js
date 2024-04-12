document.addEventListener("DOMContentLoaded", function() {

    const elements = document.querySelectorAll(".now");

    elements.forEach(function(element) {
        element.textContent = new Date().toLocaleTimeString();
    });

    setInterval(function() {
        elements.forEach(function(element) {
            element.textContent = new Date().toLocaleTimeString();
        });
    }, 1000);
});
