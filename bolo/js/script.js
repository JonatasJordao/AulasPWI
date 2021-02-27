var limao = "Limão";
var cenoura = "Cenoura";

$('#limao').hide();
$('#cenoura').hide();
$('#erro').hide();

$(document).ready(function () {
  $("#pesquisar").click(function () {
    if ($("#nome").val() == limao) {
      $('#limao').show()
      $('#cenoura').hide();
      $('#erro').hide();
    } else {
      if ($("#nome").val() == cenoura) {
        $('#cenoura').show()
        $('#limao').hide();
        $('#erro').hide();
      } else {
        $('#erro').show()
        $('#limao').hide();
        $('#cenoura').hide()
      }
    }
  });
});

$('#bolo-limao').hide();

$('#mostrarLimao').click(function () {
  $('#bolo-limao').show();
});

$('#esconderLimao').click(function () {
  $('#bolo-limao').hide();
});



$('#bolo-cenoura').hide();

$('#mostrarCenoura').click(function () {
  $('#bolo-cenoura').show();
});

$('#esconderCenoura').click(function () {
  $('#bolo-cenoura').hide();
});