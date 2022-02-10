// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline1')
var tagLine2 = document.querySelector('.tagline2')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
randomizeCover()

function randomizeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagLine1.innerText = descriptors[getRandomIndex(descriptors)];
  tagLine2.innerText = descriptors[getRandomIndex(descriptors)];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
