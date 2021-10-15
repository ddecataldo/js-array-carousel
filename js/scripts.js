//Dichiarazione array con la lista delle immagini del carousel
const immagini = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

//Dichiarazione array con il nome della città corrispendente al luogo dell'immagine
const titolo = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

//Dichiarazione array con la descrizione corrispendente al luogo dell'immagine
const descrizione = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Seleziono il contenitore che deve contenere l'immagine
const contenitoreImmagineFull = document.querySelector(".image-full");
const contenitoreImmagineThumb = document.querySelector(".row--image-thumb");

// Assegno un valore all'indice corrente
let indiceCorrente = 3;

// Dobbiamo stampare il tag img
for (let i = 0; i < immagini.length; i++) {
    
    // ad ogni ciclo il contatore si incrementa e l'indice si sposta all'elemento successivo dell'array
    const indiceImmagine = immagini[i];

    let active = "";

    // Se indice immagine = 0 allora inserisci la classe active
    if (indiceCorrente === i) { // Se i = 4
        active = "active";
    }

    // Assegna a una variabile il tag img dell'immagine in anteprima
    const tagImgFull = `<img class="${active}" src="${indiceImmagine}" alt="Immagine indice #${i}">`;
    // Assegna a una variabile il tag img della thumb
    const tagImgThumb = `<div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="image-thumb">
                                <img src="${indiceImmagine}" alt="Immagine indice #${i}">
                            </div>
                        </div>`;

    // Se la classe è active inserisco l'immagine in anteprima altrimenti nelle thumb

    contenitoreImmagineFull.innerHTML +=  tagImgFull;
    contenitoreImmagineThumb.innerHTML += tagImgThumb;

}

// Selezione le classi delle freccie dove devo intervenireù
const arrowTop = document.querySelector(".arrow-top");
const arrowBottom = document.querySelector(".arrow-bottom");

// Cliccando sulla freccia in alto deve essere selezionata la thumb corrente e deve essere inserita come immagini di anteprima
arrowTop.addEventListener("click", function () {

    // Seleziona l'elemento con la classe active
    const immagineAttiva = contenitoreImmagineFull.querySelector(".active");
    // Rimuovi dall'elemento la classe active
    immagineAttiva.classList.remove("active");

    // Decremento l'indice
    indiceCorrente--; // -1

    // Se minore di 0 l'indice deve essere assegnato all'ultimo valore della lunghezza dell'array
    if (indiceCorrente < 0){
        indiceCorrente = immagini.length - 1;
    } // 4

    // Devo applicare la classe active al nuovo elemento all'indice corrente

    // Selezione tutte le immagini presenti nel percorso css .image-full > img in modo da ricavare un "array".
    const appactive = document.querySelectorAll(".image-full > img");

    // Ricavato l'array inserisco il mio indice e gli aggiungo la classe active
    const nuovoIndice = appactive[indiceCorrente].classList.add("active");
    


});

// Cliccando sulla freccia in alto deve essere selezionata la thumb corrente e deve essere inserita come immagini di anteprima
arrowBottom.addEventListener("click", function () {

    // Seleziona l'elemento con la classe active
    const immagineAttiva = contenitoreImmagineFull.querySelector(".active");
    // Rimuovi dall'elemento la classe active
    immagineAttiva.classList.remove("active");

    // Decremento l'indice
    indiceCorrente++; // -1

    // Se l'indice (parte da 0) è maggiore della lunghezza dell'array (parte da 1 per questo si sottrae 1) allora indiceCorrente = 0 
    if (indiceCorrente > immagini.length - 1){
        indiceCorrente = 0;
    } // 4

    // Devo applicare la classe active al nuovo elemento all'indice corrente

    // Selezione tutte le immagini presenti nel percorso css .image-full > img in modo da ricavare un "array".
    const appactive = document.querySelectorAll(".image-full > img");

    // Ricavato l'array inserisco il mio indice e gli aggiungo la classe active
    const nuovoIndice = appactive[indiceCorrente].classList.add("active");

});