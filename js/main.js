const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // while there remain elements to shuffle
  while (0 !== currentIndex) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // and swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// shuffle order of array
let word = ["P", "O", "S", "A", "O"];
shuffle(word);

let lettersContainer = document.querySelector(".letters-container"); // get letters-container div
let wordContainer = document.querySelector(".word-container"); // get word-container div

// in letters-container show the word
for (let i = 0; i < word.length; i++) {
  lettersContainer.innerHTML += `<p class="letter">${word[i]}</p>`;
}

// map through letters and push them into string (clickedLetters) on click
let letters = [...document.querySelectorAll(".letter")];
let clickedLetters = "";

letters.map((letter) => {
  letter.onclick = () => {
    clickedLetters += letter.innerText;
    // disable letter
    letter.classList.add("letter-disabled");
    // show the letters that user clicked
    wordContainer.innerHTML = `<h2>${clickedLetters}</h2>`;
  };
});

let time; // defining time variable

// check if user is using mobile / tablet or desktop
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  time = 5000; // if user is using mobile / tablet, time is 5000
} else {
  time = 4000; // else (if user is using desktop), time is 4000
}

// reload the page on "play again" button
const handlePlayAgain = () => {
  window.location.reload();
};

setTimeout(function () {
  // if string checkedLetters === "posao" show message and "Play again" button and delete word in word-container
  if (clickedLetters === "POSAO") {
    lettersContainer.innerHTML = `<h1>Bravo!</h1>`;
    wordContainer.innerHTML = "";
    let buttonContainer = document.querySelector(".button-container");
    buttonContainer.innerHTML = `<button class="btn" onclick="handlePlayAgain()">Igraj ponovo</button>`;
  } else {
    // else reload the page
    window.location.reload();
  }
}, time);
