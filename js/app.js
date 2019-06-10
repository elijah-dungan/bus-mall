'use strict';

/* --Global Variables-- */

var allImgs = [];
var recentRandNum = [];
var spamChecker = [];

var remainingVotes = 25;

var imgContainerEl = document.getElementById('image-container');
var votesEl = document.getElementById('votes-left');
var resultsEl = document.getElementById('results');
var buttonEl = document.getElementById('submit');

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

function Img(name, extension, price) {
  this.name = name.toLowerCase();
  this.value = name.toLowerCase();
  this.displayName = name;
  this.price = price;
  this.filepath = `img/${name}.${extension}`;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

/* --Instances-- */

new Img('Bag', 'jpg', '$19.99');
new Img('Banana', 'jpg', '$1.99');
new Img('Bathroom', 'jpg', '$11.99');
new Img('Boots', 'jpg', '$39.99');
new Img('Breakfast', 'jpg', '$119.99');
new Img('Bubblegum', 'jpg', '$2.99');
new Img('Chair', 'jpg', '$13.99');
new Img('Cthulhu', 'jpg', '$9.99');
new Img('Dog-Duck', 'jpg', '$4.99');
new Img('Dragon', 'jpg', '$2.99');
new Img('Pen', 'jpg', '$4.99');
new Img('Pet-Sweep', 'jpg', '$11.99');
new Img('Scissors', 'jpg', '$6.99');
new Img('Shark', 'jpg', '$29.99');
new Img('Sweep', 'png', '$11.99');
new Img('Tauntaun', 'jpg', '$14.99');
new Img('Unicorn', 'jpg', '$2.99');
new Img('USB', 'gif', '$14.99');
new Img('Water-Can', 'jpg', '$3.99');
new Img('Wine-Glass', 'jpg', '$9.99');

/* Helper Functions */

function random(min, max) { // generates random numbers within a min/max range
  min = Math.ceil(min); // rounds min up to the nearest whole number
  max = Math.floor(max); // rounds max down to the nearest whole number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addSum(a, b) {
  return a + b;
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
  var displayName = allImgs[randNum].displayName; // changes element's textContent to name
  var price = allImgs[randNum].price;
  imgElName.src = allImgs[randNum].filepath; // assigns filepath value to element's src property
  imgElName.alt = allImgs[randNum].name; // assigns name value to element's alt property
  imgElName.title = allImgs[randNum].name; // assigns name value to element's title property
  radioElName.value = allImgs[randNum].name; // assigns name value to element's value property
  labelName.innerText = `${displayName} ${price}`; // changes element's textContent to name
}

function render() { // renders images and radio buttons while assigning their appropriate property values
  assignValues(imgOneEl, radioOneEl, labelOneEl); // assigns property values to first image and radio button
  assignValues(imgTwoEl, radioTwoEl, labelTwoEl); // assigns property values to first image and radio button
  assignValues(imgThreeEl, radioThreeEl, labelThreeEl); // assigns property values to first image and radio button
  console.log(recentRandNum); // displays the array of numbers which helps in adjusting line 81, see --IMPORTANT--
}

function selectedStyle(imgElName) {
  imgElName.style.boxShadow = '-2px 17px 5px rgb(0, 0, 0, 0.23)';
  imgElName.style.filter = 'brightness(105%)';
  imgElName.style.margin = '-10px 0 0 0';
}

function defaultStyle(imgElName) {
  imgElName.style.boxShadow = '0 6px 4px rgb(0, 0, 0, 0.40)';
  imgElName.style.margin = '0 0 -10px 0';
  imgElName.style.filter = 'brightness(95%)';
}

function pageStyleOnLoad() {
  selectedStyle(imgOneEl);
  defaultStyle(imgTwoEl);
  defaultStyle(imgThreeEl);
}

function renderVotes() {
  var names = [];
  var votes= [];
  var views = [];
  var ratios = [];
  resultsEl.textContent = 'Sorry you didn\'t win, but here are your voting results:';
  for(var i = 0; i < allImgs.length; i ++) {
    names.push(allImgs[i].name);
    votes.push(allImgs[i].votes);
    views.push(allImgs[i].views);
  }
  var maxView = Math.max.apply(null, views);
  for(var j = 0; j < allImgs.length; j ++) {
    ratios.push(votes[j]/views[j] * maxView);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Number of Views',
        data: views,
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Number of Votes',
        data: votes,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Nearest Percentage',
        data: ratios,
        backgroundColor: 'rgb(100, 100, 100)',
      }
      ]
    },
    options: {
      tooltips: {
        enabled: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            callback: function(value, index, values) {
              return `${Math.round(value / maxView * 100)}% - ${value}`;
            },
            beginAtZero: true
          }
        }]
      }
    }
  });
}

