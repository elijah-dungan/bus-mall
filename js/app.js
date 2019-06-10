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
var descriptionEl = document.getElementById('description-container');
var options = imgContainerEl.elements.radioVote; // gets the radio buttons and stores them

var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var imgThreeEl = document.getElementById('image-three');

var imgLarge = document.getElementById('image-large');
var txtDescription = document.getElementById('text-description');

var radioOneEl = document.getElementById('radio-vote-one');
var radioTwoEl = document.getElementById('radio-vote-two');
var radioThreeEl = document.getElementById('radio-vote-three');

var labelOneEl = document.getElementById('label-one');
var labelTwoEl = document.getElementById('label-two');
var labelThreeEl = document.getElementById('label-three');

/* --Constructor Functions-- */

function Img(name, extension, price, description) {
  this.name = name.toLowerCase();
  this.value = name.toLowerCase();
  this.displayName = name;
  this.price = price;
  this.description = description;
  this.filepath = `img/${name}.${extension}`;
  this.votes = 0;
  this.views = 0;
  allImgs.push(this);
}

/* --Instances-- */

new Img('Bag', 'jpg', '$19.99', 'Bag dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit amet nulla. Pretium fusce id velit ut tortor pretium viverra. Massa tincidunt dui ut ornare lectus sit amet. Leo vel fringilla est ullamcorper eget. Amet luctus venenatis lectus magna fringilla urna. Integer eget aliquet nibh praesent tristique magna. Volutpat lacus laoreet non curabitur. Pretium quam vulputate dignissim suspendisse. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Iaculis nunc sed augue lacus viverra vitae congue. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Scelerisque eleifend donec pretium vulputate. Tellus pellentesque eu tincidunt tortor aliquam nulla. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Mattis pellentesque id nibh tortor id. In nisl nisi scelerisque eu ultrices vitae auctor. Tempor id eu nisl nunc mi ipsum faucibus vitae. Rutrum tellus pellentesque eu tincidunt tortor aliquam.');
new Img('Banana', 'jpg', '$1.99', 'Banana consequat semper viverra nam libero. Aliquet nec ullamcorper sit amet. Tristique risus nec feugiat in fermentum. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Ac tincidunt vitae semper quis lectus nulla. Turpis tincidunt id aliquet risus feugiat in ante metus. Et netus et malesuada fames ac turpis egestas integer. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.');
new Img('Bathroom', 'jpg', '$11.99', 'Bathroom laoreet sit amet cursus sit amet dictum sit. Id leo in vitae turpis. Cursus euismod quis viverra nibh cras pulvinar. Dis parturient montes nascetur ridiculus. Ultricies mi eget mauris pharetra et ultrices neque. Mauris augue neque gravida in fermentum et sollicitudin. Egestas sed tempus urna et pharetra pharetra massa. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In hendrerit gravida rutrum quisque non tellus orci. Nunc lobortis mattis aliquam faucibus. Quis varius quam quisque id diam vel quam. Ultricies mi eget mauris pharetra. Feugiat sed lectus vestibulum mattis ullamcorper velit. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dapibus ultrices in iaculis nunc sed augue lacus.');
new Img('Boots', 'jpg', '$39.99', 'Boots amet purus gravida quis blandit turpis cursus in. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Duis at tellus at urna condimentum mattis pellentesque id. Nullam ac tortor vitae purus faucibus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. In ornare quam viverra orci sagittis eu volutpat. A cras semper auctor neque vitae tempus quam. Non odio euismod lacinia at quis. Faucibus scelerisque eleifend donec pretium. Adipiscing diam donec adipiscing tristique. Feugiat sed lectus vestibulum mattis ullamcorper. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Et malesuada fames ac turpis egestas integer. Odio aenean sed adipiscing diam donec adipiscing tristique.');
new Img('Breakfast', 'jpg', '$119.99', 'Breakfast pharetra massa massa ultricies mi. Nunc sed blandit libero volutpat. Lacus viverra vitae congue eu consequat ac felis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Mi bibendum neque egestas congue quisque egestas diam in. Dictum at tempor commodo ullamcorper a lacus. Etiam erat velit scelerisque in dictum non consectetur. In iaculis nunc sed augue lacus viverra vitae congue. Aliquet risus feugiat in ante metus dictum at tempor. Suspendisse sed nisi lacus sed. Viverra adipiscing at in tellus. Sit amet tellus cras adipiscing enim eu turpis egestas. Morbi leo urna molestie at elementum eu facilisis. Interdum velit euismod in pellentesque. Urna nunc id cursus metus aliquam eleifend mi in nulla.');
new Img('Bubblegum', 'jpg', '$2.99', 'Bubblegum adipiscing elit ut aliquam purus. Enim praesent elementum facilisis leo vel fringilla. Volutpat sed cras ornare arcu dui vivamus arcu felis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ut enim blandit volutpat maecenas volutpat. Auctor neque vitae tempus quam. Aenean et tortor at risus viverra adipiscing at. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Vel pharetra vel turpis nunc eget lorem dolor. Eget mauris pharetra et ultrices. Urna nunc id cursus metus aliquam eleifend mi in. Gravida quis blandit turpis cursus.');
new Img('Chair', 'jpg', '$13.99', 'Chair in massa tempor nec feugiat nisl pretium fusce id. Facilisis gravida neque convallis a. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Ullamcorper malesuada proin libero nunc. Feugiat pretium nibh ipsum consequat. Amet tellus cras adipiscing enim. Bibendum ut tristique et egestas. Nunc sed velit dignissim sodales. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Gravida dictum fusce ut placerat orci nulla. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Viverra nibh cras pulvinar mattis nunc sed blandit libero.');
new Img('Cthulhu', 'jpg', '$9.99', 'Cthulhu eu nisl nunc mi ipsum. Non curabitur gravida arcu ac. Leo in vitae turpis massa sed elementum tempus egestas sed. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Lacus laoreet non curabitur gravida arcu ac. Sagittis purus sit amet volutpat consequat. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In est ante in nibh mauris cursus mattis molestie. Morbi tristique senectus et netus et malesuada. Libero nunc consequat interdum varius sit amet mattis vulputate. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Odio pellentesque diam volutpat commodo sed egestas. Tincidunt dui ut ornare lectus sit amet est. Faucibus purus in massa tempor.');
new Img('Dog-Duck', 'jpg', '$4.99', 'Dog-Duck sit amet mauris commodo quis imperdiet massa tincidunt nunc. Enim ut sem viverra aliquet eget sit. Venenatis lectus magna fringilla urna. Convallis posuere morbi leo urna. Sapien pellentesque habitant morbi tristique senectus et netus et. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Gravida in fermentum et sollicitudin ac orci phasellus. Elementum curabitur vitae nunc sed velit dignissim sodales. Condimentum lacinia quis vel eros donec ac odio tempor orci. Quam viverra orci sagittis eu volutpat odio.');
new Img('Dragon', 'jpg', '$2.99', 'Dragon fames ac turpis egestas maecenas pharetra convallis. Urna neque viverra justo nec ultrices. Sed odio morbi quis commodo odio aenean sed adipiscing. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Porta non pulvinar neque laoreet suspendisse interdum. Nec ultrices dui sapien eget mi proin sed libero enim. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu feugiat pretium nibh ipsum. Eget nullam non nisi est. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Mi bibendum neque egestas congue. Malesuada pellentesque elit eget gravida cum sociis natoque.');
new Img('Pen', 'jpg', '$4.99', 'Pen velit egestas dui id ornare. Pulvinar etiam non quam lacus. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Habitant morbi tristique senectus et netus. Eleifend mi in nulla posuere sollicitudin aliquam. In mollis nunc sed id semper risus. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Sapien faucibus et molestie ac feugiat. Neque sodales ut etiam sit amet. Sem integer vitae justo eget magna fermentum. Urna duis convallis convallis tellus id interdum. At risus viverra adipiscing at in tellus. Purus ut faucibus pulvinar elementum. Diam vulputate ut pharetra sit amet aliquam id diam. Quis imperdiet massa tincidunt nunc pulvinar sapien et.');
new Img('Pet-Sweep', 'jpg', '$11.99', 'Pet-Sweep egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Lorem donec massa sapien faucibus et molestie ac feugiat. Posuere lorem ipsum dolor sit amet. Massa tempor nec feugiat nisl pretium. Tincidunt augue interdum velit euismod in pellentesque massa. Venenatis cras sed felis eget velit aliquet sagittis id. Commodo nulla facilisi nullam vehicula ipsum a. Imperdiet dui accumsan sit amet nulla facilisi. Eu non diam phasellus vestibulum. Nullam eget felis eget nunc lobortis. Phasellus faucibus scelerisque eleifend donec. In nisl nisi scelerisque eu ultrices vitae auctor eu.');
new Img('Scissors', 'jpg', '$6.99', 'Scissors purus ut faucibus pulvinar elementum integer enim neque. Id aliquet lectus proin nibh nisl. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Dictumst vestibulum rhoncus est pellentesque elit. Tristique senectus et netus et. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Molestie nunc non blandit massa enim nec dui nunc. Proin sed libero enim sed faucibus turpis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Rhoncus urna neque viverra justo nec ultrices. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Molestie a iaculis at erat pellentesque. Quam nulla porttitor massa id. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.');
new Img('Shark', 'jpg', '$29.99', 'Shark tempus iaculis urna id volutpat lacus. Id faucibus nisl tincidunt eget nullam non nisi. Semper feugiat nibh sed pulvinar. A diam sollicitudin tempor id eu. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Sagittis orci a scelerisque purus semper eget. Sodales ut eu sem integer vitae justo eget magna fermentum. Pharetra sit amet aliquam id diam. Urna duis convallis convallis tellus. Tincidunt id aliquet risus feugiat in ante. Ac felis donec et odio pellentesque diam. In massa tempor nec feugiat nisl pretium.');
new Img('Sweep', 'png', '$11.99', 'Sweep odio morbi quis commodo. Quisque non tellus orci ac. Auctor urna nunc id cursus metus aliquam eleifend. Lobortis scelerisque fermentum dui faucibus in ornare quam. Rutrum quisque non tellus orci ac auctor augue. Tellus cras adipiscing enim eu turpis egestas. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Donec ultrices tincidunt arcu non sodales neque. Amet tellus cras adipiscing enim. Aenean vel elit scelerisque mauris. Aliquet eget sit amet tellus cras adipiscing enim eu. Scelerisque eu ultrices vitae auctor eu augue. Amet cursus sit amet dictum sit amet justo donec. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Nisi est sit amet facilisis magna. Congue nisi vitae suscipit tellus mauris a.');
new Img('Tauntaun', 'jpg', '$14.99', 'Tauntaun mauris vitae ultricies leo integer malesuada nunc. Nunc faucibus a pellentesque sit amet. Nec ullamcorper sit amet risus. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ut eu sem integer vitae justo eget magna fermentum iaculis. Convallis posuere morbi leo urna molestie at. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Diam quis enim lobortis scelerisque fermentum dui faucibus. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Orci eu lobortis elementum nibh tellus molestie nunc. Et malesuada fames ac turpis egestas integer eget. Pulvinar mattis nunc sed blandit. At augue eget arcu dictum varius.');
new Img('Unicorn', 'jpg', '$2.99', 'Unicorn nam at lectus urna duis convallis convallis. Ornare lectus sit amet est placerat in egestas erat. Non blandit massa enim nec. Aenean et tortor at risus viverra adipiscing at in. Nibh sit amet commodo nulla facilisi nullam vehicula. Augue neque gravida in fermentum et sollicitudin ac orci. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Bibendum ut tristique et egestas quis. Sed risus ultricies tristique nulla aliquet enim. Pellentesque dignissim enim sit amet.');
new Img('USB', 'gif', '$14.99', 'USB integer feugiat scelerisque varius. Cursus vitae congue mauris rhoncus. Nec nam aliquam sem et tortor. Aenean vel elit scelerisque mauris pellentesque. Vestibulum sed arcu non odio euismod lacinia. Non sodales neque sodales ut. Viverra justo nec ultrices dui sapien eget mi proin. Id faucibus nisl tincidunt eget nullam non nisi est sit. Nibh praesent tristique magna sit amet purus gravida quis. Dolor sit amet consectetur adipiscing. Commodo viverra maecenas accumsan lacus vel. Morbi quis commodo odio aenean. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.');
new Img('Water-Can', 'jpg', '$3.99', 'Water-Can sed viverra tellus in hac habitasse. In cursus turpis massa tincidunt dui ut ornare lectus. Orci nulla pellentesque dignissim enim. Tincidunt lobortis feugiat vivamus at augue eget arcu. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Urna nunc id cursus metus aliquam eleifend mi. Nunc id cursus metus aliquam eleifend mi in. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. A iaculis at erat pellentesque adipiscing. In hac habitasse platea dictumst vestibulum rhoncus.');
new Img('Wine-Glass', 'jpg', '$9.99', 'Wine-Glass non quam lacus suspendisse faucibus interdum posuere lorem. Feugiat nisl pretium fusce id. Ante metus dictum at tempor. Ut porttitor leo a diam sollicitudin. Viverra nam libero justo laoreet. Egestas tellus rutrum tellus pellentesque eu. Non tellus orci ac auctor augue mauris augue. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Et sollicitudin ac orci phasellus egestas tellus rutrum. Pulvinar neque laoreet suspendisse interdum consectetur libero. Ut pharetra sit amet aliquam. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Amet nisl purus in mollis nunc sed id semper risus. Ultricies integer quis auctor elit sed vulputate mi sit amet. Viverra aliquet eget sit amet. Nisl vel pretium lectus quam. Quis vel eros donec ac. Eu augue ut lectus arcu bibendum at varius. Dignissim convallis aenean et tortor at risus viverra.');

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
  descriptionEl.innerHTML = '<canvas id="myChart"></canvas>';
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

