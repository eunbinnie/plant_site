// 마우스 한 번 아래로 드래그한 위치부터 opacity 60%로 설정
const navForm = document.querySelector("nav-icon")
const search = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

console.dir(search)

function searchClick() {
  searchInput.classList.remove('hidden')
}

search.addEventListener('click', searchClick);