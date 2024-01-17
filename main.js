
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.




// cerco il bottone per generare la griglia
const btnPlayHtml=document.getElementById('play')
// associo la griglia
const grigliaHtml=document.getElementById('griglia')
// associo la scelta dell'utente
const scelta=document.getElementById('scelta')
// associo ad una variabile la scelta dell'utente
let valore=parseInt(scelta.value)
// creo un array vuoto
let arrayBombe=[ ]
let punteggio=0
// creo l'evento
btnPlayHtml.addEventListener('click', function(){
    // associo il valore della scelta utente ad un 
    // numero intero utilizzato poi per la creazione della griglia
    valore=parseInt(scelta.value)
    // resetto il valore della griglia
    grigliaHtml.innerHTML=""
    // nuovo array
    arrayBombe=nuovoArray()
    console.log(arrayBombe)
    // genero la griglia
   
    for (let i = 0; i < valore; i++) {

        let divBox = document.createElement("div")
        divBox.classList.add("box")
        if (valore===49){
            divBox.style.width="calc( 100% / 7)"
            divBox.style.height="calc(100% / 7)"
        }else if (valore===100){
            divBox.style.width="calc(100% / 10)"
            divBox.style.height="calc(100% / 10)"
        }else if(valore===81){
            divBox.style.width="calc( 100% / 9)"
            divBox.style.height="calc(100% / 9)"
        }
        divBox.innerHTML=`<span>${i+1}</span>`
        grigliaHtml.appendChild(divBox)
        divBox.addEventListener('click', function(){
            let span=this.querySelector('span')
            if (arrayBombe.includes(i)){
                divBox.classList.add("red")
                alert(`hai preso una bomba,hai totatlizzato un punteggio di: ${punteggio}`)
                reset()
            }else if(!(arrayBombe.includes(i))){
                divBox.classList.add("active")
                punteggio++
            }else if(punteggio===valore-arrayBombe.lenght){
                alert(`bravo hai completato il livello totalizzando un punteggio di: ${punteggio}`)
                reset()
            }
            
        })
    }
   
})

// creo funzione per generare numeri casuali

function numCasuale(){
    let risultato=0
    
       for (let i=0; i<valore; i++){
            risultato=Math.floor(Math.random() * (valore - 1 + 1 ) + 1)
       }
    
    return risultato
}
// funzione per generare un nuovo array in base alla scelta
function nuovoArray(){
    let nuovoArrayBombe=[]
    for (i=0 ;i<16; i++){
        let random=numCasuale()
        
        if (nuovoArrayBombe.includes(random)){
            i--
        }else{
            nuovoArrayBombe.push(random)
        } 
    }
    return nuovoArrayBombe
}
// funzione per il reset
function reset(){
    grigliaHtml.innerHTML=""
    arrayBombe=[ ]
    punteggio=0
}