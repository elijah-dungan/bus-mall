'use strict';

/* --Global Variables-- */
var imgContainerEl = document.getElementById('');
var imgEl = document.getElementById('');
var allImgs = [];
var recentRandomNumbers = [];
var votesRemaining = 10;
var resultsEl = document.getElementById('');

/* Constructor Functions */

function Img(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

/* Helper Functions */

function render() {
  var randomIndex = randomIndex(0, allImgs.length-1);

  while(recentRandomNumbers.includes(randomIndex)) {
    randomIndex = random(0, allImgs.length-1);
  }

  recentRandomNumbers.push(randomIndex);

  allImgs[randomIndex].views++;

  if(recentRandomNumbers.length > 3) {
    recentRandomNumbers.shift();
  }

  allImgs[randomIndex].views++;

  imgEl.src = allImgs[randomIndex].filepath;
  imgEl.alt = allImgs[randomIndex].name;
  imgEl.title = allImgs[randomIndex].name;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderBestImg() {
  var h2El = document.createElement('h2');
  h2El.textContent = `The Best Img is ${bestImg.name} with ${bestImg.votes} votes.`;
  var bestImg = 0;
  // missing code related to parent element and append child to parent

  for(var i = 0; i < allImgs.length; i++) {
    var temp = 0;
    if (allImgs[i].votes > temp) {
      temp = allImgs[i].votes;
      bestImg = allImgs[i];
    }
  }

}

/* --Instances-- */

new Img('imageOne');

/* --Event Listeners-- */

imgContainerEl.addEventListener('click', handleClick);

function handleClick(event) {
  var imgName = event.target.title;

  if(event.target.id === 'img-container') {
    alert('click an image!');
  }
  if(votesRemaining === 0) {
    imgContainerEl.removeEventListener('click');
    renderBestImg();

  }
  for(var i = 0; i < allImgs.length; i++) {
    if(imgName === allImgs[i].name) {
      allImgs[i].votes++;
      votesRemaining--;
    }
    render();
  }
}

/* --Function Calls-- */

render();
