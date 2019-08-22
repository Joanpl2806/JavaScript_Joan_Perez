var Calculadora = {
  init: function(){
    this.reducirBtn.ejecutar();
    this.aumentarBtn()
  },
  reducirBtn: {
    botones: document.getElementsByClassName('tecla'),
    ejecutar: function(){
      for(let i=0; i<this.botones.length; i++){
        this.botones[i].onclick = function(e){
          e.target.style.transform = "scale(.95,.95)"
          Calculadora.digitarNumeros(e.target)
        }
      }
    }
  },
  aumentarBtn: function(){
    document.onmouseout = function(e){
      var btn = document.getElementsByClassName('tecla')
      for(let i=0; i<btn.length; i++){
        btn[i].onmouseout = function(e){
          e.target.style.transform = "scale(1,1)"
        }
      }
    }
  },
  digitarNumeros: function(boton){
    var digito = boton.id
    var num1, num2, operacion
    var valorPantalla = document.getElementById("display").textContent
    var pantalla = document.getElementById("display")
    if(valorPantalla == '0'){
      if(digito == '0'){
        pantalla.innerHTML = '0'
      }else if (digito == 'on') {
        pantalla.innerHTML = '0'
      }else if (digito == 'mas') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = btn
      }else if (digito == 'menos') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'por') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'dividido') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'igual') {
        num2 = valorPantalla
        switch (operacion) {
          case 'mas':

            break;
          case 'menos':

            break;
          case 'por':

            break;
          case 'dividido':

            break;
          default:
            alert("No se ha realizado ninguna operación")
        }
      }else if (digito == 'punto') {
        pantalla.innerHTML += '.'
      }else if (digito == 'raiz') {

      }else if (digito == 'sing') {

      }else {
        pantalla.innerHTML = digito
      }
    }else {
      if (digito == 'on') {
        pantalla.innerHTML = '0'
      }else if (digito == 'mas') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'menos') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'por') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'dividido') {
        num1 = valorPantalla
        pantalla.innerHTML = '0'
        operacion = digito
      }else if (digito == 'igual') {
        num2 = valorPantalla
        switch (operacion) {
          case 'mas':

            break;
          case 'menos':

            break;
          case 'por':

            break;
          case 'dividido':

            break;
          default:
            alert("No se ha realizado ninguna operación")
        }
      }else if (digito == 'punto') {
        pantalla.innerHTML += '.'
      }else if (digito == 'sing') {

      }else {
        pantalla.innerHTML += digito
      }
    }
  }
}

Calculadora.init()
