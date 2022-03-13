const id = document.querySelector(".id");
const quote = document.querySelector(".quote");

const getQuote = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const response = await res.json();
  id.innerHTML = response.slip.id;
  quote.innerHTML = response.slip.advice;
};
getQuote();
