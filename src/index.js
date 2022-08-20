//// Challenge 1
// on page load, fetch img using
  // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// parse JSON resp
// add img elements to DOM forEach img in array
function getImgData(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(imgData => imgData.message.forEach(dog => renderImg(dog)))
}

function renderImg(dog){
  const dogImg = document.createElement('li')
  dogImg.innerHTML = `<img src='${dog}'>` 
  dogImg.setAttribute('id', 'dogImg')
  console.log(dogImg)
  var imgContainer = document.querySelector('#dog-image-container')
  const imgList = document.createElement('ul')
  imgContainer.append(imgList)
  imgList.append(dogImg)
}

//// Challenge 2
  // on page load, fetch dog breeds w
    // const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // add breeds to page in <ul>
  function getBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breedData => {
      // filter data ? if condition - satisfies to render
      for (const key in breedData.message){
        const breed = `${key} - ${breedData.message[key]}`
        renderBreed(breed)
      }
    })
    //// .then(breedData => breedData.message.filter())
  }

  function renderBreed(breed){
    const breedList = document.querySelector('#dog-breeds')
    const breedListItem = document.createElement('li')
    breedListItem.innerHTML = `${breed}`
    breedList.append(breedListItem)
  }

//// Challenge 3
  // on click, change <li> font color for indididual dog breeds
  // add to Challenge 2:
    // breedListItem.addEventListener('onclick', changeLiColor)

    // function changeLiColor(){
    //   // change font color CSS
    // }

//// Challenge 4 
  // use dropdown to: 
  // filter dog breeds starting w a particular letter(a-d)
  // *Define dog breeds in get fetch


document.addEventListener('DOMContentLoaded', (e) => {
  getImgData()
  getBreeds()
})