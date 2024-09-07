function validateCarBookForm(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var picdate = document.getElementById("picdate").value;
    var returndate = document.getElementById("returndate").value;

    // Username validation (must not be empty)
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Email validation using regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Phone validation (minimum 10 digits)
    if (phone.length < 10) {
        alert("Phone must be at least 10 digits");
        return false;
    }

    // Address validation (must not be empty)
    if (address == "") {
        alert("Address must be filled out");
        return false;
    }

    // Date validation
    if (!picdate || !returndate) {
        alert("Please enter both pickup and return dates");
        return;
    }

    var pickupDate = new Date(picdate);
    var returnDate = new Date(returndate);

    var days = (returnDate - pickupDate) / (1000 * 60 * 60 * 24);

    if (days < 0 || isNaN(days)) {
        alert("Please enter valid dates");
        return false;
    }

    // Ensure minimum booking is 1 day
    var validDays = days === 0 ? 1 : days;  // If days is 0, set to 1

   // Retrieve the price per day from the page or another source
   var pricePerDay = document.getElementById("pricePerDay").value; // Get price from input or hidden field

   // Validate that pricePerDay is a valid number
   if (isNaN(pricePerDay) || pricePerDay <= 0) {
       alert("Invalid price per day");
       return false;
   }
   
    var totalAmount = validDays * pricePerDay;

    // Store total amount in localStorage
    localStorage.setItem("totalAmount", totalAmount);
    
    //alert("Total amount calculated and stored: " + totalAmount);
    //alert("Form successfully filled! Redirecting to payment page...");
    window.location.href = "payment.html";
    return true;

}




    


// Redirect to payment page
//alert("Form submitted successfully!");
//window.location.href = "payment.html";
//return true;
    
   


  

