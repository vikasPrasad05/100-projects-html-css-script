const score = document.getElementById("score");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const no = document.querySelector(".no");
const submit = document.querySelector("#submit");
const time = document.querySelector("#time");
const btn = document.querySelector("#btn");


let score_num = 0;
let rand1  
let rand2 
let time_num = 120;

function rand(){
     rand1 = Math.ceil(Math.random()*100);
     rand2 = Math.ceil(Math.random()*100);
     num1.innerText = rand1;
     num2.innerText = rand2;

}
rand();



function start(){
    setInterval(timer,1000)
}

function timer(){
    time.innerText = time_num;
    time_num--;
    if(time_num == 0){
        alert(score_num)
        location.reload();
    }
}


btn.addEventListener("click", start)

// submit.addEventListener("click",()=>{
//     let ans = no.value;
//     if(rand1+rand2 == ans){
//         score_num++;
//         score.innerText = scorenum;
//         no.value="";
//         rand();
//     }else{
//         score_num--;
//         score.innerText = score_num;
//         no.value = "";
//     }

// })
// console.log();

no.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
       
        let ans = no.value;
        if(rand1+rand2 == ans){
            score_num += 200;
            score.innerText = score_num;
            no.value="";
            rand();
        }else{
            score_num  -= 300;
            score.innerText = score_num;
            no.value = "";
        }
        }

});


   
