<?php
define("SHOP_NAME", "Nusa Barong Motor");
define("DB_HOST", "localhost");
define("DB_NAME", "nusabarong");
define("DB_USER", "root");
define("DB_PASS", "");
define("ADMIN_PASS", password_hash("admin", PASSWORD_DEFAULT));

session_start();

try {
    $conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
