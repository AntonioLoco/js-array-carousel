const sliderImg = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const carouselImg = document.querySelector(".carousel-img");
const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");

// Inseriamo automaticamente le immagini
for(let i = 0; i < sliderImg.length; i++){
    // Creo la stringa da aggiungere
    const element =
    `
        <div class="item">
            <img src="${sliderImg[i]}" alt="">
        </div>
    `;

    // Aggiungo la stringa all HTML
    carouselImg.innerHTML += element;
}

// Settiamo lo stato di partenza
const itemsList = document.getElementsByClassName("item");
console.log(itemsList);

let positionSlider = 0;
itemsList[positionSlider].classList.add("active");


// Gestiamo l'evento click sul bottone next
nextBtn.addEventListener("click", function(){

    // Controlliamo se l'indice non supera la lunghezza della lista immagini
    if( positionSlider <= itemsList.length - 1){

        // Controlliamo se siamo all' ultimo elemento
        if(positionSlider === itemsList.length - 1){
            // Impostiamo la posizione attuale al primo elemento
            positionSlider = -1;

            // Rimuovere la classe active dall'ultimo elemento della lista
            itemsList[itemsList.length - 1].classList.remove("active");
        } else {
            // Rimuovere la classe active all'elemento corrente
            itemsList[positionSlider].classList.remove("active");
        }
    
        //Incrementare la variabile della posizione
        positionSlider++;
    
        // Aggiungere la classe active al nuovo elemento
        itemsList[positionSlider].classList.add("active");
    }

});


// Gestiamo l'evento click sul bottone prev
prevBtn.addEventListener("click", function(){

    // Controlliamo se l'indice è maggiore di 0
    if( positionSlider >= 0){

        // Controlliamo se siamo al primo elemento
        if(positionSlider === 0){
            // Impostiamo la posizione attuale all ultimo elemento
            positionSlider = itemsList.length;

            // Rimuovere la classe active dall'ultimo elemento della lista
            itemsList[0].classList.remove("active");

        } else {
            // Rimuovere la classe active all'elemento corrente
            itemsList[positionSlider].classList.remove("active");
        }

        //Decrementare la variabile della posizione
        positionSlider--;
    
        // Aggiungere la classe active al nuovo elemento
        itemsList[positionSlider].classList.add("active");
    }

});

