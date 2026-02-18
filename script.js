document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let matric = document.getElementById("matric").value;
    let department = document.getElementById("department").value;

    // Basic validation
    if(fullname === "" || email === "" || matric === "" || department === "") {
        alert("Please fill all fields.");
        return;
    }

    // Save data locally (temporary storage)
    localStorage.setItem("studentName", fullname);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentMatric", matric);
    localStorage.setItem("studentDepartment", department);

    // Show success message
    alert("Registration Successful! Proceeding to Payment.");

    // Redirect to payment page (we will create this next)
    window.location.href = "payment.html";
});
