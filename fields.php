
<!DOCTYPE html>
<html>
  <head>
    <title>Fields Form</title>
  </head>
  <body>
    <h1>Fields Form</h1>
    <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $dob = $_POST["dob"];
        $gender = $_POST["gender"];

        // Do something with the form data (e.g. save to a database)
        // ...

        // Redirect to the success page
        header("Location: success.php");
        exit();
      }
    ?>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first_name" required><br><br>
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name" name="last_name" required><br><br>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required><br><br>
      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
