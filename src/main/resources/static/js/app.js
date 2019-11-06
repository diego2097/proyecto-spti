app = (function () {
    // PROMESAS DEL REGISTRO
    var onSucessRegistro = function (data) {
        console.log("appc")
        alert("Ha sido registrado exitosamente");

    }
    var onErrorRegistro = function (data) {
        console.log("error")
        alert("No se pudo realizar el registro correctamente");
        
    }
    
    return {

        login: function (name) {
            
            var user = {
                "correo": $('#correo').val(),
                "telefono": 123456,
                "contrasena": $('#contrasena').val(),
            };
            console.log(user)
            user = JSON.stringify(user); //parsea a formato JSON
            return apiclient.login(user, onSucessRegistro,
                onErrorRegistro);
        },
        
    }
})();