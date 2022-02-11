// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')


// These are our buttons
var buttonMakeNewCover = document.querySelector('.make-new-button')
var buttonRandomCover = document.querySelector('.random-cover-button')
var buttonHome = document.querySelector('.home-button-hidden');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSaved = document.querySelector('.view-saved-button');
var formShow = document.querySelector('.form-view')


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// "random-cover-button"
//element.addEventListener(event, function, useCapture);
// buttonMakeNewCover.addEventListener('click', __________________)
buttonRandomCover.addEventListener("click", randomizeCover)


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function viewForm() {
  //
formShow
}

randomizeCover()

function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText =  currentCover.tagline1;
  tagLine2.innerText = currentCover.tagline2;
console.log(currentCover)
  // coverImage.src = covers[getRandomIndex(covers)];
  // coverTitle.innerText = titles[getRandomIndex(titles)];
  // tagLine1.innerText = descriptors[getRandomIndex(descriptors)];
  // tagLine2.innerText = descriptors[getRandomIndex(descriptors)];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
