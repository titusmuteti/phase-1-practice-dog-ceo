console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", initialize)
function initialize () {
  loadImages();
  loadBreeds();
}

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  return fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(image => addImage(image))
    });
}

function addImage(picUrl) {
  let container = document.getElementById("dog-image-container");
  let dogImage = document.createElement('img');
  dogImage.src = picUrl;
  container.appendChild(dogImage);
}

function loadBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const breed = Object.keys(data.message);
      addBreeds(breed);
    });
}

function addBreeds(breed) {
  const ul = document.getElementById("dog-breeds");
  breed.forEach(breed => {
    let li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", function(event) {
      event.target.style.color = "blue";
    });
  });
}