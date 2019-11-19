appS = (function () {
    // PROMESAS DEL REGISTRO
    var onSucessRegistro = function (data) {
        alert("se a realizado la autenticación de forma correcta.");
        location.href='/RedimirPremium.html'
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