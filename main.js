const hourArrow = document.querySelector('.arrow-hr'),
    minArrow = document.querySelector('.arrow-min'),
    secArrow = document.querySelector('.arrow-sec'),
    hourNumber = document.querySelector('.hr'),
    minNumber = document.querySelector('.min'),
    secNumber = document.querySelector('.sec'),
    pmAm = document.querySelector('.am-pm'),
    dateOfDay = document.querySelector('.date'),
    monthInner = document.querySelector('.month'),
    yearInner = document.querySelector('.year'),
    dayInner = document.querySelector('.day');

function date() {
    const worldDte = new Date(),
        hour = worldDte.getHours(),
        min = worldDte.getMinutes(),
        sec = worldDte.getSeconds(),
        am = worldDte.toLocaleTimeString(),
        dateOfTheDay = worldDte.getDate();

    //EXCUTE fuction that control into diggit oclock
    numberOclock(hour, min, sec, am)

    //EXCUTE fuction that control into arrow oclock
    arrowOclock(hour, min, sec)

    //EXCUTE fuction that control full date
    dateData(dateOfTheDay, worldDte)

    setTimeout(() => {
        date()
    }, 1000);
}
// EXCUTE date fuction
date()


//fuction that control into diggit oclock
function numberOclock(hour, min, sec, AM) {
    //hour number && PM AM
    if (hour > 12) {
        hourNumber.innerText = hour - 12;
        pmAm.innerText = 'PM'
    } else {
        hourNumber.innerText = hour;
        pmAm.innerText = 'AM'
    }
    //min number
    if (min < 10) {
        minNumber.innerText = `0${min}`;
    } else {
        minNumber.innerText = min;
    }

    //sec number
    if (sec < 10) {
        secNumber.innerText = `0${sec}`;
    } else {
        secNumber.innerText = sec;
    }
}

//fuction that control into diggit oclock
function arrowOclock(hour, min, sec) {
    const secRotate = ((360 / 60) * sec).toFixed(1),
        minRotate = ((360 / 60) * min + (secRotate / 360) * 6).toFixed(1), //(360/360)*6 =6deg => 1min = 6deg
        hourRotate = ((360 / 12) * hour + (minRotate / 360) * 30).toFixed(1);//(360/360)*30 =30 deg => 1hr =30deg

    hourArrow.style.transform = `rotate(${hourRotate}deg)`;
    minArrow.style.transform = `rotate(${minRotate}deg)`;
    secArrow.style.transform = `rotate(${secRotate}deg)`;
}

// fuction that control full date
function dateData(date, month) {
    const FullData = month.toString().split(' ');

    dateOfDay.innerText = date;
    monthInner.innerText = FullData[1];
    yearInner.innerText = FullData[3];
    dayInner.innerText = FullData[0]
}