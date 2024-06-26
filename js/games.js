const gameData = {
    'splendor': {
        title: '스플렌더<span>Splendor</span>',
        description: '2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임',
        difficulty: 'Hard',
        players: '2-4인',
        time: '45분',
        imgSrc: 'img/game/splan.png'
    },
    'davinci-code': {
        title: '다빈치코드<span>DaVinci Code</span>',
        description: '숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!',
        difficulty: 'Easy',
        players: '2-4인',
        time: '20분',
        imgSrc: 'img/game/davinci.png'
    },
    'rummikub': {
        title: '루미큐브<span>Rummikub</span>',
        description: '남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!',
        difficulty: 'Normal',
        players: '2-6인',
        time: '30분',
        imgSrc: 'img/game/rumi.png'
    },
    'uno': {
        title: '우노<span>UNO</span>',
        description: '가족과 친구들이 즐길 수 있는 카드 게임',
        difficulty: 'Easy',
        players: '2-10인',
        time: '20분',
        imgSrc: 'img/game/uno.png'
    },
    '8282': {
        title: '8282<span>8282</span>',
        description: '2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임',
        difficulty: 'Hard',
        players: '2-4인',
        time: '45분',
        imgSrc: 'img/game/8282.png'
    },
    'hands-up': {
        title: '핸즈업<span>HandsUp</span>',
        description: '숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!',
        difficulty: 'Easy',
        players: '2-4인',
        time: '20분',
        imgSrc: 'img/game/handsup.png'
    },
    'halligalli': {
        title: '할리갈리<span>HalliGalli</span>',
        description: '남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!',
        difficulty: 'Normal',
        players: '2-6인',
        time: '30분',
        imgSrc: 'img/game/hali.png'
    },
    'dalmuti': {
        title: '달무티<span>Dalmuti</span>',
        description: '가족과 친구들이 즐길 수 있는 카드 게임',
        difficulty: 'Easy',
        players: '2-10인',
        time: '20분',
        imgSrc: 'img/game/dalmuti.png'
    },
    'exploding-kitten': {
        title: '익스플로딩 키튼<span>Exploding Kitten</span>',
        description: '2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임',
        difficulty: 'Hard',
        players: '2-4인',
        time: '45분',
        imgSrc: 'img/game/kitten.png'
    },
    'telestrations': {
        title: '텔레스트레이션<span>Telestrations</span>',
        description: '숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!',
        difficulty: 'Easy',
        players: '2-4인',
        time: '20분',
        imgSrc: 'img/game/tele.png'
    },
    'nothanks': {
        title: '노땡스!<span>No Thanks!</span>',
        description: '남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!',
        difficulty: 'Normal',
        players: '2-6인',
        time: '30분',
        imgSrc: 'img/game/nothan.png'
    },
    'modoo-marble': {
        title: '모두의 마블<span>Modoo Marble</span>',
        description: '가족과 친구들이 즐길 수 있는 카드 게임',
        difficulty: 'Easy',
        players: '2-10인',
        time: '20분',
        imgSrc: 'img/game/mar.png'
    },
    'saboreur': {
        title: '사보타지<span>Saboreur</span>',
        description: '2015년 판매량 1위에 빛나는 <br> 보석칩으로 카드를 사서 모으는 극강의 두뇌꿀잼게임',
        difficulty: 'Hard',
        players: '2-4인',
        time: '45분',
        imgSrc: 'img/game/savo.png'
    },
    'tako': {
        title: '타코 캣 고트 치즈 피자<span>Taco Cat Goat Cheese Pizza</span>',
        description: '숫자 추리게임의 대명사! <br> 보드게임 입문자들의 필수코스!',
        difficulty: 'Easy',
        players: '2-4인',
        time: '20분',
        imgSrc: 'img/game/tako.png'
    },
    'kushi-express': {
        title: '꼬치의 달인<span>Kushi Express</span>',
        description: '남녀노소 누구나 사랑하는 타일조합 손털기 게임! <br> 세계인의 게임 루미큐브!',
        difficulty: 'Normal',
        players: '2-6인',
        time: '30분',
        imgSrc: 'img/game/kushi.png'
    },
    'clue': {
        title: '클루<span>Clue</span>',
        description: '가족과 친구들이 즐길 수 있는 카드 게임',
        difficulty: 'Easy',
        players: '2-10인',
        time: '20분',
        imgSrc: 'img/game/clue.png'
    },
};

function showGameDetails(item, gameData, numItemsPerRow) {
    const gameName = item.getAttribute('data-game');
    const existingDetails = document.querySelector('.game-details');

    if (existingDetails) {
        existingDetails.remove();
    }

    const details = document.createElement('div');
    details.classList.add('game-details');

    if (gameData[gameName]) {
        details.innerHTML = `
            <button class="close-btn"><img src='img/icon/close.png' alt='Close'></button>
            <img src="${gameData[gameName].imgSrc}" alt="${gameData[gameName].title}">
            <div class="info">
                <h2>${gameData[gameName].title}</h2>
                <p>${gameData[gameName].description}</p>
                <p class="left"><strong>난이도:</strong> ${gameData[gameName].difficulty}</p>
                <p class="left"><strong>인원:</strong> ${gameData[gameName].players}</p>
                <p class="left"><strong>게임 시간:</strong> ${gameData[gameName].time}</p>
            </div>
        `;
    } else {
        details.innerHTML = `
            <button class="close-btn"><img src='img/icon/close.png' alt='Close'></button>
            <h2>게임 정보 없음</h2>
        `;
    }

    const index = Array.from(item.parentNode.children).indexOf(item);
    const rowIndex = Math.floor(index / numItemsPerRow);
    const rowItems = document.querySelectorAll(`#game-list li:nth-child(n+${rowIndex * numItemsPerRow + 1}):nth-child(-n+${(rowIndex + 1) * numItemsPerRow})`);
    const lastItemInRow = rowItems[rowItems.length - 1];

    lastItemInRow.insertAdjacentElement('afterend', details);
    details.style.display = 'flex';

    details.querySelector('.close-btn').addEventListener('click', () => {
        details.style.display = 'none';
    });
}

document.querySelectorAll('#game-list li').forEach((item, index) => {
    item.addEventListener('click', () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 768) {
            showGameDetails(item, gameData, 4);
        } else {
            showGameDetails(item, gameData, 2);
        }
    });

});

window.addEventListener('resize', () => {
    const existingDetails = document.querySelector('.game-details');
    if (existingDetails) {
        existingDetails.remove();
    }
});

