'use strict';

// Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

/* --Global Variables-- */

var allImgs = [];
var imgContainerEl = document.getElementById('image-container');
var imgOneEl = document.getElementsByTagName('img')[0];
var imgTwoEl = document.getElementsByTagName('img')[1];
var imgThreeEl = document.getElementsByTagName('img')[2];

/* Constructor Functions */

function Img(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg` || `img/${name}.png` || `img/${name}.gif`;
  allImgs.push(this);
}

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

function render() {
  var randInd = random(0, allImgs.length - 1);
  imgOneEl.src = allImgs[randInd].filepath;
  imgOneEl.alt = allImgs[randInd].name;
  imgOneEl.title = allImgs[randInd].name;

  var randInd = random(0, allImgs.length - 1);
  imgTwoEl.src = allImgs[randInd].filepath;
  imgTwoEl.alt = allImgs[randInd].name;
  imgTwoEl.title = allImgs[randInd].name;

  var randInd = random(0, allImgs.length - 1);
  imgThreeEl.src = allImgs[randInd].filepath;
  imgThreeEl.alt = allImgs[randInd].name;
  imgThreeEl.title = allImgs[randInd].name;
  
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* --Instances-- */


/* --Event Listeners-- */


/* --Function Calls-- */

render();
