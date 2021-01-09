<?php
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $request = json_decode(file_get_contents('php://input')); 
        $response = "Login correcto";
        echo json_encode($response);
    }
?>