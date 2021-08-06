$( document ).ready( function () {
    // Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    // Enviar alerta mediante el id enviarCorreo
    $("#enviarCorreo").on('click', function (event) {
        alert("El correo fue enviado correctamente...")
    });
});