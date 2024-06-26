// startpage에서 검색 후 메인으로
const init = () => {
  const urlSearch = new URLSearchParams(location.search);
  const game = urlSearch.get("game");

  document.getElementById("header_search_bar").value = game;
  filterGames();
};

// 로고 이미지 변경(반응형)
const logoImage = document.querySelector("h1 > a > img");
function changeImageSource() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    logoImage.src = "./img/logo_only.png";
  } else {
    logoImage.src = "./img/logo.png";
  }
}

// 페이지 로드시 초기 호출
changeImageSource();

// 브라우저 창 크기 변경 시 이미지 변경
window.addEventListener("resize", changeImageSource);

function filterGames() {
  const searchInput = document
    .getElementById("header_search_bar")
    .value.toLowerCase();
  const gameItems = document.querySelectorAll("#game-list li");
  let hasResults = false;

  gameItems.forEach((item) => {
    const gameName = item.getAttribute("data-game");
    const gameTitle = item
      .querySelector(".game-card-title")
      .textContent.toLowerCase();

    if (gameTitle.includes(searchInput)) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  });

  if (searchInput) {
    filterCriteria.innerHTML = hasResults
      ? `필터링 기준: 검색 - ${searchInput}`
      : `검색 결과가 없습니다: ${searchInput}`;
  } else {
    filterCriteria.innerHTML = "";
  }
}

document
  .getElementById("header_search_bar")
  .addEventListener("input", filterGames);

init();
