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

function Img(name, extension) {
  this.name = name;
  this.value = name;
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
new Img('dog-duck'), 'jpg';
new Img('dragon', 'jpg');
new Img('pen', 'jpg');
new Img('pet-sweep', 'jpg');
new Img('scissors', 'jpg');
new Img('shark', 'jpg');
new Img('sweep', 'png');
new Img('tauntaun', 'jpg');
new Img('unicorn', 'jpg');
new Img('usb', 'gif');
new Img('water-can', 'jpg');
new Img('wine-glass', 'jpg');

/* Helper Functions */

function random(min, max) { // generates random numbers within a min/max range
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignValues(imgElName, radioElName) { // assignes random src, alt, title, and value values to specified element properties in the DOM
  var randNum = random(0, allImgs.length - 1); // generates a random number between zero and the length of allImgs array
  while(recentRandNum.includes(randNum)) { // loop checks to see if random number is already in array
    var randNum = random(0, allImgs.length - 1); // generates another number if number already exists
  }
  if(recentRandNum.length > 5) { // condition that checks how many numbers are in recentRandInd array --IMPORTANT--
    recentRandNum.shift(); // removes numbers from the beginning of the array when there are more than the specified number, allows array to by dynamic
  }
  recentRandNum.push(randNum); // pushes random number into recentRandNum array
  allImgs[randNum].views ++; // increments views by 1
  imgElName.src = allImgs[randNum].filepath; // assigns filepath value to element's src property
  imgElName.alt = allImgs[randNum].name; // assigns name value to element's alt property
  imgElName.title = allImgs[randNum].name; // assigns name value to element's title property
  radioElName.value = allImgs[randNum].name; // assigns name value to element's value property
}

function render() { // renders images and radio buttons while assigning their appropriate property values
  assignValues(imgOneEl, radioOneEl); // assigns property values to first image and radio button
  assignValues(imgTwoEl, radioTwoEl); // assigns property values to first image and radio button
  assignValues(imgThreeEl, radioThreeEl); // assigns property values to first image and radio button
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

function submitHandler(e) {
  if(e.target) {
    e.preventDefault();
    var options = imgContainerEl.elements.radioVote; // gets the radio buttons and stores them
    for(var i = 0; i < allImgs.length; i ++) { // loops through all images
      for(var j = [0]; j < options.length; j++) { // loops through radio buttons
        if(options[j].checked) { // checks which radio button has been selected
          if(options[j].value === allImgs[i].name) { // checks if selected radio value matches image namge
            allImgs[i].votes ++; // adds vote to constructor function property
            remainingVotes --; // decreases votes from remaining votes array
            h2El.textContent = `Votes Remaining: ${remainingVotes}`; // displays remaining votes in the DOM
            console.log(options[j].value);
            console.log(allImgs[i].name);
          }
        }
      }
    }
  }
  if(remainingVotes === 0) { // checks remaining votes
    imgContainerEl.removeEventListener('submit', submitHandler); // removes event listener when votes = 0
    renderVotes();
  }
  console.log(allImgs); // displays the allImgs array in the console, allowing for extensive debugging
  console.log(e.target);
  render();
}

/* --Event Listeners-- */

imgContainerEl.addEventListener('submit', submitHandler);

/* --Function Calls-- */

render();
console.log(allImgs);
