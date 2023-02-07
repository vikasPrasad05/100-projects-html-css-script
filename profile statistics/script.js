const counters = document.querySelectorAll(".counter");


counters.forEach((counters) => {
    counters.innerText = "0";
    count();
    function count() {
        let currentnum = +counters.innerText;
        const dataCeil = counters.getAttribute("data-ceil");
        // console.log(dataCeil);
        const increment = dataCeil / 18
        currentnum = Math.ceil(currentnum + increment)
        counters.innerText = currentnum

        if(currentnum < dataCeil){
            setTimeout
            (count, 50)
        }else{
            counters.innerText = dataCeil;
        }
    }
});