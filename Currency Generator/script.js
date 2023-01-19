const first = document.getElementById("first")

const worth1 = document.getElementById("worth1")

const second = document.getElementById("second")
const worth2 = document.getElementById("worth2")
const exchange = document.getElementById("exchange")

updateRate()


function updateRate() {
    fetch(` https://v6.exchangerate-api.com/v6/62cc27a3c723bde39444a432/latest/${first.value}`)
    .then((res) =>res.json())
    .then((data) => {
        const rate = data.conversion_rates
        [second.value];
        console.log(rate)
        exchange.innerText = `1 ${first.value} = ${rate + " " + 
        second.value}`

        worth2.value = (worth1.value * rate)

    })
}


first .addEventListener("change", updateRate)
second .addEventListener("change", updateRate)

worth1.addEventListener("input", updateRate)

