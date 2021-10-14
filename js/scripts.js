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
let indiceCorrente = 0;

// Dobbiamo stampare il tag img
for (let i = 0; i < immagini.length; i++) {
    
    // ad ogni ciclo il contatore si incrementa e l'indice si sposta all'elemento successivo dell'array
    const indiceImmagine = immagini[i];

    let active = "";

    // Se indice immagine = 0 allora inserisci la classe active
    if (i === indiceCorrente) {
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

    // Tag img inserito nell'html
    if(active === "active") {
        contenitoreImmagineFull.innerHTML +=  tagImgFull;
    } else {
        contenitoreImmagineThumb.innerHTML += tagImgThumb;
    }
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
    }

});

// Cliccando sulla freccia in alto deve essere selezionata la thumb corrente e deve essere inserita come immagini di anteprima
arrowBottom.addEventListener("click", function () {

});