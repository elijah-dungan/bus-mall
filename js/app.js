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

var labelOneEl = document.getElementById('label-one');
var labelTwoEl = document.getElementById('label-two');
var labelThreeEl = document.getElementById('label-three');

/* --Constructor Functions-- */

function Img(name, extension) {
  this.name = name.toLowerCase();
  this.value = name.toLowerCase();
  this.displayName = name;
  this.filepath = `img/${name}.${extension}`;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

/* --Instances-- */

new Img('Bag', 'jpg');
new Img('Banana', 'jpg');
new Img('Bathroom', 'jpg');
new Img('Boots', 'jpg');
new Img('Breakfast', 'jpg');
new Img('Bubblegum', 'jpg');
new Img('Chair', 'jpg');
new Img('Cthulhu', 'jpg');
new Img('Dog-Duck', 'jpg');
new Img('Dragon', 'jpg');
new Img('Pen', 'jpg');
new Img('Pet-Sweep', 'jpg');
new Img('Scissors', 'jpg');
new Img('Shark', 'jpg');
new Img('Sweep', 'png');
new Img('Tauntaun', 'jpg');
new Img('Unicorn', 'jpg');
new Img('USB', 'gif');
new Img('Water-Can', 'jpg');
new Img('Wine-Glass', 'jpg');

/* Helper Functions */

function random(min, max) { // generates random numbers within a min/max range
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignValues(imgElName, radioElName, labelName) { // assignes random src, alt, title, and value values to specified element properties in the DOM
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
  labelName.innerText = allImgs[randNum].displayName; // changes element's textContent to name
}

function render() { // renders images and radio buttons while assigning their appropriate property values
  assignValues(imgOneEl, radioOneEl, labelOneEl); // assigns property values to first image and radio button
  assignValues(imgTwoEl, radioTwoEl, labelTwoEl); // assigns property values to first image and radio button
  assignValues(imgThreeEl, radioThreeEl, labelThreeEl); // assigns property values to first image and radio button
  console.log(recentRandNum); // displays the array of numbers which helps in adjusting line 61, see --IMPORTANT--
}

function defaultStyle() {
  // imgOneEl.style.borderColor = 'rgb(255, 255, 255)';
  // imgOneEl.style.opacity = '0.8';
  imgOneEl.style.boxShadow = '0 12px 5px rgb(0, 0, 0, 0.20)';
  imgOneEl.style.margin = '-5px 0 -5px 0';
}

function renderVotes() {
  for(var i = 0; i < allImgs.length; i ++) {
    var displayName = allImgs[i].displayName;
    var votes = allImgs[i].votes;
    // var views = allImgs[i].views;
    // var percentage = votes / views * 100;
    var newList = document.createElement('li');
    newList.textContent = `${votes} votes for the ${displayName}`;
    ulEl.appendChild(newList);
  }
}

/* --Event Handler-- */

function changeHandler(e) {
  if (e.target) {
    var options = imgContainerEl.elements.radioVote; // gets the radio buttons and stores them
    for(var j = 0; j < options.length; j ++) {
      if(options[0].checked) {
        // imgOneEl.style.borderColor = 'rgb(255, 255, 255)';
        // imgOneEl.style.opacity = '0.8';
        imgOneEl.style.boxShadow = '0 12px 5px rgb(0, 0, 0, 0.20)';
        imgOneEl.style.margin = '-5px 0 -5px 0';
      } else {
        // imgOneEl.style.borderColor = 'gray';
        // imgOneEl.style.opacity = '1';
        imgOneEl.style.boxShadow = '0 6px 4px rgb(0, 0, 0, 0.40)';
        imgOneEl.style.margin = '0 0 -5px 0';
      }
      if(options[1].checked) {
        // imgTwoEl.style.borderColor = 'rgb(255, 255, 255)';
        // imgTwoEl.style.opacity = '0.8';
        imgTwoEl.style.boxShadow = '0 12px 5px rgb(0, 0, 0, 0.20)';
        imgTwoEl.style.margin = '-5px 0 -5px 0';
      } else {
        // imgTwoEl.style.borderColor = 'gray';
        // imgTwoEl.style.opacity = '1';
        imgTwoEl.style.boxShadow = '0 6px 4px rgb(0, 0, 0, 0.40)';
        imgTwoEl.style.margin = '0 0 -5px 0';
      }
      if(options[2].checked) {
        // imgThreeEl.style.borderColor = 'rgb(255, 255, 255)';
        // imgThreeEl.style.opacity = '0.8';
        imgThreeEl.style.boxShadow = '0 12px 5px rgb(0, 0, 0, 0.20)';
        imgThreeEl.style.margin = '-5px 0 -5px 0';
      } else {
        // imgThreeEl.style.borderColor = 'gray';
        // imgThreeEl.style.opacity = '1';
        imgThreeEl.style.boxShadow = '0 6px 4px rgb(0, 0, 0, 0.40)';
        imgThreeEl.style.margin = '0 0 -5px 0';
      }
    }
  }
}

function submitHandler(e) {
  if(e.target) {
    e.preventDefault();
    var options = imgContainerEl.elements.radioVote; // gets the radio buttons and stores them
    for(var i = 0; i < allImgs.length; i ++) { // loops through all images
      for(var j = [0]; j < options.length; j ++) { // loops through radio buttons
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

imgContainerEl.addEventListener('click', changeHandler);
imgContainerEl.addEventListener('submit', submitHandler);

/* --Function Calls-- */

render();
defaultStyle();
console.log(allImgs);
