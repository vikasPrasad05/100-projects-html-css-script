const input = document.getElementById("input");
const text = document.getElementById("text")
const meaningco = document.getElementById("meaningco")
const title = document.getElementById("title")
const meaning = document.getElementById("meaning")
const audio = document.getElementById("audio")



async function fetchAPI(word) {

    try {
        
        text.style.display = "block";
        meaningco.style.display ="none";
        text.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());

        if(result.title){
            meaningco.style.display ="block";
            text.style.display = "none"
            title.innerText = word;
            meaning.innerText = "N/A";
            audio.style.display = "none";
        }else{
            text.style.display = "none"
            meaningco.style.display ="block"
            audio.style.display = "inline-flex"
            title.innerText = result[0].word;
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;
        }


        text.style.display = "none"
        meaningco.style.display ="block"
        title.innerText = result[0].word
        meaning.innerText = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio
    } catch (error) {
        console.log(error)
        text.innerText = `An error happend try again later`;
}
   
    
}

input.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})