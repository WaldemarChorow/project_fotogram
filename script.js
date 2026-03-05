let currentImageIndex = 0;
let images = [
    {
        src: "img/gallery/Component 6.svg",
        srcLarge: "img/gallery/gallery_img_large/anime-8788959_1280.jpg",
        altText: "picture: city by night"
    },
    {
        src: "img/gallery/Component 7.svg",
        srcLarge: "img/gallery/gallery_img_large/atmosphere-8752835_1280.png",
        altText: "picture from clouds dark and light"
    },
    {
        src: "img/gallery/Component 8.svg",
        srcLarge: "img/gallery/gallery_img_large/blue-tit-8521052_1280.jpg",
        altText: "picture from a bird um the tree"
    },
    {
        src: "img/gallery/Component 9.svg",
        srcLarge: "img/gallery/gallery_img_large/hurricane-92968_1280.jpg",
        altText: "pictur from builing from a twister from the space"
    },
    {
        src: "img/gallery/Component 10.svg",
        srcLarge: "img/gallery/gallery_img_large/lake-2896379_1280.jpg",
        altText: "picture from a river and mountains in winter "
    },
    {
        src: "img/gallery/Component 11.svg",
        srcLarge: "img/gallery/gallery_img_large/moorente-8783210_1280.jpg",
        altText: "picture from a duck in water that start to fly"
    },
    {
        src: "img/gallery/Component 12.svg",
        srcLarge: "img/gallery/gallery_img_large/sea-2563389_1280.jpg",
        altText: "picture from a men in a rock in water by night with a flashlight"
    },
    {
        src: "img/gallery/Component 13.svg",
        srcLarge: "img/gallery/gallery_img_large/lake-2896379_1280.jpg",
        altText: "picture from a bird of stones"
    },
    {
        src: "img/gallery/Component 14.svg",
        srcLarge: "img/gallery/gallery_img_large/snow-leopard-cubs-8039138_1280.jpg",
        altText: "picture from two leoprd kitten of a stone"
    },
    {
        src: "img/gallery/Component 15.svg",
        srcLarge: "img/gallery/gallery_img_large/travel-8785493_1280.jpg",
        altText: "picture from mountains peaks "
    },
    {
        src: "img/gallery/Component 16.svg",
        srcLarge: "img/gallery/gallery_img_large/winter-1675197_1280.jpg",
        altText: "picture from cfrozen single tree"
    },
        {
        src: "img/gallery/Component 17.svg",
        srcLarge: "img/gallery/gallery_img_large/frozen-lake.jpg",
        altText: "picture from frozen lake with mountains with snow-capped peaks "
    },


];
function render(){
    let container = document.getElementById('gallery');    
    // Container sauber machen
    container.innerHTML = "";     
    // Die Schleife geht jetzt durch‚ 'images'-Array
    for (let index = 0; index < images.length; index++) {    
        container.innerHTML += /*html*/`
            <img 
            tabindex="0" 
            onclick="openOverlay(${index})"
            onkeydown="if(event-key === 'Enter' openOverlay({index})" 
            src="${images[index].src}" 
            alt="${images[index].altText}">
            `;       
    }
}
function openOverlay(index) {
    currentImageIndex = index;    
    let imagePath = images[currentImageIndex].srcLarge;
    document.getElementById('overlay-img').src = imagePath;    
    document.getElementById('overlay').classList.remove('d-none');
    updateCounter();
}

// X EXIT Click
function closeOverlay() {    
    document.getElementById('overlay').classList.add('d-none');
}

// Funktion für den RECHTEN Pfeil (Vorwärts)
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('overlay-img').src = images[currentImageIndex].srcLarge;
    updateCounter();
}
// Funktion für den LINKEN Pfeil (Rückwärts)
function previousImage() {
    currentImageIndex--; // Zähle runter

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('overlay-img').src = images[currentImageIndex].srcLarge;
    updateCounter();
}
// Hilfsfunktion
function updateCounter() {
    let counterElement = document.getElementById('image-counter');
    counterElement.innerHTML = `${currentImageIndex + 1} / ${images.length}`;
}