console.log('%c HI', 'color: firebrick')

// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
.then((resp) => resp.json())
// .then(data => console.log(data))
.then(data => data.message.forEach(image => addImage(image)));

function addImage(image){
  const container = document.querySelector('#dog-image-container');
  const images = document.createElement('img');
  images.src = image;
  container.appendChild(images);
}

// Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
fetch(breedUrl)
.then((resp) => resp.json())
.then(data => { 
  const dogBreeds = data.message;
  const objKeys = Object.keys(dogBreeds);

  addElement();


  // .then(data => data.message.key.forEach(breed => breeds(breed)));

  function addElement(dogBreeds){
    const container = document.querySelector('#dog-breeds');
    const listItem = document.createElement('li');
    // for (let i = 0; i<(dogBreeds.length); i++)
    listItem.innerText = dogBreeds;
    container.append(listItem)
  }
  objKeys.forEach(item => addElement(item))
})

// Challenge 3
const item = document.querySelector('li');

    // for (let i = 0; i<(dogBreeds.length); i++)
    for (let i = 0; i < item.length; i++) {
      item.addEventListener('click', function(e) {
        e.target.style.color = 'red';
      })
    }

// listItem.addEventListener('click', changeColor)

function changeColor(evt) {
  evt.target.style.color = 'red';
  // const rndCol = red;
  // item.style.color = rndCol;
  
  // const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // item.style.color = rndCol;
  console.log(item);
}

// Challenge 4

const dropdown = document.querySelector('#breed-dropdown');

// dropdown.addEventListener(click)