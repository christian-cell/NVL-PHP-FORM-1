<?php
/* aqui abajo llamo al fichero que tiene la conexion para que pueda
enviar los datos a mi tabla PhpMyAdmin*/ 
include("db.php");

 /*a continuacion compruebo que esta agarrando los datos de los campos del formulario con action y methos POST
 y genero unas condicionales que adviertan al cliente en caso de que sea necesario añadir o modificar
 algun campo */

if(isset($_POST['enviar'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $dblcheck = $_POST['dblcheck'];
    if( $username === '' || $password === '' || $dblcheck === ''){
        echo'Complete todos los campos , recuerde que el ';
    };
    if(strlen($password) < 8){
        echo"Password ha de tener un minimo de 8 caracteres."."<br/>";
    }else if($password === $dblcheck){
        echo"Login correcto"."<br/>"."Username :"."\n"."$username"."<br/>"."Password :"."\n".
        "$password"."<br/>"."Double check :"."\n"."$dblcheck"."<br/>";
    }else{
        echo"Passwords no coinciden , por favor"."\n"."Revise sus datos..."."<br/>"."Username :"."\n"."$username"."<br/>"."Password :"."\n".
        "$password"."<br/>"."Double check :"."\n"."$dblcheck"."<br/>";
    };
     /*creo una variable query que va equivaler a la instruccion de que inserte en la tabla registro en las columnas
     especificadas los valores que el usuario introduce*/
    
    $query = "INSERT INTO registro(username , password , dblcheck) VALUES('$username','$password','$dblcheck')";
    $result = mysqli_query($conn ,$query);
    //por ultimo si envio correctamente la informacion me de un mensaje positivo de lo contrario negativo
    if(!$result){
        die('error al enviar los datos al servidor');
    }
    echo 'Datos enviados con exito al servidor PhpMyAdmin dataBase"php_mysql_crud" tabla "Registro"';
};






?>