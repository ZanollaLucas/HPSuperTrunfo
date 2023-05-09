const cartas = [
  {nome: "Luna Lovegood",
   imagem: "https://images.ctfassets.net/usf1vwtuqyxm/6zuXamYHQRkAw7fJszIeh8/360aa13dfafd4a7f31a6cea828c2ff14/WB-HP5-luna-lovegood-order-of-the-phoenix.jpg",
  atributos:{
    Inteligencia: 6,
    Habilidade: 6,
    Resistencia: 7,
    Experiencia: 4
  }
}, {
  nome: "Dobby, the houseelf",
  imagem: "https://i.ytimg.com/vi/4JUZsRXvI4w/maxresdefault.jpg",
  atributos:{
  Inteligencia: 4,
  Habilidade: 10,
  Resistencia: 5,
  Experiencia: 6
  }
}, {
  nome: "Harry James Potter",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
  atributos:{
  Inteligencia: 8,
  Habilidade: 9,
  Resistencia: 10,
  Experiencia: 9
  }
}, {
  nome: "Hermione Granger",
  imagem: "https://2.bp.blogspot.com/-BOwx46oVKrQ/Wc3Wnegr4eI/AAAAAAAAwWk/bMekHvnjNXALgMXaVT06NDQ4F4LqpODSgCLcBGAs/s1600/HermioneGranger_WB_F6_HermioneGrangerFullbody_V2_Promo_0801615_Port.jpg",
  atributos:{
  Inteligencia: 10,
  Habilidade: 9,
  Resistencia: 8,
  Experiencia: 8
  }
}, {
  nome: "Remus 'Moony' Lupin",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2021/02/remo-lupin-harry-potter.jpg",
  atributos:{
  Inteligencia: 9,
  Habilidade: 9,
  Resistencia: 8,
  Experiencia: 8
  }
}, {
  nome: "Ronald Weasley",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2020/08/Ron-Weasley-featured.jpg",
  atributos:{
  Inteligencia: 6,
  Habilidade: 8,
  Resistencia: 8,
  Experiencia: 8
  }
}, {
  nome: "Albus P. W. B. Dumbledore",
  imagem: "https://poltronanerd.com.br/wp-content/uploads/2017/02/albus-dumbledore_varinha.jpg",
  atributos:{
  Inteligencia: 10,
  Habilidade: 10,
  Resistencia: 9,
  Experiencia: 10
  }
}, {
  nome: "'Lord Voldemort' Tom Riddle",
  imagem: "https://poltronanerd.com.br/wp-content/uploads/2020/06/x20151209-085745.jpg.pagespeed.ic_.s7W4nSXNlp-1086x570.jpg",
  atributos:{
  Inteligencia: 9,
  Habilidade: 10,
  Resistencia: 10,
  Experiencia: 9
  }
}, {
  nome: "Gellert Grindelwald",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z20zxTGoqf4gQ-kQArNcepbfzYiCiJ5ibg&usqp=CAU", 
  atributos:{
  Inteligencia: 9.5,
  Habilidade: 10,
  Resistencia: 9,
  Experiencia: 10
  } 
}, {
  nome: "Argus Filch",
  imagem: "https://i.ytimg.com/vi/9HAqFMXVUNw/maxresdefault.jpg",
  atributos:{
  Inteligencia: 4,
  Habilidade: 2,
  Resistencia: 6,
  Experiencia: 5
}
}, {
  nome: "Alastor 'Mad-Eye' Moody",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2020/11/olho-tonto-moody-910x577.jpg",
  atributos:{
  Inteligencia: 8,
  Habilidade: 9.5,
  Resistencia: 9.5,
  Experiencia: 9
}
}, {
  nome: "Rubeus Hagrid",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXueO69sPQAKgjPzdB89DREamKiooWxX6FQ&usqp=CAU",
  atributos:{
  Inteligencia: 6.5,
  Habilidade: 4.5,
  Resistencia: 9,
  Experiencia: 9
}
}, {
  nome: "Fleur Delacour",
  imagem: "http://1.bp.blogspot.com/_aqGwKLWZ0xs/STdqJzvkRwI/AAAAAAAAAUk/xyfXRKP5ykk/s280/hp4_fleur.gif",
  atributos:{
  Inteligencia: 7.5,
  Habilidade: 8.5,
  Resistencia: 6,
  Experiencia: 7.5
}
} ]

