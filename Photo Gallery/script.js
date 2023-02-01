const btnEl = document.getElementById("btn")
const errormessage = document.getElementById("errormessage")
const galleryEl = document.getElementById("gallery")




async function fetchImage(){
    const inputValue = document.getElementById("input").value

    if(inputValue >20 || inputValue <1){
        errormessage.style.display = "block"
        errormessage.innerText = "Number should be between 0 and 20"
        return
    }

    imgs = ""

    try {
        btnEl.style.display = "none"
        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()* 1000)}&client_id=tv8jZ1-4DAvGE37egEq-U0rabCrzx1pbD1axEA9UTnY`).then((res)=>res.json().then((data) => {
        if(data){
            data.forEach((pic)=>{
                imgs += `
                <img src=${pic.urls.small} alt="image"/>
                `;
                galleryEl.style.display = "block"
                galleryEl.innerHTML = imgs
                btnEl.style.display = "block"
            })
        }
    }))

    errormessage.style.display = "none"
    } catch (error) {
        errormessage.style.display = "block"
        errormessage.innerText = "An erroe happend try adain later"
        btnEl.style.display = "block"
    }
    
}
btnEl.addEventListener("click",fetchImage)
