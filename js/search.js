let filterPeople = document.querySelectorAll('.people_count');
let gameList = document.querySelectorAll('.games ul li');

for (let fp of filterPeople) {
  fp.addEventListener('click', (e) => {
    for (let btn of filterPeople) {
      btn.classList.remove('active');
    }
    e.target.classList.add('active');

    let targetClass = e.target.getAttribute('data-filter');
    console.log(targetClass);
    let filteredList = document.querySelectorAll(`.games ul .${targetClass}`);
    console.log(filteredList);

    for (let gl of gameList) {
      gl.style.display = 'none';
    }
     for (let fl of filteredList) {
       fl.style.display = "block";
    }

  })

}