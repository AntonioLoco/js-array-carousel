const sliderImg = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const carouselImgControl = document.querySelector(".carousel-img-control");
const carouselImg = document.querySelector(".carousel-img");
const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");

const carouselImages = document.getElementsByTagName("img");
console.log(carouselImages);

// Inseriamo automaticamente le immagini
for(let i = 0; i < sliderImg.length; i++){
    // Creo la stringa da aggiungere
    const element =
    `
        <div class="item">
            <img src="${sliderImg[i]}" alt="">
        </div>
    `;

    const elementControl = 
    `
        <div class="item-control">
            <img src="${sliderImg[i]}" alt="">
        </div>
    `;

    // Aggiungo la stringa all HTML
    carouselImg.innerHTML += element;
    carouselImgControl.innerHTML += elementControl;
}

// Settiamo lo stato di partenza
const itemsList = document.getElementsByClassName("item");
const itemsControlList = document.getElementsByClassName("item-control");

let positionSlider = 0;
itemsList[positionSlider].classList.add("active");
itemsControlList[positionSlider].classList.add("active");


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
            itemsControlList[itemsList.length - 1].classList.remove("active");
            carouselImages[itemsList.length - 1].classList.remove("next-animation");

        } else {
            // Rimuovere la classe active all'elemento corrente
            itemsList[positionSlider].classList.remove("active");
            itemsControlList[positionSlider].classList.remove("active");
            carouselImages[positionSlider].classList.remove("next-animation");

        }

        //Incrementare la variabile della posizione
        positionSlider++;
    
        // Aggiungere la classe active al nuovo elemento
        carouselImages[positionSlider].classList.add("next-animation");
        itemsList[positionSlider].classList.add("active");
        itemsControlList[positionSlider].classList.add("active");
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
            itemsControlList[0].classList.remove("active");
            carouselImages[0].classList.remove("prev-animation");


        } else {
            // Rimuovere la classe active all'elemento corrente
            itemsList[positionSlider].classList.remove("active");
            itemsControlList[positionSlider].classList.remove("active");
            carouselImages[positionSlider].classList.remove("prev-animation");
        }

        //Decrementare la variabile della posizione
        positionSlider--;
    
        // Aggiungere la classe active al nuovo elemento
        carouselImages[positionSlider].classList.add("prev-animation");
        itemsList[positionSlider].classList.add("active");
        itemsControlList[positionSlider].classList.add("active");
    }

});

// BONUS AGGIUNTIVO
console.log(itemsControlList);

for(let i = 0; i < itemsControlList.length; i++){
    itemsControlList[i].addEventListener("click", function(){
        // rimuoviamo la classe active dall' elemento corrente
        itemsList[positionSlider].classList.remove("active");
        itemsControlList[positionSlider].classList.remove("active");
        carouselImages[positionSlider].classList.remove("prev-animation");

        let animation = "";
        if(i > positionSlider){
            animation = "next-animation";
        } else {
            animation = "prev-animation";
        }

        // Impostiamo la posizione attuale dell'elemento
        positionSlider = i;

        // Aggiungere la classe active al nuovo elemento
        itemsList[positionSlider].classList.add("active");
        itemsControlList[positionSlider].classList.add("active");
        carouselImages[positionSlider].classList.add(animation);


    })
}