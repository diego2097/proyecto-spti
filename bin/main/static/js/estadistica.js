var estadisticaModule = (function() {
  var _contrasenas = null;
  var dic = {};
  var dic2 = {};
  var debiles = 0;
  var medias = 0;
  var fuertes = 0;

  _getContrasena = function(contrasenas) {
    _contrasenas = contrasenas;
    //console.log(_contrasenas);
    for (i = 0; i < _contrasenas.length; i++) {
      _evaluatePassword(_contrasenas[i]);
      if (_contrasenas[i] in dic) {
        dic[_contrasenas[i]]++;
      } else {
        dic[_contrasenas[i]] = 1;
      }
    }
  };

  _evaluatePassword = function(password) {
    //console.log(password);
    const regxs = {
      lower: /^[a-z]+$/,
      upper: /^[A-Z]+$/,
      upperLower: /^[A-Za-z]+$/,
      number: /^[0-9]+$/,
      upperLowerNumber: /^[A-Za-z0-9]+$/,
      upperLowerNumberPoint: /^[A-Za-z0-9]+$/,
      puntos: /[!-.|0-9]/
    };

    var puntuacion = password.length;

    if (regxs.lower.test(password)) {
      //console.log(1);
      puntuacion *= 1;
    } else if (regxs.upper.test(password)) {
      //console.log(11);
      puntuacion *= 1;
    } else if (regxs.number.test(password)) {
      //console.log(111);
      puntuacion *= 1;
    } else if (regxs.upperLower.test(password)) {
      //console.log(2);
      puntuacion *= 2;
    } else if (regxs.upperLowerNumber.test(password)) {
      //console.log(4);
      puntuacion *= 3;
    } else if (regxs.puntos.test(password)) {
      //console.log(123);
      puntuacion *= 4;
    }
    //console.log(puntuacion);
    if (puntuacion < 10) {
      debiles += 1;
    } else if (puntuacion > 10 && puntuacion < 20) {
      medias += 1;
    } else {
      fuertes += 1;
    }
  };

  function leerArchivo(e) {
    var archivo = e.target.files[0];
    //console.log(archivo);
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
    //console.log(dic);
    var lista = contenido.split("\n");
    for (i = 0; i < lista.length; i++) {
      var temp = lista[i].trim();
      if (temp in dic) {
        if (temp in dic2) {
          dic2[temp]++;
        } else {
          dic2[temp] = 1;
        }
      }
    }
    console.log(dic2);
    //var elemento = document.getElementById("contenido-archivo");
    //elemento.innerHTML = contenido;
    var elemento = '<table class="table table-striped table-dark"><tbody>';
    elemento +=
      '<thead><tr><th scope="col">Contraseña</th>' +
      '<th scope="col">Frecuencia</th></tr></thead>';
    for (var key in dic2) {
      var value = dic2[key];
      if (value > 0) {
        elemento +=
          "<tr><td>" + key + "</td>" + "<td>" + dic2[key] + "</td></tr>";
      }
    }
    elemento += "</tbody></table>";
    $("#wordlist").html(elemento);
  }

  return {
    init: function() {
      apiclient.getContrasenas(_getContrasena);
      document
        .getElementById("file-input")
        .addEventListener("change", leerArchivo, false);
    },
    getDic: function() {
      return dic;
    },
    getDebiles: function() {
      return debiles;
    },
    getMedias: function() {
      return medias;
    },
    getFuertes: function() {
      return fuertes;
    }
  };
})();
