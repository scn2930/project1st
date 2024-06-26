const GAME = [
  {
    name: "스플렌더",
    level: "normal",
    minPeople: "2",
    genre: "strategy",
    imgSrc: "../img/game/splan.png",
  },
  {
    name: "다빈치코드",
    level: "normal",
    minPeople: "3",
    genre: "guess",
    imgSrc: "../img/game/davinci.png",
  },
  {
    name: "루미큐브",
    level: "hard",
    minPeople: "4",
    genre: "guess",
    imgSrc: "../img/game/rumi.png",
  },
  {
    name: "우노",
    level: "hard",
    minPeople: "5",
    genre: "card",
    imgSrc: "../img/game/uno.png",
  },
  {
    name: "8282",
    level: "hard",
    minPeople: "6",
    genre: "card",
    imgSrc: "../img/game/8282.png",
  },
  {
    name: "핸즈업",
    level: "easy",
    minPeople: "7",
    genre: "family",
    imgSrc: "../img/game/handsup.png",
  },
  {
    name: "할리갈리",
    level: "easy",
    minPeople: "8",
    genre: "speed",
    imgSrc: "../img/game/hali.png",
  },
  {
    name: "달무티",
    level: "hard",
    minPeople: "2",
    genre: "puzzle",
    imgSrc: "../img/game/dalmuti.png",
  },
];

const filterPeople = document.querySelectorAll(".people_count");
// console.log(filterPeople);
// const gameList = document.querySelectorAll(".game-card");
const gameContainer = document.querySelector(".games");

filterPeople.forEach((people) => {
  people.addEventListener("click", () => {
    const peopleCon = people.getAttribute("data-filter");
    gameContainer.innerHTML = " ";

    let result = GAME.filter((e) => {
      if (e.minPeople === peopleCon) {
        console.log(e);
        gameContainer.innerHTML = `
      <div class="game-card" >
        <img src="${e.imgSrc}" alt="${e.name}">
        <p>${e.name}</p>
      </div>
      `;
        gameContainer.style.display = "flex";
      } else {
        // e.style.display = "none";
      }
    });
    // console.log(result);
  });
});
