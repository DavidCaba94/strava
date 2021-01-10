<?php
    permisos();

    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $consulta = "SELECT * FROM usuarios";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $request = json_decode(file_get_contents('php://input')); 
        $response = "Login correcto";
        echo json_encode($response);
    }

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;

    function permisos() {
        if(isset($_SERVER['HTTP_ORIGIN'])){
            header('Access-Control-Allow-Origin: *');
            header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
            header('Access-Control-Allow-Credentials: true');
        }
        if(isset($_SERVER['REQUEST_METHOD'] == 'OPTIONS')){
            if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])){
                header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
            }
            if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADER'])){
                header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
            }
            exit(0);
        }
    }
?>