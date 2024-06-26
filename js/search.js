const logoImage = document.querySelector('h1 > a > img');
function changeImageSource() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        logoImage.src = './img/logo_only.png';
    } else {
        logoImage.src = './img/logo.png';
    }
}

// 페이지 로드시 초기 호출
changeImageSource();

// 브라우저 창 크기 변경 시 이미지 변경
window.addEventListener('resize', changeImageSource);

let filterPeople = document.querySelectorAll('.people_count');
let gameList = document.querySelectorAll('.game-card');
let filterCriteria = document.createElement('div');
filterCriteria.id = 'filter-criteria';
filterCriteria.style.margin = '20px 0';
document.querySelector('.games').prepend(filterCriteria);

for (let fp of filterPeople) {
    fp.addEventListener('click', (e) => {
        for (let btn of filterPeople) {
            btn.classList.remove('active');
        }
        e.target.classList.add('active');

        let targetClass = e.target.getAttribute('data-filter');
        let filteredList = document.querySelectorAll(`.game-row .${targetClass}`);

        for (let gl of gameList) {
            gl.style.display = 'none';
        }
        for (let fl of filteredList) {
            fl.style.display = "block";
            fl.classList.add('filter_layout');
        }
        
        filterCriteria.innerHTML = `필터링 기준: 인원 - ${e.target.textContent}`;
    });
}

let filterLevel = document.querySelectorAll(".level");

for (let fl of filterLevel) {
    fl.addEventListener("click", (e) => {
        for (let btn of filterLevel) {
            btn.classList.remove("active");
        }
        e.target.classList.add("active");

        let targetClass = e.target.getAttribute("data-filter");
        let filteredList = document.querySelectorAll(`.game-row .${targetClass}`);

        for (let gl of gameList) {
            gl.style.display = "none";
        }
        for (let fl of filteredList) {
            fl.style.display = "block";
            fl.classList.add("filter_layout");
        }
        
        filterCriteria.innerHTML = `필터링 기준: 난이도 - ${e.target.textContent}`;
    });
}

function filterGames() {
    const searchInput = document.getElementById('header_search_bar').value.toLowerCase();
    const gameItems = document.querySelectorAll('#game-list li');
    let hasResults = false;

    gameItems.forEach(item => {
        const gameName = item.getAttribute('data-game');
        const gameTitle = item.querySelector('.game-card-title').textContent.toLowerCase();

        if (gameTitle.includes(searchInput)) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (searchInput) {
        filterCriteria.innerHTML = hasResults ? `필터링 기준: 검색 - ${searchInput}` : `검색 결과가 없습니다: ${searchInput}`;
    } else {
        filterCriteria.innerHTML = '';
    }
}

document.getElementById('header_search_bar').addEventListener('input', filterGames);
