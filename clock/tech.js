let now = new Date();
let dayName = now.getDay();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();



switch (dayName) {
    case 0:
        dayNameDisplay = "SUNDAY"
        break;
    case 1:
        dayNameDisplay = "MONDAY"
        break;
    case 2:
        dayNameDisplay = "TUESDAY"
        break;
    case 3:
        dayNameDisplay = "WEDNESDAY"
        break;
    case 4:
        dayNameDisplay = "THURSDAY"
        break;
    case 5:
        dayNameDisplay = "FRIDAY"
        break;
    case 6:
        dayNameDisplay = "SATURDAY"
        break;
}


let day = document.getElementById('day').innerHTML=`${dayNameDisplay}`;
let obj = document.getElementById('obj').innerHTML=`${date}/ ${month+1}/ ${year}`;
let h = document.getElementById('h').innerHTML=hour;
let m = document.getElementById('m').innerHTML=min;
let s = document.getElementById('s').innerHTML=sec;

