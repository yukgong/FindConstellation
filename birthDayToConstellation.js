const birthMonth = document.getElementById("birthMonth"),
    birthDay = document.getElementById("birthDay"),
    getCntconstella = document.getElementById("getCntconstella"),
    star = document.getElementById("constellation"),
    backgroundElement = document.querySelector(".background");



function paintMonth() {
    let num = 0;
    while (num < 12) {
        birthMonth.appendChild(document.createElement("option"))
        birthMonth[num].innerHTML = num + 1;
        num++;
    }
}

function removeDay() {
    while (birthDay.hasChildNodes()) {
        birthDay.removeChild(birthDay.firstChild);
    }
}

function paintDay() {
    let totalDay = 0;
    let count = 0;

    removeDay()
    if (getMonth() === "1" ||
        getMonth() === "3" ||
        getMonth() === "5" ||
        getMonth() === "7" ||
        getMonth() === "8" ||
        getMonth() === "10" ||
        getMonth() === "12") {
        totalDay = 31;
    } else if (getMonth() === "2") {
        totalDay = 28;
    } else if (getMonth() === "4" ||
        getMonth() === "6" ||
        getMonth() === "9" ||
        getMonth() === "11") {
        totalDay = 30;
    }
    while (count < totalDay) {
        birthDay.appendChild(document.createElement("option"))
        birthDay[count].innerHTML = count + 1;
        count++;
    }
}

function getMonth() {
    let month = birthMonth.value;
    return month;
}

function getDay() {
    let day = birthDay.value;
    return day;
}


function handleDateEvent() {

    let month = getMonth();
    let day = getDay();

    if (("3" === month && ("21" <= day && day <= "31")) ||
        ("4" === month && ("1" <= day && day <= "19"))) {
        star.innerHTML = "양자리"
    }

    if (("4" === month && ("21" <= day && day <= "31")) ||
        ("5" === month && ("01" <= day && day <= "20"))) {
        star.innerHTML = "황소자리"
    }

    if (("5" === month && ("21" <= day && day <= "31")) ||
        ("6" === month && ("01" <= day && day <= "21"))) {
        star.innerHTML = "쌍둥이자리"
    }

    if (("6" === month && ("22" <= day && day <= "31")) ||
        ("7" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "게자리"
    }

    if (("7" === month && ("23" <= day && day <= "31")) ||
        ("8" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "사자자리"
    }

    if (("8" === month && ("23" <= day && day <= "31")) ||
        ("9" === month && ("01" <= day && day <= "23"))) {
        star.innerHTML = "처녀자리"
    }

    if (("10" === month && ("23" <= day && day <= "31")) ||
        ("11" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "전갈자리"
    }

    if (("11" === month && ("23" <= day && day <= "31")) ||
        ("12" === month && ("01" <= day && day <= "24"))) {
        star.innerHTML = "궁수자리"
    }

    if (("12" === month && ("25" <= day && day <= "31")) ||
        ("1" === month && ("01" <= day && day <= "19"))) {
        star.innerHTML = "염소자리"
    }

    if (("1" === month && ("20" <= day && day <= "31")) ||
        ("2" === month && ("01" <= day && day <= "18"))) {
        star.innerHTML = "물병자리"
    }

    if (("2" === month && ("19" <= day && day <= "31")) ||
        ("3" === month && ("01" <= day && day <= "20"))) {
        star.innerHTML = "물고기자리"
    }
}

backgroundElement.addEventListener("mousemove", (ev) => {
    backgroundElement.style.backgroundPositionX = -ev.offsetX + "px";
    backgroundElement.style.backgroundPositionY = -ev.offsetY + "px";
});

function init() {
    getCntconstella.addEventListener("click", handleDateEvent);
    birthMonth.addEventListener("change", paintDay);
    paintMonth();
    paintDay();
}

init();