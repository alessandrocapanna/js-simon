$(document).ready(
  function() {

    var numeriDaIndovinare = [];
    for (var i = 0; i < 5; i++) {
      var numeroRandom = Math.floor(Math.random()* 99 + 1 )
      if (!numeriDaIndovinare.includes(numeroRandom)) {
        numeriDaIndovinare.push(numeroRandom);
      }else {
        var numeroRandom = Math.floor(Math.random()* 99 + 1 )
        numeriDaIndovinare.push(numeroRandom)
      }

    }
    alert(numeriDaIndovinare);

    // NOTE countdown
    countDown(30);
    function countDown(secondi){
      var secondiCount = setInterval(function(){
        console.log(secondi);
        if (secondi == 0) {
          clearInterval(secondiCount);
          giocoUtente();
        }else {
          secondi--;
        }
      }, 1000);
    }


    // NOTE: funzione chiedere numeri e confrontarli con array numeri e contatore e stampo risultato
    function  giocoUtente() {
      var numeriUtenteIndovinati =[];
      var contatoreNumeriIndovinati = 0;
      for (var i = 0; i < 5; i++) {
        var numeroUtente = parseInt(prompt('inserisci un numero alla volta di quelli che ti ho appena mostaro'));
        if (numeriDaIndovinare.includes(numeroUtente) && !numeriUtenteIndovinati.includes(numeroUtente)) {
          contatoreNumeriIndovinati = contatoreNumeriIndovinati + 1 ;
          numeriUtenteIndovinati.push(numeroUtente);
        }
      }

      $('ul').append('<li>' + 'hai indovinato: ' + contatoreNumeriIndovinati + ' numeri' + '</li>');
      $('ul').append('<li>' + 'questi sono i numeri che hai indovito: ' + numeriUtenteIndovinati +'</li>');}
  }
);
