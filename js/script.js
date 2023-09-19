// 1. seleziono il container e lo salvo in una variabile
const container   = document.querySelector('.container');
// 2. Creo un bottone 
const startButton = document.getElementById("start");
const replyButton = document.getElementById("reply");
// 8. creo una lista bombe che saranno 16 numeri random ;
let bombe = [];
let message;
counter = 0;
let giocoTerminato = false;


startButton.addEventListener('click', function(){
  reset();
  container.classList.add('none');

    // 3. faccio un ciclo su 100
  for(let i = 1; i <= 100; i++){
    // 4.2. ad ogni ciclo devo far generare un quadrato
    square = addSquare(i);
  
    square.addEventListener('click', function(){
      console.log(this._squareId)
  
      this.classList.add('clicked');
      
      const clickBombs = bombe.includes(this._squareId);

      // 9. creo una condizione in cui se il quadrato premuto nasconde una bomba oppure non ci sono più quadrati senza bombe allora il gioco si conclude mostra le altre bombe e mi restituisce un messaggio con i punti fatti
      if(clickBombs){
        this.classList.add('redbomb');
        container.classList.add('end');
        message = `hai colpito una bomba - hai perso - il tuo punteggio è ${counter}`;
        giocoTerminato = true;

      }else if(( 84 == counter)){
        
        message = "Hai vinto";

        // 10. altrimenti incremento il contatore di uno e proseguo con il gioco
      }else if(!clickBombs){
        counter++;
        message = "prosegui";
      }
      console.log(counter)
      document.getElementById('output').innerHTML = message;
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
  
  while (bombe.length < 16) {
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;
    if (!bombe.includes(numeroCasuale)) {
        bombe.push(numeroCasuale);
    }
  }  

  console.log(bombe)


  // 5. resetto i quadrati nell'html 
  function reset(){
    container.innerHTML = '';
  }

  replyButton.addEventListener('click', function(){
    location.reload();
  })