$('#azul').click(function () {​​​​

    $('body').addClass('bg-primary');
  
  }​​​​)

  $('#cinza').click(function () {​​​​

    $('body').addClass('bg-secondary');
  
  }​​​​)

  $('#verde').click(function () {​​​​

    $('body').addClass('bg-success');
  
  }​​​​)

  $('#vermelho').click(function () {​​​​

    $('body').addClass('bg-danger');
  
  }​​​​)

  $('#amarelo').click(function () {​​​​

    $('body').addClass('bg-warning');
  
  }​​​​)

  $('#azul-claro').click(function () {​​​​

    $('body').addClass('bg-info');
  
  }​​​​)

  $('#branco').click(function () {​​​​

    $('body').addClass('bg-ligth');
  
  }​​​​)

  $('#preto').click(function () {​​​​

    $('body').addClass('bg-dark');
  
  }​​​​)

  $('#b1').click(function () {​​

    $('#aparecer').hide();
  
  
  
  }​​);
  
  
  
  $('#b2').click(function () {​​
  
    $('#aparecer').show();
  
  
  
  }​​);
  
  
  
  
  $('#b3').click(function () {​​
  
    $('#aparecer2').hide();
  
  
  
  }​​);
  
  
  
  $('#b4').click(function () {​​
  
    $('#aparecer2').show();
  
  
  
  }​​);
  
  
  
  $('#b5').click(function () {​​
  
    $('#aparecer3').hide();
  
  
  
  }​​);
  
  
  
  $('#b6').click(function () {​​
  
    $('#aparecer3').show();
  
  
  
  }​​);

  $('#enviar').click(function (){​​

    alert("nome: "+$('form1').val()+"\nE-mail: " + $('#form2').val() +"\nMensagem: " + $('#form3').val());
  
  }​​);
