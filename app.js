const quotes = [
  {
    name: "Albert Einstein",
    quote: "I have no special talent. I am only passionately curious."
  },
  {
    name: "William Shakespeare",
    quote: "Wisely, and slow. They stumble that run fast. "
  },
  {
    name: "Mother Teresa",
    quote: "If you judge people, you have no time to love them. "
  },
  {
    name: "Buddha",
    quote: "All that we are is the result of what we have thought. "
  },
  {
    name: "Steve Jobs",
    quote: "Stay hungry, stay foolish. "
  }
];
//targeting button,quote,author of the quote
const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

//creating event listener
quoteBtn.addEventListener("click", getQuote);

//creating a function and variable
function getQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  //console.log(number);

  quote.innerHTML = quotes[number].quote;
  quoteAuthor.innerHTML = quotes[number].name;
}
