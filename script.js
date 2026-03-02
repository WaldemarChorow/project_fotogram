let image = [
    "hallo",
    "Welt",

];

function render(){
    let galleryRef = document.getElementById('gallery');
    for (let index = 0; index < image.length; index++) {
        galleryRef.innerHTML += getNotesTemplate(index);
    }
}

function getNotesTemplate(i){
    return `    <div class="single_element">
                    <h2>    
                        ${image[index]}
                    </h2>
                </div>`
}