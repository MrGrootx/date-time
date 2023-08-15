let date = new Date();
const todaydate = document.querySelector('.date');
const todayday = document.querySelector('.day');
const todaytime = document.querySelector('.time');

const totalday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function printDate() {
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    todaydate.innerHTML = day + "/" + month + "/" + year ;  
}

printDate()

function printDay() {
    var date = new Date();
    var today = date.getDay();
    var day = totalday[today];
    todayday.innerHTML = day;
    
}

printDay()


function printTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var period = "AM";

    if(hour == 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    if(hour<10) {
        hour = "0" + hour;
    }
    if(minutes<10) {
        minutes = "0" + minutes;
    }
    if(second<10) {
        second = "0" + second;
    }

   var time = hour + ":" + minutes + ":" + second + ":" + "" + period;
    document.querySelector(".time").innerHTML = time;
    setTimeout(printTime,1000)
    
    
}
printTime()
