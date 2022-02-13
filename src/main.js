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
var buttonCreateNewBook = document.querySelector('.create-new-book-button')
// these are our forms
var formShow = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')
var sectionSavedCovers = document.querySelector('.saved-covers-section')
// these are our inputs
var textFieldCover = document.querySelector('#cover')
var textFieldTitle = document.querySelector('#title')
var textFieldDescriptor1 = document.querySelector('#descriptor1')
var textFieldDescriptor2 = document.querySelector('#descriptor2')

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
buttonViewSaved.addEventListener('click', viewSavedCovers)
buttonMakeNewCover.addEventListener('click', viewForm)
buttonRandomCover.addEventListener("click", randomizeCover)
buttonHome.addEventListener('click', viewHome)
buttonCreateNewBook.addEventListener('click', createNewBook)
buttonSaveCover.addEventListener('click', saveNewCover)
sectionSavedCovers.addEventListener('dblclick', deleteCover)

// Create your event handlers and other functions here 👇

// document.addEventListener('click', function(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;
// }, false);

// We've provided one function to get you started
// function viewForm() {
//   //
// formShow
// }

function viewHome() {
  show(homeView);
  show(buttonRandomCover);
  show(buttonSaveCover);
  hide(formShow);
  hide(savedView);
  hide(buttonHome);
}

function viewSavedCovers() {
  show(savedView)
  show(buttonHome);
  hide(homeView)
  hide(formShow)
  hide(buttonRandomCover);
  hide(buttonSaveCover);
  for (var i = 0; i < savedCovers.length; i++) {
// console.log(savedCovers[i].cover)
   if (!savedCovers[i].isSaved){
     sectionSavedCovers.innerHTML += `

     <section class = 'mini-cover'>

     <img class='cover-ima mini-cover' src=${savedCovers[i].cover} id= mini-image-${i}>
     <h2 class = 'cover-title'>${savedCovers[i].title}</h2>
     <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
     </section>
     `
  }
  savedCovers[i].isSaved = true
 }
}
function deleteCover(){
  console.log(event.target)
  var coverId = event.target.id
  for(var i = 0; i < savedCovers.length; i++){
    if(coverId === savedCovers[i].id){
      savedCovers.splice(i, 1);
    }
  }
  viewSavedCovers()
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
  // console.log(currentCover)
//
}

// function saveFormFields() {
//   covers.push(textFieldCover);
//   titles.push(textFieldTitle);
//   descriptors.push(textFieldDescriptor1);
//   descriptors.push(textFieldDescriptor2);
//   console.log(titles)
// }

function saveNewCover() {
  if (currentCover !== savedCovers[0]) {
    savedCovers.unshift(currentCover)
  }
  console.log(savedCovers)
}

function createNewBook(event) {
  event.preventDefault()

  currentCover = new Cover(textFieldCover.value, textFieldTitle.value, textFieldDescriptor1.value, textFieldDescriptor2.value)
  coverImage.src = currentCover.cover;
  covers.push(coverImage.src);
  coverTitle.innerText = currentCover.title;
  titles.push(coverTitle.innerText);
  tagLine1.innerText = currentCover.tagline1;
  descriptors.push(tagLine1.innerText);
  tagLine2.innerText = currentCover.tagline2;
  descriptors.push(tagLine2.innerText);

  // console.log(titles, covers, descriptors)
  // console.log(currentCover)

  viewHome()
  textFieldCover.value = '';
  textFieldTitle.value = '';
  textFieldDescriptor1.value = '';
  textFieldDescriptor2.value = '';
  // (coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
