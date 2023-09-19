// 1. seleziono il container e lo salvo in una variabile
const container   = document.querySelector('.container');
// 2. Creo un bottone 
const startButton = document.getElementById("start");
reset();

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
  
  // 5. resetto i quadrati nell'html 
  function reset(){
    container.innerHTML = '';
  }
  
  // 8. imposto una funzione in modo che al click del bottone venga generata la griglia
  
  
  