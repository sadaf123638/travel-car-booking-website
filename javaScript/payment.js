document.addEventListener("DOMContentLoaded", function() {
    const totalAmount = localStorage.getItem("totalAmount");
    if (totalAmount) {
        document.getElementById("totalAmount").textContent = totalAmount;
    } else {
        document.getElementById("totalAmount").textContent = "0";
    }
});




function validatePayForm() {
    const debitNumber = document.getElementById('debitnumber').value;
    const cvvNumber = document.getElementById('cvvnumber').value;

    // Validate debit card number (must be 12 digits)
    if (debitNumber.length !== 12) {
        alert('Debit card number must be exactly 12 digits.');
        return false;
    }

    // Validate CVV (must be 3 digits)
    if (cvvNumber.length !== 3 || isNaN(cvvNumber)) {
        alert('CVV must be exactly 3 digits.');
        return false;
    }

   
    

    // If all validation passes
    //alert("Payment successfully!");
    window.location.href = "paysuccess.html";
    return false; 
}
