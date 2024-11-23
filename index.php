<?php
require_once '_.php';

$isAdmin = $_SESSION['isAdmin'] ?? false;
$showNavbar = (str_contains($_SERVER['REQUEST_URI'], "/login")) ? "hidden" : "";

if (isset($_POST['admin-login'])) {
    // YET TO IMPLEMENT REMEMBER-ME COOKIES
    $username = $_POST['username'] ?? "";
    $password = $_POST['password'] ?? "";
    $doRemember = ($_POST['remember'] == "on") ? true : false;
    if (empty($username) || empty($password)) {
        header("Location: /login");
    }
    if ($username == "admin" && password_verify($password, ADMIN_PASS)) {
        $_SESSION['isAdmin'] = true;
        header("Location: /admin");
    }
}

if ($isAdmin && str_contains($_SERVER['REQUEST_URI'], "/login")) {
    header("Location: /admin");
}

if (!$isAdmin && str_contains($_SERVER['REQUEST_URI'], "/admin")) {
    header("Location: /login");
}

if ($isAdmin && str_contains($_SERVER['REQUEST_URI'], "/logout")) {
    $_SESSION['isAdmin'] = false;
    header("Location: /login");
}
?>

<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <?php include('tailwind_config.php'); ?>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <title><?= SHOP_NAME ?></title>
</head>

<body>
    <?php
    if ($_SERVER['REQUEST_URI'] == "/") {
        include('navbar.php');
        include('home.php');
    } elseif (str_contains($_SERVER['REQUEST_URI'], "/cars")) {
        include('navbar.php');
        include('cars.php');
    } elseif (str_contains($_SERVER['REQUEST_URI'], "/login")) {
        include('navbar.php');
        include('login.php');
    } else {
        header("Location: /404");
    }
    ?>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
</body>

</html>