/*
    gswebCoundDown.js - https://juanjimeneztj.com
    Licensed under the MIT license - http://opensource.org/licenses/MIT

    Copyright (c) 2019 Juan jimenez
    CountDown created by Juan Jiménez.

    Initially this counter is counter in reverse only days,hours,minutes and seconds.
    Repository: https://gitlab.com/juanjimeneztj/gswebcountdown.git
*/
if(document.getElementById("gswebCountDown")){
    var css="#gswebCountDown { font-family: 'Oswald', sans-serif; font-weight: 300; font-size: 34px; display: grid; grid-template-columns: auto auto auto auto; max-width: 200px; text-align: center; width: 100% } #gswebCountDown > div { box-sizing: border-box; padding: 5px; text-transform: uppercase; width: 100% } #gswebDays { background: #fa0000; color: #fff; border: 1px solid #fa0000; } #gswebHours,#gswebMinutes,#gswebSeconds { border-top: 1px solid #fa0000; border-bottom: 1px solid #fa0000 } #gswebSeconds { border-right: 1px solid #fa0000 } #gswebDaysLabel,#gswebHoursLabel,#gswebMinutesLabel,#gswebSecondsLabel { font-size: 16px!important; padding: 0 10px!important }", head = document.head || document.getElementsByTagName('head')[0],style = document.createElement('style');
    
    var font = document.createElement('link');
        font.rel = 'stylesheet';
        font.href = "https://fonts.googleapis.com/css?family=Oswald:300,400";
    
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    head.appendChild(font);
    
    
    var gswebCountDown = document.getElementById("gswebCountDown"), countDownDate,now,distance,days,hours,minutes,seconds;
    
    var newDiv = document.createElement("div"); 
    newDiv.setAttribute("id","gswebDays");
    gswebCountDown.appendChild(newDiv);
    var newDiv2 = document.createElement("div"); 
    newDiv2.setAttribute("id","gswebHours");
    gswebCountDown.appendChild(newDiv2);
    var newDiv3 = document.createElement("div"); 
    newDiv3.setAttribute("id","gswebMinutes");
    gswebCountDown.appendChild(newDiv3);
    var newDiv4 = document.createElement("div"); 
    newDiv4.setAttribute("id","gswebSeconds");
    gswebCountDown.appendChild(newDiv4);
    
    if(gswebCountDown.getAttribute("labels") && gswebCountDown.getAttribute("labels")==="true"){
        var newDiv5 = document.createElement("div"); 
        newDiv5.setAttribute("id","gswebDaysLabel");
        newDiv5.appendChild(document.createTextNode("Days"));
        gswebCountDown.appendChild(newDiv5);
        var newDiv6 = document.createElement("div"); 
        newDiv6.setAttribute("id","gswebHoursLabel");
        newDiv6.appendChild(document.createTextNode("Hours"));
        gswebCountDown.appendChild(newDiv6);
        var newDiv7 = document.createElement("div"); 
        newDiv7.setAttribute("id","gswebMinutesLabel");
        newDiv7.appendChild(document.createTextNode("Minutes"));
        gswebCountDown.appendChild(newDiv7);
        var newDiv8 = document.createElement("div"); 
        newDiv8.setAttribute("id","gswebSecondsLabel");
        newDiv8.appendChild(document.createTextNode("Seconds"));
        gswebCountDown.appendChild(newDiv8);
    }
    
    var gswebCountDownDays = document.getElementById("gswebDays"),gswebCountDownHours = document.getElementById("gswebHours"),gswebCountDownMinutes = document.getElementById("gswebMinutes"),gswebCountDownSeconds = document.getElementById("gswebSeconds")

    if(gswebCountDown.getAttribute("gsweb-date")){
        countDownDate = new Date(gswebCountDown.getAttribute("gsweb-date")).getTime();
    }else{
        countDownDate = new Date().getTime();
    }

    var x = setInterval(function() {
        now = new Date().getTime();
        distance = countDownDate - now;

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days < 10) { days = "0"+parseInt(days); } 
        if (hours < 10) { hours = "0"+parseInt(hours); } 
        if (minutes < 10) { minutes = "0"+parseInt(minutes); } 
        if (seconds < 10) { seconds = "0"+parseInt(seconds); } 

        gswebCountDownDays.innerHTML = days;
        gswebCountDownHours.innerHTML = hours;
        gswebCountDownMinutes.innerHTML = minutes;
        gswebCountDownSeconds.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            gswebCountDownDays.innerHTML = "00";
            gswebCountDownHours.innerHTML = "00";
            gswebCountDownMinutes.innerHTML = "00";
            gswebCountDownSeconds.innerHTML = "00";
        }
    }, 1000);
}