'use strict';

/* --Global Variables-- */

var allImgs = [];
var recentRandNum = [];

var remainingVotes = 25;

var imgContainerEl = document.getElementById('image-container');
var ulEl = document.getElementById('vote-list');
var h2El = document.getElementById('votes-left');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var imgThreeEl = document.getElementById('image-three');

/* --Constructor Functions-- */

function Img(name, extension) {
  this.name = name;
  this.filepath = `img/${name}.${extension}`;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

/* --Instances-- */

new Img('bag', 'jpg');
new Img('banana', 'jpg');
new Img('bathroom', 'jpg');
new Img('boots', 'jpg');
new Img('breakfast', 'jpg');
new Img('bubblegum', 'jpg');
new Img('chair', 'jpg');
new Img('cthulhu', 'jpg');
new Img('dog-duck', 'jpg');
new Img('dragon', 'jpg');
new Img('pen', 'jpg');
new Img('pet-sweep', 'jpg');
new Img('scissors', 'jpg');
new Img('shark', 'jpg');
new Img('sweep', 'png');
new Img('tauntaun', 'jpg');
new Img('unicorn','jpg');
new Img('usb', 'gif');
new Img('water-can', 'jpg');
new Img('wine-glass', 'jpg');

/* Helper Functions */

function random(min, max) { // generates random numbers within a min/max range
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignValues(elName) { // assignes random src, alt, and title values to specified element name
  var randNum = random(0, allImgs.length - 1); // generates a random number between zero and the length of allImgs array
  while(recentRandNum.includes(randNum)) { // loop checks to see if random number is already in array
    var randNum = random(0, allImgs.length - 1); // generates another number if number already exists
  }
  if(recentRandNum.length > 5) { // condition that checks how many numbers are in recentRandInd array --IMPORTANT--
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
  console.log(recentRandNum); // displays the array of numbers which helps in adjusting line 61, see --IMPORTANT--
}

function renderVotes() {
  for(var i = 0; i < allImgs.length; i ++) {
    var name = allImgs[i].name;
    var votes = allImgs[i].votes;
    // var views = allImgs[i].views;
    // var percentage = votes / views * 100;
    var newList = document.createElement('li');
    newList.textContent = `${votes} votes for the ${name}`;
    ulEl.appendChild(newList);
  }
}

/* --Event Handler-- */

function clickHandler(e) {
  if(e.target.id === 'image-container') { // checks if user clicked on a product
    alert('please click on a product'); // instructs user to click on a product
  }
  if(remainingVotes === 1) { // checks remaining votes
    imgContainerEl.removeEventListener('click', clickHandler); // removes event listener when votes = 0
    renderVotes();
  }
  for(var i = 0; i < allImgs.length; i ++) {
    var imgName = e.target.title; // stores title of img clicked on
    if(imgName === allImgs[i].name) { //searches for matching name in allImgs array
      allImgs[i].votes ++;
      remainingVotes --;
      h2El.textContent = `Votes Remaining: ${remainingVotes}`;
    }
  }
  console.log(allImgs); // displays the allImgs array in the console, allowing for extensive debugging
  render();
}

/* --Event Listeners-- */

imgContainerEl.addEventListener('click', clickHandler);

/* --Function Calls-- */

render();
console.log(allImgs);

