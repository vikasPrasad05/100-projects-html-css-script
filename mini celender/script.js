const monthEl = document.querySelector("#month");
const dayEl  = document.querySelector("#day");
const daynumberEl = document.querySelector("#day-no");
const yearEl = document.querySelector("#year");


const date = new Date()

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


monthEl.innerText = month[date.getMonth()]

const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
dayEl.innerText = day[date.getDay()]

daynumberEl.innerText = date.getDate()
yearEl.innerText = date.getFullYear()