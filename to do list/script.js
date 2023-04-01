const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();

});

function toDoList(){
    let newTask = input.value;
    const li = document.createElement("li");
    li.innerText = newTask;
    ul.appendChild(li)
    input.value = ""

    const checkbtn = document.createElement("div")
    checkbtn.innerHTML = `<i class="fa-solid fa-square-check">`

    li.appendChild(checkbtn);

    const trashbtn = document.createElement("div")
    trashbtn.innerHTML = `<i class="fa-solid fa-trash">`
    li.appendChild(trashbtn);


    checkbtn.addEventListener("click", ()=>{
        li.classList.toggle("check")
        updateLocalStorage();
        
    });
    trashbtn.addEventListener("click", ()=>{
        li.remove();
        updateLocalStorage();
        
    });
    updateLocalStorage();
}

function updateLocalStorage(){
    const lis = document.querySelector("li")
    let list = []
    lis.forEach(li=>{
        list.push({
            name: li.innerText,
            check: li.classList.contains("check")
        });
    });
    localStorage.setItem("list", JSON.stringify(list))
}