function getData() {
  const dataValue = fetch("https://dummy-apis.netlify.app/api/quote");
  dataValue
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return creatEl(data.quote, data.author);
    });
}

const btn = document.querySelector("button");
btn.addEventListener("click", getData);

function creatEl(dataQuote, dataAuthor) {
  document.querySelector(".quote-container").innerHTML = "";
  document.querySelector("figcaption").innerHTML = "";

  const p = document.createElement("p");
  const quote = document.createTextNode(dataQuote);
  const author = document.createTextNode(dataAuthor);

  document.querySelector(".quote-container").appendChild(p).appendChild(quote);
  document.querySelector("figcaption").appendChild(author);
}

getData();
