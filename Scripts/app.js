console.log("Count Down started")
let countdownDate = new Date("Mar 22, 2023 15:37:25");
let days = document.querySelector(".counter .days .time span")
let hours = document.querySelector(".counter .hours .time span")
let minutes = document.querySelector(".counter .minutes .time span")
let seconds = document.querySelector(".counter .seconds .time span")

let count = setInterval(()=>{
    let now = new Date().getTime();
    let interval = countdownDate - now
    Math.floor(interval / (1000 * 60 * 60 * 24)) < 10?days.innerHTML = '0'+Math.floor(interval / (1000 * 60 * 60 * 24)): days.innerHTML = Math.floor(interval / (1000 * 60 * 60 * 24));
    Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10?hours.innerHTML = '0'+Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)): hours.innerHTML = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60)) < 10?minutes.innerHTML = '0'+ Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60)): minutes.innerHTML = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    Math.floor((interval % (1000 * 60)) / 1000) < 10?seconds.innerHTML = '0'+ Math.floor((interval % (1000 * 60)) / 1000): seconds.innerHTML = Math.floor((interval % (1000 * 60)) / 1000);
    // UI update
}, 1000)
