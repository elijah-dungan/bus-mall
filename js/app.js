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

var radioOneEl = document.getElementById('radio-vote-one');
var radioTwoEl = document.getElementById('radio-vote-two');
var radioThreeEl = document.getElementById('radio-vote-three');

/* --Constructor Functions-- */

function Img(name) {
  this.name = name;
  this.value = name;
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

function assignValues(imgElName, radioElName) { // assignes random src, alt, and title values to specified elements in the DOM
  var randNum = random(0, allImgs.length - 1); // generates a random number between zero and the length of allImgs array
  while(recentRandNum.includes(randNum)) { // loop checks to see if random number is already in array
    var randNum = random(0, allImgs.length - 1); // generates another number if number already exists
  }
  if(recentRandNum.length > 5) { // condition that checks how many numbers are in recentRandInd array --IMPORTANT--
    recentRandNum.shift(); // removes numbers from the beginning of the array when there are more than the specified number, allows array to by dynamic
  }
  recentRandNum.push(randNum); // pushes random number into recentRandNum array
  allImgs[randNum].views ++; // increments views by 1
  imgElName.src = allImgs[randNum].filepath;
  imgElName.alt = allImgs[randNum].name;
  imgElName.title = allImgs[randNum].name;
  radioElName.value = allImgs[randNum].name;
}

function render() {
  assignValues(imgOneEl, radioOneEl);
  assignValues(imgTwoEl, radioTwoEl);
  assignValues(imgThreeEl, radioThreeEl);
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

// function clickHandler(e) {
//   if(e.target.id === 'image-container') { // checks if user clicked on a product
//     alert('please click on a product'); // instructs user to click on a product
//   }
//   if(remainingVotes === 1) { // checks remaining votes
//     imgContainerEl.removeEventListener('click', clickHandler); // removes event listener when votes = 0
//     renderVotes();
//   }
//   for(var i = 0; i < allImgs.length; i ++) {
//     var imgName = e.target.title; // stores title of img clicked on
//     if(imgName === allImgs[i].name) { //searches for matching name in allImgs array
//       allImgs[i].votes ++;
//       remainingVotes --;
//       h2El.textContent = `Votes Remaining: ${remainingVotes}`;
//     }
//   }
//   console.log(allImgs); // displays the allImgs array in the console, allowing for extensive debugging
//   render();
// }

function submitHandler(e) {
  // if(e.target.id === 'image-container') { // checks if user clicked on a product
  //   alert('please click on a product'); // instructs user to click on a product
  // }
  if(e.target) {
    var options = imgContainerEl.elements.radioVote;
    for(var i = 0; i < allImgs.length; i ++) {
      for(var j = [0]; j < options.length; j++) {
        if(options[j].value === allImgs[i].name) {
          allImgs[i].votes ++;
          remainingVotes --;
          h2El.textContent = `Votes Remaining: ${remainingVotes}`;
        }
      }
    }
  }
  if(remainingVotes === 1) { // checks remaining votes
    imgContainerEl.removeEventListener('submit', submitHandler); // removes event listener when votes = 0
    renderVotes();
  }
  // for(var i = 0; i < allImgs.length; i ++) {
  //   var imgName = e.target.title; // stores title of img clicked on
  //   if(imgName === allImgs[i].name) { //searches for matching name in allImgs array
  //     allImgs[i].votes ++;
  //     remainingVotes --;
  //     h2El.textContent = `Votes Remaining: ${remainingVotes}`;
  //   }
  // }
  console.log(allImgs); // displays the allImgs array in the console, allowing for extensive debugging
  console.log(e.target);
  console.log(options.value);
  render();
}

/* --Event Listeners-- */

// imgContainerEl.addEventListener('click', clickHandler);
imgContainerEl.addEventListener('submit', submitHandler);

/* --Function Calls-- */

render();
console.log(allImgs);
