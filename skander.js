// Handling form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Displaying the entered data (or handle it as needed)
        alert(`Merci ${name} pour votre message!\nEmail: ${email}\nMessage: ${message}`);
        
        // Optionally, you can reset the form after submission
        form.reset();
    });
});
