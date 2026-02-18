document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let matric = document.getElementById("matric").value;
    let department = document.getElementById("department").value;

    // Save data in browser
    localStorage.setItem("studentName", fullname);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentMatric", matric);
    localStorage.setItem("studentDepartment", department);

    // Show payment section
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("paymentSection").style.display = "block";
});

function makePayment() {
    // Simulate payment success
    document.getElementById("paymentSection").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
}
