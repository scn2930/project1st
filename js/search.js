const logoImage = document.querySelector('h1 > a > img');
function changeImageSource() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        logoImage.src = './img/logo_only.png';
    } else {
      logoImage.src = '';
        logoImage.src = "./img/logo.png";
    }
}

// 페이지 로드시 초기 호출
changeImageSource();

// 브라우저 창 크기 변경 시 이미지 변경
window.addEventListener('resize', changeImageSource);


let filterPeople = document.querySelectorAll('.people_count');
let gameList = document.querySelectorAll('.game-card');

for (let fp of filterPeople) {
  fp.addEventListener('click', (e) => {
    for (let btn of filterPeople) {
      btn.classList.remove('active');
    }
    e.target.classList.add('active');

    let targetClass = e.target.getAttribute('data-filter');
    console.log(targetClass);
    let filteredList = document.querySelectorAll(`.game-row .${targetClass}`);
    console.log(filteredList);

    for (let gl of gameList) {
      gl.style.display = 'none';
    }
     for (let fl of filteredList) {
       fl.style.display = "block";
       fl.classList.add('filter_layout');
    }

  })

}

let filterLevel = document.querySelectorAll(".level");
// let levelList = document.querySelectorAll(".game-card");

for (let fl of filterLevel) {
  fl.addEventListener("click", (e) => {
    for (let btn of filterLevel) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");

    let targetClass = e.target.getAttribute("data-filter");
    console.log(targetClass);
    let filteredList = document.querySelectorAll(`.game-row .${targetClass}`);
    console.log(filteredList);

    for (let gl of gameList) {
      gl.style.display = "none";
    }
    for (let fl of filteredList) {
      fl.style.display = "block";
      fl.classList.add("filter_layout");
    }
  });
}

// made in GPT >> 검색바에서 게임명 검색
document.querySelector('form[action="search"]').addEventListener('submit', function(event) {
  event.preventDefault();

  const searchTerm = document.querySelector('#header_search_bar').value.toLowerCase().trim();
  const gameContainer = document.querySelector('.games');
  gameContainer.innerHTML = '';  // 기존 게임 리스트 초기화

  const filteredGames = Object.keys(gameData).filter(key => 
      gameData[key].title.toLowerCase().includes(searchTerm)
  );

  if (filteredGames.length > 0) {
      filteredGames.forEach(gameKey => {
          const game = gameData[gameKey];
          const gameCard = document.createElement('div');
          gameCard.className = `game-card ${game.difficulty.toLowerCase()}`;
          gameCard.setAttribute('data-game', gameKey);
          gameCard.innerHTML = `
              <img src="${game.imgSrc}" alt="${game.title}">
              <p>${game.title}</p>
          `;
          gameContainer.appendChild(gameCard);

          // 게임 카드 클릭 이벤트 추가
          gameCard.addEventListener('click', function() {
              const gameDetails = this.parentElement.nextElementSibling;
              const gameInfo = gameData[gameKey];
              gameDetails.innerHTML = `
                  <div class="game-info">
                      <button class="close-btn"><img src='img/icon/close.png' alt='Close'></button>
                      <img src="${gameInfo.imgSrc}" alt="${gameInfo.title}">
                      <div class="info">
                          <h1>${gameInfo.title}</h1>
                          <p>${gameInfo.description}</p>
                          <p class="left"><strong>난이도:</strong> ${gameInfo.difficulty}</p>
                          <p class="left"><strong>인원:</strong> ${gameInfo.players}</p>
                          <p class="left"><strong>게임시간:</strong> ${gameInfo.time}</p>
                      </div>
                  </div>
              `;
              gameDetails.style.display = 'flex';

              gameDetails.querySelector('.close-btn').addEventListener('click', () => {
                  gameDetails.style.display = 'none';
              });
          });
      });
  } else {
      gameContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
  }
});


