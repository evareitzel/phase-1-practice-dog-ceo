//// Challenge 1
// on page load, fetch img using
  // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// parse JSON resp
// add img elements to DOM forEach img in array

// on page load, fetch img using
document.addEventListener('DOMContentLoaded', (e) => {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  // .then(data => console.log(data))
  .then(data) => { 
    data.forEach(element => console.log(element))
  // .then(data => {
    // data.forEach(dog => console.log(dog))
  }
})
  // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


//// Challenge 2
//// Challenge 3
//// Challenge 4
