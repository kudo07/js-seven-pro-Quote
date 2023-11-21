const quote = document.getElementById("quote");
const api_url = "https://api.quotable.io/random";
async function getquote(api_url) {
  const response = await fetch(api_url);
  var data = await response.json();
  //   console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getquote(api_url);
