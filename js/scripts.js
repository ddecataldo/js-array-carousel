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

// Seleziono il contenitore che deve contenere l'immagine in anteprima
const contenitoreImmagineFull = document.querySelector(".image-full");
// Seleziono la row che deve contenere il codice per le thumb
const contenitoreImmagineThumb = document.querySelector(".row--image-thumb");
// Seleziono il contenitore che deve contenere il titolo
const contenitoreTitolo = document.querySelector(".title-image-full");
// Seleziono il contenitore che deve la descrizione
const contenitoreDescrizione = document.querySelector(".description-image-full");

// Assegno un valore all'indice corrente
let indiceCorrente = 0;
let indiceCorrenteTitle = 0;
let indiceCorrenteDescrizione = 0;

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

for (let x = 0; x < titolo.length; x++){

    const indiceTitolo = titolo[x];

    let titoloActive = "";

    // Se indice immagine = 0 allora inserisci la classe active
    if (indiceCorrenteTitle === x) { 
        titoloActive = "active";
    }

    tagTitolo = `<h1 class="${titoloActive}">${indiceTitolo}</h1>`;
    
    contenitoreTitolo.innerHTML += tagTitolo;
}

for (let y = 0; y < descrizione.length; y++){

    const indiceDescrizione = descrizione[y];

    let descrizioneActive = "";

    // Se indice immagine = 0 allora inserisci la classe active
    if (indiceCorrenteDescrizione === y) { 
        descrizioneActive = "active";
    }

    tagDescrizione = `<p class="${descrizioneActive}">${indiceDescrizione}</p>`;
    
    contenitoreDescrizione.innerHTML += tagDescrizione;

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

    // Seleziona l'elemento con la classe active
    const titoloAttivo = contenitoreTitolo.querySelector(".active");
    console.log(titoloAttivo, "titoloAttivo")
    // Rimuovi dall'elemento la classe active
    titoloAttivo.classList.remove("active");

    // Seleziona l'elemento con la classe active
    const descrizioneAttiva = contenitoreDescrizione.querySelector(".active");
    console.log(descrizioneAttiva, "descrizioneAttiva")
    // Rimuovi dall'elemento la classe active
    descrizioneAttiva.classList.remove("active");

    // Decremento l'indice
    indiceCorrente--; // -1
    indiceCorrenteTitle--;
    indiceCorrenteDescrizione--;

    // Se minore di 0 l'indice deve essere assegnato all'ultimo valore della lunghezza dell'array
    if (indiceCorrente < 0){
        indiceCorrente = immagini.length - 1;
    }
    if (indiceCorrenteTitle < 0){
        indiceCorrenteTitle = titolo.length - 1;
    }
    if (indiceCorrenteDescrizione < 0){
        indiceCorrenteDescrizione = descrizione.lenght -1;
    }

    // Devo applicare la classe active al nuovo elemento all'indice corrente

    // Selezione tutte le immagini presenti nel percorso css .image-full > img in modo da ricavare un "array".
    const appactive = document.querySelectorAll(".image-full > img");
    const titactive = document.querySelectorAll(".title-image-full > h1");
    const descactive = document.querySelectorAll(".description-image-full > p");

    // Ricavato l'array inserisco il mio indice e gli aggiungo la classe active
    const nuovoIndice = appactive[indiceCorrente].classList.add("active");
    const nuovoIndiceTitolo = titactive[indiceCorrenteTitle].classList.add("active");
    const nuovoIndiceDescrizione = descactive[indiceCorrenteDescrizione].classList.add("active");
    
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