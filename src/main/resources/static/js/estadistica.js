var estadisticaModule = (function() {
  var _contrasenas = null;
  var dic = {};

  _getContrasena = function(contrasenas) {
    _contrasenas = contrasenas;
    console.log(_contrasenas);
    for (i = 0; i < _contrasenas.length; i++) {
      if (_contrasenas[i] in dic) {
        dic[_contrasenas[i]]++;
      } else {
        dic[_contrasenas[i]] = 1;
      }
    }
  };
  function leerArchivo(e) {
    var archivo = e.target.files[0];
    console.log(archivo);
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
  }

  function mostrarContenido(contenido) {
    console.log(dic);
    console.log(contenido.split("\n"));
    var elemento = document.getElementById("contenido-archivo");
    elemento.innerHTML = contenido;
  }

  return {
    init: function() {
      apiclient.getContrasenas(_getContrasena);
      document
        .getElementById("file-input")
        .addEventListener("change", leerArchivo, false);
    }
  };
})();
