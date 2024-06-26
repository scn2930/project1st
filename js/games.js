const gameData = {
  splendor: {
    imgSrc: "img/game/splan.png",
    title: "스플렌더 <span>Splendor</span>",
    description:
      "2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임",
    difficulty: "Hard",
    players: "2-4인",
    time: "45분"
  },
  "davinci-code": {
    imgSrc: "img/game/davinci.png",
    title: "다빈치코드 <span>DaVinci Code</span>",
    description: "숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!",
    difficulty: "Easy",
    players: "2-4인",
    time: "20분"
  },
  rummikub: {
    imgSrc: "img/game/rumi.png",
    title: "루미큐브 <span>Rummikub</span>",
    description:
      "남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!",
    difficulty: "Normal",
    players: "2-6인",
    time: "30분"
  },
  uno: {
    imgSrc: "img/game/uno.png",
    title: "우노 <span>UNO</span>",
    description: "가족과 친구들이 즐길 수 있는 카드 게임",
    difficulty: "Easy",
    players: "2-10인",
    time: "20분"
  },
  8282: {
    imgSrc: "img/game/8282.png",
    title: "8282 <span>8282</span>",
    description: "가족과 친구들이 즐길 수 있는 카드 게임",
    difficulty: "Easy",
    players: "2-10인",
    time: "20분"
  },
  "hands-up": {
    imgSrc: "img/game/handsup.png",
    title: "핸즈업 <span>HandsUp</span>",
    description:
      "2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임",
    difficulty: "Hard",
    players: "2-4인",
    time: "45분"
  },
  halligalli: {
    imgSrc: "img/game/hali.png",
    title: "할리갈리 <span>HalliGalli</span>",
    description: "숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!",
    difficulty: "Easy",
    players: "2-4인",
    time: "20분"
  },
  dalmuti: {
    imgSrc: "img/game/dalmuti.png",
    title: "달무티 <span>Dalmuti</span>",
    description:
      "남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!",
    difficulty: "Normal",
    players: "2-6인",
    time: "30분"
  },
  "exploding-kitten": {
    imgSrc: "img/game/kitten.png",
    title: "익스플로딩 키튼 <span>Exploding Kitten</span>",
    description: "가족과 친구들이 즐길 수 있는 카드 게임",
    difficulty: "Easy",
    players: "2-10인",
    time: "20분"
  },
  telestrations: {
    imgSrc: "img/game/tele.png",
    title: "텔레스트레이션 <span>Telestrations</span>",
    description:
      "2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임",
    difficulty: "Hard",
    players: "2-4인",
    time: "45분"
  },
  nothanks: {
    imgSrc: "img/game/nothan.png",
    title: "노땡스! <span>No Thanks!</span>",
    description: "숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!",
    difficulty: "Easy",
    players: "2-4인",
    time: "20분"
  },
  "modoo-marble": {
    imgSrc: "img/game/mar.png",
    title: "모두의 마블 <span>Modoo Marble</span>",
    description:
      "남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!",
    difficulty: "Normal",
    players: "2-6인",
    time: "30분"
  },
  saboreur: {
    imgSrc: "img/game/savo.png",
    title: "사보타지 <span>Saboreur</span>",
    description: "가족과 친구들이 즐길 수 있는 카드 게임",
    difficulty: "Easy",
    players: "2-10인",
    time: "20분"
  },
  tako: {
    imgSrc: "img/game/tako.png",
    title: "타코 캣 고트 치즈 피자 <span>Taco Cat Goat Cheese Pizza</span>",
    description:
      "2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임",
    difficulty: "Hard",
    players: "2-4인",
    time: "45분"
  },
  "kushi-express": {
    imgSrc: "img/game/kushi.png",
    title: "꼬치의 달인 <span>Kushi Express</span>",
    description: "숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!",
    difficulty: "Easy",
    players: "2-4인",
    time: "20분"
  },
  clue: {
    imgSrc: "img/game/clue.png",
    title: "클루 <span>Clue</span>",
    description:
      "남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!",
    difficulty: "Normal",
    players: "2-6인",
    time: "30분"
  },
};

document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', function() {
        const gameName = this.getAttribute('data-game');
        const gameDetails = this.parentElement.nextElementSibling;

        if (!gameData[gameName]) return;

        const gameInfo = gameData[gameName];
        
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