/* --Event Handler-- */

function handleClick(e) {
  if (e.target) {
    var options = imgContainerEl.elements.radioVote; // gets the radio buttons and stores them
    for(var j = 0; j < options.length; j ++) {
      if(options[0].checked) {
        selectedStyle(imgOneEl);
      } else {
        defaultStyle(imgOneEl);
      }
      if(options[1].checked) {
        selectedStyle(imgTwoEl);
      } else {
        defaultStyle(imgTwoEl);
      }
      if(options[2].checked) {
        selectedStyle(imgThreeEl);
      } else {
        defaultStyle(imgThreeEl);
      }
    }
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if(e.target) {
    var options = imgContainerEl.elements.radioVote; // gets the radio buttons and stores them
    for(var i = 0; i < allImgs.length; i ++) { // loops through all images
      for(var j = [0]; j < options.length; j ++) { // loops through radio buttons
        if(options[j].checked) { // checks which radio button has been selected
          if(options[j].value === allImgs[i].name) { // checks if selected radio value matches image name
            spamChecker.push(options[j].id);
            if(spamChecker.length > 5) { // condition that checks how many numbers are in the array
              spamChecker.shift(); // removes numbers from the beginning of the array when there are more than the specified number
            }
            allImgs[i].votes ++; // adds vote to constructor function property
            remainingVotes --; // decreases votes from remaining votes array
            votesEl.textContent = `Votes Remaining: ${remainingVotes}`; // displays remaining votes in the DOM
          }
        }
      }
    }
    var spam = [];
    for(var o = 0; o < spamChecker.length; o ++) {
      for(var t = 0; t < spamChecker.length; t ++) {
        if(spamChecker[o] === spamChecker[t]) {
          spam.push(1);
        } else {
          spam.push(0);
        }
      }
    }
    console.log(spamChecker);
    console.log(spam);
    console.log(spam.reduce(addSum));
    if(spam.reduce(addSum)/spamChecker.length > 4) { // if user clicks on same radio 5 times, alert is given
      alert('Please vote honestly!');
      spamChecker = [];
    }
    if(remainingVotes === 5) {
      votesEl.style.animation = 'alert1 0.5s';
      votesEl.style.animationIterationCount = '1';
    }
    if(remainingVotes === 4) {
      votesEl.style.animation = 'alert2 0.5s';
      votesEl.style.animationIterationCount = '1';
    }
    if(remainingVotes === 3) {
      votesEl.style.animation = 'alert1 0.5s';
      votesEl.style.animationIterationCount = '1';
    }
    if(remainingVotes === 2) {
      votesEl.style.animation = 'alert2 0.5s';
      votesEl.style.animationIterationCount = '1';
    }
    if(remainingVotes === 1) {
      votesEl.style.animation = 'alert1 0.5s';
      votesEl.style.animationIterationCount = '1';
    }
    if(remainingVotes === 0) { // checks remaining votes
      votesEl.style.transition = '500ms';
      votesEl.style.color = 'rgb(50, 50, 50)';
      buttonEl.textContent = 'Click to View to Your Results!';
      imgContainerEl.removeEventListener('submit', handleSubmit); // removes event listener when votes = 0
      imgContainerEl.addEventListener('submit', handleResultsSubmit);
      // console.log(allImgs); 
    }
  }
  render();
}

function handleResultsSubmit(e) {
  e.preventDefault();
  if(e.target) {
    renderVotes();
    var submit = document.getElementById('submit');
    submit.style.visibility = 'hidden'; // hides submit button
    submit.style.transition = '0ms'; // sets transition time to 0
  }
}

/* --Event Listeners-- */

imgContainerEl.addEventListener('click', handleClick);
imgContainerEl.addEventListener('submit', handleSubmit);

/* --Function Calls-- */

render();
pageStyleOnLoad();
// console.log(allImgs);
