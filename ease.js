
// Example: Adding a click event to contact buttons
const contactButtons = document.querySelectorAll('.advocate-card a');
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add your contact logic here, e.g., opening a modal or sending an email
        console.log('Contact clicked');
    });
});
console.log("hekki")