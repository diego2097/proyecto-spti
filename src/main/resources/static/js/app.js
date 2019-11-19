app = (function () {
    // PROMESAS DEL REGISTRO
    var onSucessRegistro = function (data) {
        alert("Felicidades, tu codigo Promo es: 85724 redimelo en las taquillas de Cine Colombia");
        location.href='https://www.cinecolombia.com/bogota'

    }
    var onErrorRegistro = function (data) {
        console.log("error")
        alert("No se a podido autenticar  correctamente Por favor intente mas tarde");             
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