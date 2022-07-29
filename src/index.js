console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(imgs => parseImages(imgs));

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => parseBreeds(breeds));

    let dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', handleDropdown);

})

function parseImages(imgs) {
    imgs.message.forEach(image => {
        let newImg = document.createElement('img');
        newImg.src = image;
        newImg.style.width = '300px'
        newImg.style.height = 'auto'
        let dogs = document.querySelector("#dog-image-container");
        dogs.append(newImg);
    })
}

function parseBreeds(breeds) {
    let breedsList = document.querySelector('#dog-breeds');
    let breedsShallow = Object.keys(breeds.message);
    breedsShallow.forEach(breed => {
        if(breeds.message[breed].length == 0) {
            let newBreed = document.createElement('li');
            newBreed.textContent = breed;
            newBreed.classList.add('breeds');
            breedsList.append(newBreed);
            newBreed.addEventListener('click', breedClick);
        }
        else {
            let types = breeds.message[breed];
            types.forEach(type => {
                let newBreed = document.createElement('li');
                newBreed.textContent = `${type} ${breed}`
                newBreed.classList.add('breeds');
                breedsList.append(newBreed);
                newBreed.addEventListener('click', breedClick);
            })
        }
    })
}

function breedClick(e) {
    e.target.style.color = "red";
}

function handleDropdown(e) {
    let drop = e.target.value;
    let breedOp = document.getElementsByClassName("breeds");
    console.log(breedOp);
    switch (drop) {
        case "a":
            for(let breed of breedOp) {
                if(breed.innerHTML.charAt(0) == 'a') {
                    breed.removeAttribute('hidden')
                }
                else {
                    breed.setAttribute("hidden", true);
                    console.log(breed);
                    console.log(breed.attributes)
                }
            }
            break;
        case "b":
            for(let breed of breedOp) {
                if(breed.innerHTML.charAt(0) == 'b') {
                    breed.removeAttribute('hidden')
                }
                else {
                    breed.setAttribute("hidden", true);
                    console.log(breed);
                    console.log(breed.attributes)
                }
            }
            break;
        case "c":
            for(let breed of breedOp) {
                if(breed.innerHTML.charAt(0) == 'c') {
                    breed.removeAttribute('hidden')
                }
                else {
                    breed.setAttribute("hidden", true);
                    console.log(breed);
                    console.log(breed.attributes)
                }
            }
            break;
        case "d":
            for(let breed of breedOp) {
                if(breed.innerHTML.charAt(0) == 'd') {
                    breed.removeAttribute('hidden')
                }
                else {
                    breed.setAttribute("hidden", true);
                    console.log(breed);
                    console.log(breed.attributes)
                }
            }
            break;
    }
}
