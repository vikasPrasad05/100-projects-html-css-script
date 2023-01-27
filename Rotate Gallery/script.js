const image = document.querySelector(".image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0
let timer;

prev.addEventListener("click",() => {
    x = x +45;
    clearTimeout(timer)
    updateGallery()
})

next.addEventListener("click",() => {
    x = x -45;
    clearTimeout(timer)
    updateGallery()
})



function updateGallery(){
    image.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(()=>{
        x = x - 45;
        clearTimeout(timer)
    updateGallery()
    }, 3000)

}


updateGallery()