const searchBtn = document.querySelector(".search-btn");
let searchBox = document.querySelector(".search-box");
const cardsContainer = document.querySelector(".container-content");

//const posterImage = document.querySelector(".poster-img");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let movieVal = searchBox.value;
  // console.log(movieVal);
  fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${movieVal}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      showResults(data.Search);
    })
    .catch((err) => {
      alert(`${err.message} !`);
    });
});

function showResults(data) {
  cardsContainer.innerHTML = "";
  data.forEach((i) => {
    // console.log(i);
    const html = `
    <div class="card">
      <img src="${i.Poster}" alt="" class="card-img" />
      <div class="card-body">
        <p class="card-text">${i.Title}</p>
      </div>
    </div>
    `;
    cardsContainer.insertAdjacentHTML("afterbegin", html);
  });

  // const openInfo = document.querySelector(".info-btn");
  // const closeInfo = document.querySelector(".close");
  // let popUp = document.querySelector(".popup");
  // openInfo.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   console.log('clicked')
  //   popUp.classList.add("open-pop");
  // });

  // closeInfo.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   console.log('clicked')
  //   popUp.classList.remove("open-pop");
  // });
}
