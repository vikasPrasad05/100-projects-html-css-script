
const kick = document.querySelector("#kick");
const crash  = document.querySelector("#crash");
const clap = document.querySelector("#clap");
const tom = document.querySelector("#tom");

kick.addEventListener("click",()=>{
   function repeat(){
   const m1 = new Audio("./music/kick.wav");
   m1.play(); 
   }
   setInterval(repeat,500);   

   window.addEventListener("keydown", (event)=>{
      if(event.key === kick.slice(0,1)){
         m1.play();
      };
   });
});

crash.addEventListener("click",()=>{
   function repeat(){
      const m1 = new Audio("./music/crash.wav");
      m1.play();
   }
   setInterval(repeat,500);

})

clap.addEventListener("click",()=>{
   function repeat(){
   const m1 = new Audio("./music/clap.wav");
   m1.play();
   }
   setInterval(repeat,500);
})

tom.addEventListener("click",()=>{
   function repeat(){
   const m1 = new Audio("./music/tom.wav");
   m1.play();
   }
   setInterval(repeat,500);
})

