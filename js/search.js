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