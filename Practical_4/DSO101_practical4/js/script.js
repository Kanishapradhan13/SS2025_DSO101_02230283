// Simple script to add a dynamic timestamp
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer p');
    const timestamp = new Date().toLocaleString();
    footer.innerHTML += `<br>Page last rendered: ${timestamp}`;
});