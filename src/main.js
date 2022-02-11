// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')


// These are our buttons
var buttonMakeNewCover = document.querySelector('.make-new-button')
var buttonRandomCover = document.querySelector('.random-cover-button')
var buttonHome = document.querySelector('.home-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSaved = document.querySelector('.view-saved-button');
var formShow = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
buttonViewSaved.addEventListener('click', viewSavedCovers)
buttonMakeNewCover.addEventListener('click', viewForm)
buttonRandomCover.addEventListener("click", randomizeCover)


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
// function viewForm() {
//   //
// formShow
// }

function viewSavedCovers() {
  show(savedView)
  show(buttonHome);
  hide(homeView)
  hide(formShow)
  hide(buttonRandomCover);
  hide(buttonSaveCover);
}

function viewForm() {
  show(formShow)
  show(buttonHome);
  hide(homeView)
  hide(buttonSaveCover);
  hide(buttonRandomCover);
  hide(savedView)
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

randomizeCover()

function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText =  currentCover.tagline1;
  tagLine2.innerText = currentCover.tagline2;


  //remember to remove CL
  console.log(currentCover)
  
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
