const sliderImg = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const carouselImg = document.querySelector(".carousel-img");

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