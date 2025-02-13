const questionContainer = document.querySelector(".question-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const heartLoader = document.querySelector(".cssload-main");
const loadingText = document.querySelector(".loading-text");
const yesResultContainer = document.querySelector(".result-container.yes");
const noResultContainer = document.querySelector(".result-container.no");
const gifResult = document.querySelector(".gif-result");
const restartBtns = document.querySelectorAll(".restart-btn");

// Store the initial position of the "No" button
const initialNoBtnPosition = {
  left: noBtn.offsetLeft,
  top: noBtn.offsetTop
};

function result(questionContainer, heartLoader, resultContainer, gifResult) {
  questionContainer.style.display = "none";
  resultContainer.style.display = "inherit";
    const resulvideo = resultContainer.querySelector(".gif-result");
  if (resulvideo) {
    resulvideo.currentTime = 0; // Reset video to start
    resulvideo.play();
  }
  
}

// yes button functionality
yesBtn.addEventListener("click", () => {
  result(questionContainer, heartLoader, yesResultContainer, gifResult);
});


//no button functionality
function moveButton() {
  const maxX = (window.innerWidth - noBtn.clientWidth) * 0.7; 
  const maxY = (window.innerHeight - noBtn.clientHeight) * 0.7; 

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Move the button when the cursor hovers over it
noBtn.addEventListener("mouseover", moveButton);

// restart button functionality
restartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    heartLoader.style.display = "inherit";
    loadingText.style.display = "block"; // Show "I love you"
    yesResultContainer.style.display = "none";
    noResultContainer.style.display = "none";

    const timeoutId = setTimeout(() => {
      questionContainer.style.display = "inherit";
      heartLoader.style.display = "none";
      loadingText.style.display = "none"; // Show "I love you"
      
    // Reset "No" button to its exact initial position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${initialNoBtnPosition.left}px`;
    noBtn.style.top = `${initialNoBtnPosition.top}px`;
    }, 3000);
  });
});
