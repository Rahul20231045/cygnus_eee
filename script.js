//1.Target date in milliseconds
const countDownDate = new Date("apr 25,2024 9:00:00").getTime();

let x = setInterval(() => {
//2.Today date in milliseconds
const today = new Date().getTime();

//Difference between target and today date in milliseconds
let distance = countDownDate - today;

let days = Math.floor(distance / (1000*60*60*24));

let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

let seconds = Math.floor(distance % ((1000*60)) / 1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
},1000)

//ja.html

function zoomAndLight() {
const image = document.querySelector('img');
image.style.transform = 'scale(1.2)';
image.style.filter = 'brightness(1.5) drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))';
}
