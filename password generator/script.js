const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const copyicon = document.querySelector(".fa-regular");
const alertcontainer = document.querySelector(".alert-container");


btn.addEventListener("click" , password)

copyicon.addEventListener("click", () =>{
    copypss();
    alertcontainer.classList.remove("active");
});



function password(){
   let password = "";
    for(let i=0;i<8; i++){
        const pss = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"
        const rand = Math.floor(Math.random()*74)
        password = password + pss[rand];
    }
  
    input.value = password;
    
}



function copypss(){
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
    
}
