const searchbaar = document.querySelector(".search-bar-container");
const magnifire = document.querySelector(".magnifire");

magnifire.addEventListener("click",()=> {
    searchbaar.classList.toggle("active");
});