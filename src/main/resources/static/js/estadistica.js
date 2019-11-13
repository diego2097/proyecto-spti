var estadisticaModule = (function() {
  var _contrasenas = null;
  var dic = {};
  var debiles = 0;  
  var medias = 0; 
  var fuertes = 0;

  _getContrasena = function(contrasenas) {
    _contrasenas = contrasenas;
    console.log(_contrasenas);
     for (i = 0; i < _contrasenas.length; i++) {
      _evaluatePassword(_contrasenas[i]);      
      if (_contrasenas[i] in dic) {
        dic[_contrasenas[i]]++;
      } else {
        dic[_contrasenas[i]] = 1;
      }
    }
  };


  _evaluatePassword = function(password){
    console.log(password);
    const regxs = {
      "lower": /^[a-z]+$/,
      "upper": /^[A-Z]+$/,
      "upperLower": /^[A-Za-z]+$/,
      "number": /^[0-9]+$/,
      "upperLowerNumber": /^[A-Za-z0-9]+$/,
      "upperLowerNumberPoint": /^[A-Za-z0-9]+$/
    };
      
      if (regxs.lower.test(password)) {
        console.log(1);
      }
      else if (regxs.upper.test(password)){
        console.log(11);
      }
      else if (regxs.number.test(password)){
        console.log(111);
      }
      else if (regxs.upperLower.test(password)){
        console.log(2);
      }
      else if (regxs.upperLowerNumber.test(password)){
        console.log(4);
      }
     
  }

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
    var lista = contenido.split("\n");
    for (i = 0; i < lista.length; i++) {
      if (lista[i] in dic) {
        dic[lista[i]]++;
      } else {
        dic[lista[i]] = 0;
      }
    }
    console.log(dic);
    var elemento = document.getElementById("contenido-archivo");
    //elemento.innerHTML = contenido;
  }

  return {
    init: function() {
      apiclient.getContrasenas(_getContrasena);
      document
        .getElementById("file-input")
        .addEventListener("change", leerArchivo, false);
    },
    getDic: function(){
      return dic;
    }
  };
})();
