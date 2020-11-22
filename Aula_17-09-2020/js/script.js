
$('#fundo1').click(function () {
  $('body').addClass('bg-primary');
});

$('#fundo2').click(function () {
  $('body').addClass('bg-secondary');
});

$('#fundo3').click(function () {
  $('body').addClass('bg-success');
});

$('#fundo4').click(function () {
  $('body').addClass('bg-info');
});

$('#fundo5').click(function () {
  $('body').addClass('bg-warning');
});

$('#fundo6').click(function () {
  $('body').addClass('bg-danger');
});

$('#fundo7').click(function () {
  $('body').addClass('bg-light');
});

$('#fundo8').click(function () {
  $('body').addClass('bg-dark');
});






$('#botao').click(function () {
  $('#filme').hide();

});

$('#botao2').click(function () {
  $('#filme').show();

});


$('#botao3').click(function () {
  $('#serie').hide();

});

$('#botao4').click(function () {
  $('#serie').show();

});

$('#botao5').click(function () {
  $('#desenho').hide();

});

$('#botao6').click(function () {
  $('#desenho').show();

});


$('#envio').click(function (){
  alert("nome: "+$('form1').val()+"\nE-mail: " + $('#form2').val() +"\nMensagem: " + $('#form3').val());
});
