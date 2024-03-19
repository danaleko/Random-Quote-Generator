// Select elements from the DOM
const quoteText = document.querySelector(".quote-text");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author-name");

// Function to fetch a random quote
function randomQuote() {
  // Add loading state to the button
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";

  // Fetch a random quote from the API
  fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(result => {
      // Update the quote text and author
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      
      // Remove loading state from the button
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "Generate Quote";
    });
}

// Event listener for clicking the generate quote button
quoteBtn.addEventListener("click", randomQuote);
