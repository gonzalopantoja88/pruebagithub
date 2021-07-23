$(document).ready(iniciar);

let fecha = new Date();

function iniciar() {
    $("#formulario").hide();
    $(".mostrarFormulario").on("click", mostrar);
    $("#publicar").on("click", publicarNoticia);
}

function mostrar() {
    $("#titulo").val('');
    $("#contenido").val('');
    $("#imagen").val('');
    $("#formulario").slideDown();
}

function publicarNoticia() {
    let titulo = $("#titulo").val();
    let contenido = $("#contenido").val();
    let urlImagen = $("#imagen").val();

    let noticiaNueva = `<div class="row">
                            <div class="col-md-8 unaNoticia">
                                <h2>`+ titulo +`</h2>
                                <p>`+ contenido +`</p>
                                <p>`+ fecha +`</p>
                                <p><button class="btn btn-warning fondo">Cambiar Fondo</button></p>
                            </div>  
                            <div class="col-md-4">
                                <img src="`+ urlImagen +`" class="rounded float-right img-thumbnail" alt="logo">
                            </div>
                        </div>`;

    //publica la noticia de primero con "prepend"
    $("#noticias").prepend(noticiaNueva);
    $("#formulario").hide();
    //apaga todos los click "botones" y solo ejecuta al que se preciona click.
    $(".fondo").off("click").on("click", cambiarFondo);
}

function cambiarFondo() {
    $(this).parents(".unaNoticia").addClass("bg-primary");
}