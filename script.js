const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock(){
  hrPosition = hrPosition+(3/360)
  //(360/16) is one one hour chunk of the cirle, which is equal to 30. there are 3600 seconds
  //in an hour, so I need to add 30/3600 to hrPosition. removing the zeros simplifies it to 3/360
  minPosition = minPosition+(6/60);  // 6/60 is shorthand for (1/60)*6
  secPosition = secPosition+6; // 6 is equal to 360 degrees of circle/60 minutes

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
