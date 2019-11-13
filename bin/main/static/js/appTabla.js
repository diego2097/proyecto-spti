appTabla = (function () {
    // PROMESAS DEL REGISTRO
    var generarTabla = function () {
        var dict = estadisticaModule.getDic();
        var elemento = '<table class="table table-striped table-dark"><tbody>';
        elemento += '<thead><tr><th scope="col">Contraseña</th>' +
            '<th scope="col">Frecuencia</th></tr></thead>';
        for (var key in dict) {
            var value = dict[key];
            if (value > 0) {
                elemento += '<tr><td>' + key + '</td>' + '<td>' + dict[key] + '</td></tr>';
            }
            //elemento+='<tr><td>'+key+'</td></tr>'+'<tr><td>'+dict[key]+'</td></tr>';
            // do something with "key" and "value" variables
        }
        elemento += '</tbody></table>';
        $("#datos").html(elemento)
        elemento = '<table class="table table-striped table-dark"><tbody>';
        elemento += '<thead><tr><th scope="col">Tipo De Contraseñas</th>' +
            '<th scope="col">Numero Total:</th></tr></thead>';
        
        elemento += '<tr><td>' + 'Debiles' + '</td>' + '<td>' + estadisticaModule.getDebiles() + '</td></tr>';
        elemento += '<tr><td>' + 'Medias' + '</td>' + '<td>' + estadisticaModule.getMedias() + '</td></tr>';
        elemento += '<tr><td>' + 'Fuertes' + '</td>' + '<td>' + estadisticaModule.getFuertes() + '</td></tr>';
        elemento += '</tbody></table>';
        $("#datos2").html(elemento)
    }

    return {
        generarTabla: generarTabla

    }
})();