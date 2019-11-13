apiclient = (function() {
  return {
    login: function(datos, succ, err) {
      $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "/users",
        data: datos,
        success: succ,
        error: err
      });
    },
    getContrasenas: function(callback) {
      $.ajax({
        url: "/contrasenas",
        success: function(result) {
          //console.log(result);
          callback(result);
        }
      });
    }
  };
})();
