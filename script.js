let currentImageIndex = 0;

let images = [
    {
        src: "img/gallery/Component 6.svg",
        altText: "picture: city by night"
    },
    {
        src: "img/gallery/Component 7.svg",
        altText: "picture from clouds dark and light"
    },
    {
        src: "img/gallery/Component 8.svg",
        altText: "picture from a bird um the tree"
    },
    {
        src: "img/gallery/Component 9.svg",
        altText: "pictur from builing from a twister from the space"
    },
    {
        src: "img/gallery/Component 10.svg",
        altText: "picture from a river and mountains in winter "
    },
    {
        src: "img/gallery/Component 11.svg",
        altText: "picture from a duck in water that start to fly"
    },
    {
        src: "img/gallery/Component 12.svg",
        altText: "picture from a men in a rock in water by night with a flashlight"
    },
    {
        src: "img/gallery/Component 13.svg",
        altText: "picture from a bird of stones"
    },
    {
        src: "img/gallery/Component 14.svg",
        altText: "picture from two leoprd kitten of a stone"
    },
    {
        src: "img/gallery/Component 15.svg",
        altText: "picture from mountains peaks "
    },
    {
        src: "img/gallery/Component 16.svg",
        altText: "picture from cfrozen single tree"
    },
        {
        src: "img/gallery/Component 17.svg",
        altText: "picture from frozen lake with mountains with snow-capped peaks "
    },


];

function render(){
    let container = document.getElementById('gallery');
    
    // Container sauber machen
    container.innerHTML = ""; 
    
    // Die Schleife geht jetzt durch unser neues 'images'-Array
    for (let index = 0; index < images.length; index++) {
    
        container.innerHTML += /*html*/`<img onclick="openOverlay(${index})" src="${images[index].src}" alt="${images[index].altText}">`;       
    }
}

function openOverlay(index) {
    currentImageIndex = index; // Wir merken uns die Nummer des angeklickten Bildes
    
    // 1. Hole den Pfad des angeklickten Bildes aus deinem Array
    let imagePath = images[currentImageIndex].src;
    
    // 2. Setze diesen Pfad in das große Bild im Overlay ein
    document.getElementById('overlay-img').src = imagePath;
    
    // 3. Mache das Overlay sichtbar, indem wir die Klasse 'd-none' entfernen
    document.getElementById('overlay').classList.remove('d-none');
}

// Diese Funktion wird aufgerufen, wenn du auf das 'X' klickst
function closeOverlay() {
    // Verstecke das Overlay wieder, indem wir 'd-none' hinzufügen
    document.getElementById('overlay').classList.add('d-none');
}