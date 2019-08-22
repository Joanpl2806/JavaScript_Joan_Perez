var Calculadora = {
  init: function(){
    this.reducirBtn.ejecutar();
    this.aumentarBtn()
    this.sumar()
    this.restar()
    this.multiplicar()
    this.dividir()
  },
  reducirBtn: {
    botones: document.getElementsByClassName('tecla'),
    ejecutar: function(){
      for(let i=0; i<this.botones.length; i++){
        this.botones[i].onclick = function(e){
          e.target.style.transform = "scale(.95,.95)"
          if(document.getElementById('display').textContent.length < 8){
            Calculadora.digitarNumeros(e.target)
          }else if (document.getElementById('display').textContent.length == 8 && e.target.id == 'on') {
            Calculadora.digitarNumeros(e.target)
          }
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
    var valorPantalla = document.getElementById("display").textContent
    var pantalla = document.getElementById("display")
    if(valorPantalla == '0'){
      if(digito == '0'){
        pantalla.innerHTML = '0'
      }else if (digito == 'on') {
        pantalla.innerHTML = '0'
      }else if (digito == 'punto') {
        pantalla.innerHTML += '.'
      }else {
        if(digito != 'mas' && digito != 'menos' && digito != 'por' && digito != 'dividido' && digito != 'sing' && digito != 'raiz' && digito != 'igual'){
          pantalla.innerHTML = digito
        }
      }
    }else {
      if (digito == 'on') {
        pantalla.innerHTML = '0'
      }else if (digito == 'punto') {
        pantalla.innerHTML += '.'
      }else {
        if(digito != 'mas' && digito != 'menos' && digito != 'por' && digito != 'dividido' && digito != 'sing' && digito != 'raiz' && digito != 'igual'){
          pantalla.innerHTML += digito
        }
      }
    }
  },
  sumar: function(){
    document.getElementById('mas').addEventListener('click', function(){
      var valor1 = document.getElementById('display').textContent
      document.getElementById('display').innerHTML = '0'
      document.getElementById('igual').onclick = function(e){
        var valor2 = document.getElementById('display').textContent
          var resultado = parseFloat(valor1) + parseFloat(valor2)
          document.getElementById('display').innerHTML = resultado
      }
    })
  },
  restar: function(){
    document.getElementById('menos').addEventListener('click', function(){
      var valor1 = document.getElementById('display').textContent
      document.getElementById('display').innerHTML = '0'
      document.getElementById('igual').onclick = function(e){
        var valor2 = document.getElementById('display').textContent
          var resultado = parseFloat(valor1) - parseFloat(valor2)
          document.getElementById('display').innerHTML = resultado
      }
    })
  },
  multiplicar: function(){
    document.getElementById('por').addEventListener('click', function(){
      var valor1 = document.getElementById('display').textContent
      document.getElementById('display').innerHTML = '0'
      document.getElementById('igual').onclick = function(e){
        var valor2 = document.getElementById('display').textContent
          var resultado = parseFloat(valor1) * parseFloat(valor2)
          document.getElementById('display').innerHTML = resultado
      }
    })
  },
  dividir: function(){
    document.getElementById('dividido').addEventListener('click', function(){
      var valor1 = document.getElementById('display').textContent
      document.getElementById('display').innerHTML = '0'
      document.getElementById('igual').onclick = function(e){
        var valor2 = document.getElementById('display').textContent
          var resultado = parseFloat(valor1) / parseFloat(valor2)
          document.getElementById('display').innerHTML = resultado
      }
    })
  }
}

Calculadora.init()
