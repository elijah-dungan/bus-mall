'use strict';


// Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

/* --Global Variables-- */

var allImgs = [];
var recentRandNum = [];

var remainingVotes = 25;

var imgContainerEl = document.getElementById('image-container');
var ulEl = document.getElementById('vote-list');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var imgThreeEl = document.getElementById('image-three');

/* --Constructor Functions-- */

function Img(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

/* --Instances-- */

new Img('bag');
new Img('banana');
new Img('bathroom');
new Img('boots');
new Img('breakfast');
new Img('bubblegum');
new Img('chair');
new Img('cthulhu');
new Img('dog-duck');
new Img('dragon');
new Img('pen');
new Img('pet-sweep');
new Img('scissors');
new Img('shark');
new Img('sweep');
new Img('tauntaun');
new Img('unicorn');
new Img('usb');
new Img('water-can');
new Img('wine-glass');

/* Helper Functions */

function random(min, max) { // generates random numbers within a min/max range
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignValues(elName) { // assignes random src, alt, and title values to specified element name
  var randNum = random(0, allImgs.length - 1); // generates a random number between zero and the length of allImgs array
  while(recentRandNum.includes(randNum)) { // loop checks to see if random number is already in array
    var randNum = random(0, allImgs.length - 1); // generates another number if number already exists
  }
  if(recentRandNum.length > 5) { // condition that checks how many numbers are in recentRandInd array
    recentRandNum.shift(); // removes numbers from the beginning of the array when there are more than the specified number, allows array to by dynamic
  }
  recentRandNum.push(randNum); // pushes random number into recentRandNum array
  allImgs[randNum].views ++; // increments views by 1
  elName.src = allImgs[randNum].filepath;
  elName.alt = allImgs[randNum].name;
  elName.title = allImgs[randNum].name;
}

function render() {
  assignValues(imgOneEl);
  assignValues(imgTwoEl);
  assignValues(imgThreeEl);
  console.log(recentRandNum);
}

function renderVotes() {
  for(var i = 0; i < allImgs.length; i ++) {
    var name = allImgs[i].name;
    var votes = allImgs[i].votes;
    // var views = allImgs[i].views;
    // var percentage = votes / views * 100;
    var newList = document.createElement('li');
    newList.textContent = `${votes} votes for the ${name}.`;
    ulEl.appendChild(newList);
  }
}

/* --Event Handler-- */

function clickHandler(event) {
  var imgName = event.target.title; // stores title of img clicked on
  if(event.target.id === 'image-container') { // checks if user clicked on a product
    alert('please click on a product'); // instructs user to click on a product
  }
  if(remainingVotes === 0) { // checks remaining votes BROKEN!!!!!!!
    imgContainerEl.removeEventListener('click', clickHandler); // removes event listener when votes = 0
    renderVotes();
  }
  for(var i = 0; i < allImgs.length; i ++) {
    if(imgName === allImgs[i].name); { //searches for matching name in allImgs array
      allImgs[i].votes ++; // BROKEN!!!!!!!!
      remainingVotes --; // BROKEN!!!!!!!!
      console.log(remainingVotes);
    }
  }
  render();
  console.log(allImgs); // displays the allImgs array in the console, allowing for extensive debugging
  console.log(event.target);
  console.log(event.target.title);
}

/* --Event Listeners-- */

imgContainerEl.addEventListener('click', clickHandler);

/* --Function Calls-- */

render();