var pontosJogador = 0
var pontosMaquina = 0

var cartaJogador
var cartaMaquina
var divCartaMaquina 
var molduraMaquina 

atualizarPlacar()
atualizarCartas()

function sortearCarta(){
  var numeroCartaM = parseInt(Math.random() * cartas.length)
  
  
  cartaMaquina = cartas[numeroCartaM];
  cartas.splice(numeroCartaM, 1)

  var numeroCartaJ = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJ];
  cartas.splice(numeroCartaJ, 1)

  
  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;
  atualizarCartas()
  exibeCartaJogador()  
 
  
}

function obtemAtributo(){
  var radioAtributo = document.getElementsByName('atributo')
  for (i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function resultis(){
  var divResultado = document.getElementById("resultado")
  
    if(pontosMaquina > pontosJogador){
      htmlResultado = "<p class='resultado-final'>AAVAAADA KEDAVRA! O Computador te matou! !</p>"
    }
     else if(pontosMaquina == pontosJogador) {
       htmlResultado = "<p class='resultado-final'>PRIORI ENCANTATEM! Empatou com o Computador!</p>"
     }
    else{
      htmlResultado = "<p class='resultado-final'>PROTEGO! Você venceu do Computador!</p>"
    }
    divResultado.innerHTML = htmlResultado
}

function jogar(){
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributo();
  var jogador = cartaJogador.atributos[atributoSelecionado]
  var oponente = cartaMaquina.atributos[atributoSelecionado]
    if(jogador > oponente){
      htmlResultado = "<p class='resultado-final'>PROTEGO! Você venceu de " + cartaMaquina.nome + "!</p>"
      pontosJogador++
    } else if (jogador < oponente){  
       htmlResultado = "<p class='resultado-final'>" + cartaMaquina.nome + " diz: AAVAAADA KEDAVRA! Te matei!</p>"
      pontosMaquina++;
     } else if (jogador = oponente){
       htmlResultado = "<p class='resultado-final'>PRIORI ENCANTATEM! Empatou com " + cartaMaquina.nome + "!</p>"
  }
  divResultado.innerHTML = htmlResultado
  exibirCartaMaquina();
  document.getElementById('btnJogar').disabled = true;


  atualizarPlacar()
  
  if(cartas.length < 2){
    alert("acabaram as castas eeeee ... Rufem os tambores")
    document.getElementById('btnProximaRodada').disabled = true;
    setTimeout(resultis, 5000)
    
  }
  else{
    document.getElementById('btnProximaRodada').disabled = false;
  }
  
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =   "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = "" 
  for(var atributo in cartaJogador.atributos){   //cria variavel apenas quando entrar na função, a cada loop muda de atributo
    opcoesTexto += "<input class='radio' type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " +  cartaJogador.atributos[atributo] + "<br>"
   }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
    
}

function exibirCartaMaquina() {
  divCartaMaquina = document.getElementById("carta-maquina");
  molduraMaquina =   "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = "" 
  
  for(var atributo in cartaMaquina.atributos){   //cria variavel apenas quando entrar na função, a cada loop muda de atributo
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " +  cartaMaquina.atributos[atributo] + "<br>"
   }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = molduraMaquina + nome + html + opcoesTexto + '</div>'
  
}

function atualizarPlacar(){
  var divPlacar = document.getElementById("placar")
  var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function atualizarCartas(){
  var divQuantidadedeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadedeCartas.innerHTML = html
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
  
}