function validateForm(event) {

      // Prevent the form from submitting
   event.preventDefault();
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // Username validation (must not be empty)
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
    
    // Email validation using regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    
    // Confirm password validation (must match password)
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    
    // If all validation passes
    alert("Form submitted successfully!");

    window.location.href = "login.html";
    return true;
}