const logoImage = document.querySelector("h1 > a > img");
function changeImageSource() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    logoImage.src = "./img/logo_only.png";
  } else {
    logoImage.src = "";
    logoImage.src = "./img/logo.png";
  }
}
// 페이지 로드시 초기 호출
changeImageSource();

// 브라우저 창 크기 변경 시 이미지 변경
window.addEventListener("resize", changeImageSource);

//조건 검색
/*
let filterPeople = document.querySelectorAll('.people_count');
let gameList = document.querySelectorAll('.game-card');
let filterLevel = document.querySelectorAll(".level");
let gameContainer = document.querySelector('.games');
let filtered = [];

for (let fp of filterPeople) {
  fp.addEventListener('click', (e) => {
    for (let btn of filterPeople) {
      btn.classList.remove('active');
      filtered = [];
    }
    e.target.classList.add('active');
    
    let targetClass = e.target.getAttribute('data-filter');
    console.log(targetClass);
    filtered = document.querySelectorAll(`.games  .${targetClass}`);
    console.log(filtered);
    
    for (let gl of gameList) {
      gl.style.display = 'none';
    }
    for (let fl of filtered) {
      fl.style.display = "flex";
     }
  })
}

for (let fl of filterLevel) {
  fl.addEventListener("click", (e) => {
    if (filtered.length === 0) {
      alert('인원을 선택하세요.');
    } else {
        for (let btn of filterLevel) {
          btn.classList.remove("active");
        }
        e.target.classList.add("active");

        let targetClass = e.target.getAttribute("data-filter");
        console.log(targetClass);
        for (let i of filtered) {
          let x = i.classList;
          console.log(x);
          if (x[2] === targetClass) {
            i.style.display = "block";
          } else {
            i.style.display = "none";
            gameContainer.innerHTML = `<p>조건에 맞는 게임이 없습니다.</p>`;
        }
       }
    }
  });
}
*/




