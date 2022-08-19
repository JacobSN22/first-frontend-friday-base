// data to have fun with
const myTestObject = {
    elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'Elefanter er en familie i klassen pattedyr med traditionelt to nulevende arter, den afrikanske og den asiatiske. Ny forskning tyder dog på, at den afrikanske elefant skal opdeles, så der derfor i alt findes tre arter.' },
    tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: 'Tigeren er den største katteart med en total kropslængde på op til 3,22 meter og i ekstreme tilfælde med en vægt på op til 388.7 kilo i naturen. Det mest genkendelige træk ved tigeren er pelsen med mørke tværstriber på orange bund. Tigre er superrovdyr, der især lever af hovdyr såsom hjorte og skedehornede.' },
    spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'Edderkopper er karakteriseret ved at have en todelt krop, otte ben, spindevorter og giftkirtler. Der er ca. 500 arter af edderkopper i Danmark og ca. 49.800 beskrevne arter i verden. De fleste edderkopper slår deres bytte ihjel ved hjælp af gift, og bortset fra en enkelt planteæder er de alle sammen rovdyr.' },
    koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'Koalaen er et pungdyr, der lever i Australien. Koalaen er tidligere fejlagtigt blevet betegnet som "koalabjørn" eller "pungbjørn" da man, grundet dens ydre, førhen troede, den var en bjørn. Dette er dog ikke korrekt; koalaen er ikke en bjørneart men er pungdyr beslægtet med bl.a. kænguruen.' },
};

let galleryCardClass = 'galleryCard';

// the app lives here
const myApp = document.getElementById('app');

buildGallery()

// for loop to use with objects and keys
function buildGallery() {
for (let myIndex in myTestObject) {
    let myName = myTestObject[myIndex].name;
    let myUrl = myTestObject[myIndex].picture;
    let myDescription = myTestObject[myIndex].description;

    buildCard(myName, myUrl, myDescription)
}
}


function buildCard(myHeadline,myUrl,myDescription,clearParent){
    if(clearParent){
        myApp.innerHTML= ' ';
    }
    
    // card elements
    const myCard = document.createElement('figure');
    const cardHeadline = document.createElement('h2');
    const cardImage = document.createElement("img");
    const cardDescription = document.createElement('p');
    // modular method
    console.log(cardImage);
    
    cardHeadline.innerText=myHeadline;
    cardImage.src=myUrl;
    cardDescription.innerText=myDescription;
    
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);
    
    myCard.classList.add(galleryCardClass);
    
    myApp.appendChild(myCard)
    }
    
    
    
    // debug functions ----------------------------------------------------------------------------
// //  creates a simple headline with the textmsg in a h2 in the supplied id
// // testCard('weee', 'app');
// function testCard(textMsg, myId, clearContainer) {
//     let myParent = document.getElementById(myId);

//     // clear if clearContainer is set
//     if (clearContainer) {
//         myParent.innerHTML = '';
//     }

//     // create elements
//     let myHeadline = document.createElement('h2');
//     myHeadline.innerText = textMsg;
//     myParent.appendChild(myHeadline);

// }