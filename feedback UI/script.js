const rating = document.querySelectorAll(".rating");
const btn = document.getElementById("btn")
const container = document.getElementById("container")
 
let selectedRating = ""

rating.forEach((rating) => {
    rating.addEventListener("click",(event) => {
        removeActive()
        selectedRating  = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});


btn.addEventListener("click", () =>{
    if(selectedRating !== ""){
        container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>we'll use feedback to improve our customer support.</p>
        `
    }
})

function removeActive(){
    rating.forEach((rating) => {
        rating.classList.remove("active")
    })
}


 