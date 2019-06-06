'use strict';

// Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

/* --Global Variables-- */

var allImgs = [];
var recentRandNum = [];

var imgContainerEl = document.getElementById('image-container');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var imgThreeEl = document.getElementById('image-three');

/* --Constructor Functions-- */

function Img(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
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
  while(recentRandNum.includes(randNum)) { // loop checks to see if random number is already in array and generates another index
    var randNum = random(0, allImgs.length - 1);
  }
  if(recentRandNum > 3) { // condition that checks how many numbers are in recentRandInd array and removes one number from the beginning of the array when more than 3
    recentRandNum.shift();
  }
  recentRandNum.push(randNum); // pushes random number into recentRandInd array
  elName.src = allImgs[randNum].filepath;
  elName.alt = allImgs[randNum].name;
  elName.title = allImgs[randNum].name;
}

function render() {
  assignValues(imgOneEl);
  assignValues(imgTwoEl);
  assignValues(imgThreeEl);
}

/* --Event Handler-- */

function clickHandler() {
  render();
}

/* --Event Listeners-- */

imgContainerEl.addEventListener('click', clickHandler);

/* --Function Calls-- */

render();
