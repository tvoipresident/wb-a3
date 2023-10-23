document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add("fade-in");
        }, index * 200); // Delay each item's animation by 200ms
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements you want to animate
    var contactBox = document.querySelector(".contact-box");

    // Add a class to trigger the fade-in animation with a delay
    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.classList.add("fade-in");
        }, 500); // Delay the animation by 500ms (adjust as needed)
    }

    // Trigger the fade-in animation for the contact-box element
    addFadeInAnimation(contactBox);

    
});

// Your form validation function (validateForm) can be placed here
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';

    // Validate name
    if (name === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    // Validate email
    if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else {
        // Regular expression to validate email format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Invalid email format';
            return false;
        }
    }

    // If validation passes, show alert and submit the form
    alert("I am 100% going to contact you");
    return true;
}

