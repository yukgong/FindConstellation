const birthMonth = document.querySelector(".birthMonth"),
    birthDay = document.querySelector(".birthDay"),
    getCntconstella = document.querySelector(".getCntconstella"),
    star = document.querySelector(".constellation");

function paintMonth() {
    let num = 0;
    while (num < 12) {
        birthMonth.appendChild(document.createElement("option"))
        if (num < 9) birthMonth[num].innerHTML = `0${num + 1}`;
        else birthMonth[num].innerHTML = num + 1;
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
    if (getMonth() === "01" ||
        getMonth() === "03" ||
        getMonth() === "05" ||
        getMonth() === "07" ||
        getMonth() === "08" ||
        getMonth() === "10" ||
        getMonth() === "12") {
        totalDay = 31;
    } else if (getMonth() === "02") {
        totalDay = 28;
    } else if (getMonth() === "04" ||
        getMonth() === "06" ||
        getMonth() === "09" ||
        getMonth() === "11") {
        totalDay = 30;
    }
    while (count < totalDay) {
        birthDay.appendChild(document.createElement("option"))
        if (count < 9) birthDay[count].innerHTML = `0${count + 1}`;
        else birthDay[count].innerHTML = count + 1;
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

    if (("03" === month && ("21" <= day && day <= "31")) ||
        ("04" === month && ("01" <= day && day <= "19"))) {
        star.innerHTML = "양자리"
    }

    if (("04" === month && ("21" <= day && day <= "31")) ||
        ("05" === month && ("01" <= day && day <= "20"))) {
        star.innerHTML = "황소자리"
    }

    if (("05" === month && ("21" <= day && day <= "31")) ||
        ("06" === month && ("01" <= day && day <= "21"))) {
        star.innerHTML = "쌍둥이자리"
    }

    if (("06" === month && ("22" <= day && day <= "31")) ||
        ("07" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "게자리"
    }

    if (("07" === month && ("23" <= day && day <= "31")) ||
        ("08" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "사자자리"
    }

    if (("08" === month && ("23" <= day && day <= "31")) ||
        ("09" === month && ("01" <= day && day <= "23"))) {
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
        ("01" === month && ("01" <= day && day <= "19"))) {
        star.innerHTML = "염소자리"
    }

    if (("01" === month && ("20" <= day && day <= "31")) ||
        ("02" === month && ("01" <= day && day <= "18"))) {
        star.innerHTML = "물병자리"
    }

    if (("02" === month && ("19" <= day && day <= "31")) ||
        ("03" === month && ("01" <= day && day <= "20"))) {
        star.innerHTML = "물고기자리"
    }
}


function init() {
    getCntconstella.addEventListener("click", handleDateEvent);
    birthMonth.addEventListener("change", paintDay);
    paintMonth();
    paintDay();
}

init();