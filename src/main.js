// These are our cover elements
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");

// These are our buttons
var buttonMakeNewCover = document.querySelector(".make-new-button");
var buttonRandomCover = document.querySelector(".random-cover-button");
var buttonHome = document.querySelector(".home-button");
var buttonSaveCover = document.querySelector(".save-cover-button");
var buttonViewSaved = document.querySelector(".view-saved-button");
var buttonCreateNewBook = document.querySelector(".create-new-book-button");

// These are our page views
var formShow = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var sectionSavedCovers = document.querySelector(".saved-covers-section");

// These are our input fields
var textFieldCover = document.querySelector("#cover");
var textFieldTitle = document.querySelector("#title");
var textFieldDescriptor1 = document.querySelector("#descriptor1");
var textFieldDescriptor2 = document.querySelector("#descriptor2");

// Variables where covers are saved
var savedCovers = [];
var currentCover;

// These are our event listeners
buttonViewSaved.addEventListener("click", viewSavedCovers);
buttonMakeNewCover.addEventListener("click", viewForm);
buttonRandomCover.addEventListener("click", randomizeCover);
buttonHome.addEventListener("click", viewHome);
buttonCreateNewBook.addEventListener("click", createNewBook);
buttonSaveCover.addEventListener("click", saveNewCover);
sectionSavedCovers.addEventListener("dblclick", deleteCover);

// This function takes us to Homepage
function viewHome() {
  show(homeView);
  show(buttonRandomCover);
  show(buttonSaveCover);
  hide(formShow);
  hide(savedView);
  hide(buttonHome);
}

// This function takes us to Saved Covers page and loads saved covers
function viewSavedCovers() {
  show(savedView);
  show(buttonHome);
  hide(homeView);
  hide(formShow);
  hide(buttonRandomCover);
  hide(buttonSaveCover);

  for (var i = 0; i < savedCovers.length; i++) {
    if (!savedCovers[i].isSaved) {
      sectionSavedCovers.innerHTML += `

     <section class = 'mini-cover'>

     <img class='cover-ima mini-cover' src=${savedCovers[i].cover} id=${savedCovers[i].id}>
     <h2 class = 'cover-title' id=${savedCovers[i].id}>${savedCovers[i].title}</h2>
     <h3 class="tagline" id=${savedCovers[i].id}>A tale of <span id=${savedCovers[i].id}>${savedCovers[i].tagline1}</span> and <span id=${savedCovers[i].id}>${savedCovers[i].tagline2}</span></h3>
     </section>
     `;
    }
    savedCovers[i].isSaved = true;
  }
}

// This function deletes saved covers and loads covers again
function deleteCover() {
  console.log(savedCovers);
  console.log(event.target);
  var coverId = event.target.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (coverId === `${savedCovers[i].id}`) {
      savedCovers.splice(i, 1);
    }
    if (savedCovers.length >= 1) {
      savedCovers[i].isSaved = false;
    }
  }
  sectionSavedCovers.innerHTML = "";
  viewSavedCovers();
}

// This function takes us to Form View page
function viewForm() {
  show(formShow);
  show(buttonHome);
  hide(homeView);
  hide(buttonSaveCover);
  hide(buttonRandomCover);
  hide(savedView);
}

// This function unhides HTML elements
function show(element) {
  element.classList.remove("hidden");
}

// This function hides HTML elements
function hide(element) {
  element.classList.add("hidden");
}

// This function creates a random cover
function randomizeCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.tagline1;
  tagLine2.innerText = currentCover.tagline2;
}

// This function saves a cover to the savedCovers array
function saveNewCover() {
  if (currentCover !== savedCovers[0]) {
    currentCover.isSaved = false;
    savedCovers.unshift(currentCover);
  }
}

// This function lets users create their own book, prevents button from reloading
// the page and clears the text fields on the Form View page
function createNewBook(event) {
  event.preventDefault();
  currentCover = new Cover(
    textFieldCover.value,
    textFieldTitle.value,
    textFieldDescriptor1.value,
    textFieldDescriptor2.value
  );
  coverImage.src = currentCover.cover;
  covers.push(coverImage.src);
  coverTitle.innerText = currentCover.title;
  titles.push(coverTitle.innerText);
  tagLine1.innerText = currentCover.tagline1;
  descriptors.push(tagLine1.innerText);
  tagLine2.innerText = currentCover.tagline2;
  descriptors.push(tagLine2.innerText);

  viewHome();
  textFieldCover.value = "";
  textFieldTitle.value = "";
  textFieldDescriptor1.value = "";
  textFieldDescriptor2.value = "";
}

// This function randomizes our assets
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
