const input = document.querySelector(".input");
// const label = document.querySelector(".label");

const body = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));



function updateBody(){
    if(input.checked){
        body.style.background = "black";
    }
    else{
        body.style.background = "white";
    }
}

input.addEventListener("input", ()=>{
    updateBody()
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(input.checked));
}

 