# test
!DOCTYPE html>
<html>
<head>
    <title>Student Portal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Welcome to Student Registration Portal</h1>
        <nav>
            <a href="register.html">Register</a>
            <a href="payment.html">Make Payment</a>
        </nav>
    </header>

</body>
</html>
<registration form>
!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Student Registration Form</h2>

<form action="process.php" method="POST">
    <label>Full Name:</label>
    <input type="text" name="fullname" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Matric Number:</label>
    <input type="text" name="matric" required>

    <label>Department:</label>
    <input type="text" name="department" required>

    <button type="submit">Submit Registration</button>
</form>

</body>
</html>
