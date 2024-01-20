
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function time() {
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

    if (hr < 10) { hr = "0" + hr };
    if (min < 10) { min = "0" + min };
    if (sec < 10) { sec = "0" + sec };

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
}
setInterval(time, 1000);