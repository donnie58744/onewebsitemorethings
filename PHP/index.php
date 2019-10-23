<html>

<?php
        session_start();

        $username = 'user';
        $password = 'password';
        
        if (isset($_SESSION["loggedin"]) && $_SESSION['loggedin'] == true) {
            header("Loaction: success.php");
        }

        if (isset($_POST['username']) && isset($_POST['password'])) {
            if ($_POST['username'] == $username && $_POST['password'] == $password){
                $_SESSION['loggedin'] = true;
                header("Location: success.php");
            }
        }
    ?>

<body bgcolor="#56fff6">


    <script type="text/javascript" src="js/Home.js"></script>
    <script type="text/javascript" src="UsersJs/UserCheck.js"></script>

    <button style="background-color:white;" onclick="Home()">
        <font size="6">Back</font>
    </button>

    <br>
    <br>

    <center>
        <form method="post" action="login.php"></form>
        Username:<br />
        <input type="text" name="username"><br />
        Password:<br />
        <input type="password" name="password"><br />
        <input type="submit" value="Login">
    </center>

</body>

</html>
