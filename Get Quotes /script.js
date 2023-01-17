const btn = document.getElementById("btn")
const QuotEl = document.getElementById("Quot")
const authorEl = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"

async function getQuote(){

    try {
        btn.innerText = "Loading...."
    btn.disabled = true;
    QuotEl.innerText = "Updating..."
    authorEl.innerText = "Updating..."
    const response = await fetch(apiURL)
    const data = await response.json()
    const quoteContent  = data.content;
    const quoteAuthor = data.author;
    QuotEl.innerText = quoteContent
    authorEl.innerText = "~" + quoteAuthor
    btn.innerText = "Get a quote"
    btn.disabled = false;
    console.log(data)
    } catch (error) {
        console.log(error)
        authorEl.innerText = "An error happend, try again later"
        QuotEl.innerText = "An error happend, try again later"
        btn.innerText = "Next"
        btn.disabled = false;
    }
    
}

getQuote()

btn.addEventListener("click", getQuote)