function renderDescription() {
  for(var i = 0; i < allImgs.length; i ++) { // loops through all images
    for(var j = [0]; j < options.length; j ++) { // loops through radio buttons
      if(options[j].checked) { // checks which radio button has been selected
        if(options[j].value === allImgs[i].name) { // checks if selected radio value matches image name
          imgLarge.src = allImgs[i].filepath; // assigns filepath value to element's src property
          imgLarge.alt = allImgs[i].name; // assigns name value to element's alt property
          imgLarge.title = allImgs[i].name; // assigns name value to element's title property
          resultsEl.textContent = allImgs[i].displayName;
          txtDescription.textContent = allImgs[i].description;
        }
      }
    }
  }
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
  renderDescription();
}

function handleSubmit(e) {
  e.preventDefault();
  if(e.target) {
    for(var i = 0; i < allImgs.length; i ++) { // loops through all images
      for(var j = [0]; j < options.length; j ++) { // loops through radio buttons
        if(options[j].checked) { // checks which radio button has been selected
          if(options[j].value === allImgs[i].name) { // checks if selected radio value matches image name
            allImgs[i].votes ++; // adds vote to constructor function property
            remainingVotes --; // decreases votes from remaining votes array
            votesEl.textContent = `Votes Remaining: ${remainingVotes}`; // displays remaining votes in the DOM
            spamChecker.push(options[j].id);
            if(spamChecker.length > 7) { // condition that checks how many numbers are in the array
              spamChecker.shift(); // removes numbers from the beginning of the array when there are more than the specified number
            }
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
    if(remainingVotes > 1) {
      if(spam.reduce(addSum)/spamChecker.length > 6) { // if user clicks on same radio 6 times, alert is given
        alert('Spam detected! Please hit okay to verify that you are not a robot.');
        spamChecker = [];
      }
    }
    if(remainingVotes === 0) { // checks remaining votes
      votesEl.style.transition = '500ms';
      votesEl.style.color = 'rgb(50, 50, 50)';
      buttonEl.textContent = 'Click to View to Your Results!';
      imgContainerEl.removeEventListener('submit', handleSubmit); // removes event listener when votes = 0
      imgContainerEl.addEventListener('submit', handleResultsSubmit);
    }
  }
  render();
  renderDescription();
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
renderDescription();
pageStyleOnLoad();
// console.log(allImgs);
