// 9. creo una condizione in cui se il quadrato premuto nasconde una bomba oppure non ci sono più quadrati senza bombe allora il gioco si conclude mostra le altre bombe e mi restituisce un messaggio con i punti fatti
// 10. altrimenti incremento il contatore di uno e proseguo con il gioco


// 1. seleziono il container e lo salvo in una variabile
const container   = document.querySelector('.container');
// 2. Creo un bottone 
const startButton = document.getElementById("start");
reset();
// 8. creo una lista bombe che saranno 16 numeri random ;
const bombe = [];

startButton.addEventListener('click', function(){
  reset();
  container.classList.add('none');

  // 3. faccio un ciclo su 100
for(let i = 1; i <= 100; i++){
  // 4.2. ad ogni ciclo devo far generare un quadrato
  const square = addSquare(i);

// 6. per ogni quadrato aggiungere un evento al click
// 7. al click del quadrato aggiungere/togliere(toggle) la classe del click
square.addEventListener('click', function(){
    console.log(this._squareId)

    this.classList.toggle('clicked');
  })

  container.append(square)
}
})

  // 4.1. creo una funzione per generare quadrati 
  function addSquare(index){
  
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    newSquare._squareId = index;
    newSquare.innerHTML = `<span>${index}</span>`
    return newSquare;
  
  }
  
  for (let i = 0; i < 16; i++) {
    // Genera un numero casuale compreso tra 1 e 100
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;
    
    // Inserisci il numero casuale nell'array
    bombe.push(numeroCasuale);
  }

  console.log(bombe)

  // 5. resetto i quadrati nell'html 
  function reset(){
    container.innerHTML = '';
  }