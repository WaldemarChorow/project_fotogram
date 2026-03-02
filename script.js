let image = [
    "img/gallery/Single pic component.svg",
    "img/gallery/Component 6.svg",
    "img/gallery/Component 7.svg",
    "img/gallery/Component 8.svg",
    "img/gallery/Component 9.svg",
    "img/gallery/Component 10.svg",
    "img/gallery/Component 11.svg",
    "img/gallery/Component 12.svg",
    "img/gallery/Component 13.svg",
    "img/gallery/Component 14.svg",
    "img/gallery/Component 15.svg",
    "img/gallery/Component 16.svg",
];

function render(){
    let container = document.getElementById('gallery');
    
    // 1. Container einmal sauber machen
    container.innerHTML = ""; 
    
    // 2. Deine perfekte Schleife läuft los
    for (let index = 0; index < image.length; index++) {
    
        // 3. Wir fügen ein echtes <img>-Tag hinzu und greifen auf image[index] zu
        container.innerHTML += /*html*/`
            <img src="${image[index]}">
        `;
    }
}