var Calculadora = {
  reducirTamano: function(e){
    var btn = e.target.id
    if(btn == 'on' || btn == 'sign' || btn == 'raiz' || btn == 'dividido' || btn == '7' || btn == '8' || btn == '9' || btn == 'por' || btn == '4' || btn == '5' || btn == '6' || btn == 'menos'){
      e.target.style.width = "20%"
      e.target.style.height = "60px"
    }else if (btn == '1' || btn == '2' || btn == '3' || btn == '0' ||  btn == 'punto' || btn == 'igual') {
      e.target.style.width = "27%"
      e.target.style.height = "60px"
    }else if(btn == 'mas'){
      e.target.style.width = "85%"
      e.target.style.height = "95%"
    }else {
      console.log(btn)
    }
  },
  aumentarTamano: function(e){
    var btn = e.target.id
    if(btn == 'on' || btn == 'sign' || btn == 'raiz' || btn == 'dividido' || btn == '7' || btn == '8' || btn == '9' || btn == 'por' || btn == '4' || btn == '5' || btn == '6' || btn == 'menos'){
      e.target.style.width = "22%"
      e.target.style.height = "62.91px"
    }else if (btn == '1' || btn == '2' || btn == '3' || btn == '0' ||  btn == 'punto' || btn == 'igual') {
      e.target.style.width = "29%"
      e.target.style.height = "62.91px"
    }else if(btn == 'mas'){
      e.target.style.width = "90%"
      e.target.style.height = "100%"
    }else {
      console.log(btn)
    }
  }
}

document.onclick = Calculadora.reducirTamano;
document.onmouseout = Calculadora.aumentarTamano;
