
//a continuacion creo un constructor por si mas adelante queremos mostrar en la propia pagina los datos
class FORMULARIO{
    constructor(username,password,dblcheck){
        this.username = username;
        this.password = password;
        this.dblcheck = dblcheck;
    };
};

//llamo al div alarma en una variable global porque mas adelante la quiero llamar en otros metodos
var alarma = document.getElementById('alarma');

//creo una clase para introducir varios metodos (los que vengan en el futuro)
class UI{
    showMessage(message,cssClass){                                   //defino sus parametros como un mensage y su clase
          var alarma = document.getElementById('alarma');
          var h5 = document.createElement('h5');                     //ubico un header5 de clase alert y que contenga
          h5.appendChild(document.createTextNode(message));          //la clase de bostswacht concatenada con css
          h5.className = 'alert alert-'+cssClass;
          alarma.appendChild(h5);
    };
};

//llamp a la etiqueta formulario y guardo en constantes los valores de username , password y dblcheck

var formulario = document.getElementById('formulario');
formulario.addEventListener('submit' , function(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const dblcheck = document.getElementById('dblcheck').value;
    
    new FORMULARIO(username , password ,  dblcheck);
    var userInterface = new UI;                                

     /*con userInterface llamo a una nueva clase UI
     donde configurare los mensajes y creo una estructura de
     condicionales para los campos abajo*/
   

   if( username === '' || password === '' || dblcheck === ''){
       userInterface.showMessage('Complete todos los campos','warning');
   };
   if(password.length < 8){
       userInterface.showMessage('Contraseñas han de contener minimo de 8 caracteres','info');
   }else if(password === dblcheck){
       userInterface.showMessage('Passwords coinciden','success');
   }else{
       userInterface.showMessage('Passwords  no coinciden','danger');
   };
});
//aqui le doy una animacion a mi contenedor "QUE CONTIENE form y alarma"
var contenedor = document.getElementById('contenedor');
contenedor.addEventListener('mouseover',function(){
    contenedor.style.backgroundColor="#f1f2f6";
});
contenedor.addEventListener('mouseout',function(){
    contenedor.style.backgroundColor="white";
});




