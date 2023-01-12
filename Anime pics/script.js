const btn = document.getElementById("btn")
const anime = document.querySelector(".anime");
const animeimg = document.querySelector(".animeimg");
const nameanime = document.querySelector(".name");

btn.addEventListener("click",async function(){
    try {
        btn.ariaDisabled = true;
        btn.innerText = "loading..."
        nameanime.innerText = "updating..."
        animeimg.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json()
        btn.ariaDisabled = false;
        btn.innerText = "Get pics";
        anime.style.display = "block"
        animeimg.src = data.url;
        nameanime.innerText = data.artist;
    } catch (error) {
        console.log(error)
    }
})
