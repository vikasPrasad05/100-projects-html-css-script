const menu = document.querySelector(".menu");
const menutext = document.querySelector(".menu p");
const sociallist = document.querySelector(".social-list");
// const solid = document.querySelector(".fa-solid ");  

const li = document.querySelectorAll(".social-list li")
menu.addEventListener("click",() =>{
    sociallist.classList.toggle("hide");
    menu.classList.toggle("rotate")
    
})

li.forEach(li => {
    li.addEventListener("click", ()=>{
        menutext.innerHTML = li.innerHTML
    })
})