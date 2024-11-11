var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');





setInterval(function(){
    var date = new Date();

    var newSeconds = date.getSeconds();
    var newMinutes = date.getMinutes();
    var newHours = date.getHours();

    seconds.innerText = newSeconds;
    minutes.innerText = newMinutes;
    hours.innerText = newHours;


}, 1000);