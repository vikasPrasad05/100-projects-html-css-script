const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const popupcontainer = document.querySelector(".popup-container");
const closeicone = document.querySelector(".close-icone");

btn.addEventListener("click", ()=>{
    container.classList.add("active");
    popupcontainer.classList.remove("active");
});


closeicone.addEventListener("click",()=>{
    container.classList.remove("active");
    popupcontainer.classList.add("active");
})