const birthMonth = document.querySelector(".birthMonth"),
    birthDay = document.querySelector(".birthDay"),
    getCntconstella = document.querySelector(".getCntconstella"),
    star = document.querySelector(".constellation"),
    starImg = document.querySelector(".bgWarpper img"),
    title = document.querySelector(".title");

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
    title.remove();

    let month = getMonth();
    let day = getDay();

    if (("03" === month && ("21" <= day && day <= "31")) ||
        ("04" === month && ("01" <= day && day <= "19"))) {
        star.innerHTML = "Aries"
        setStarImg("Aries");
        TweenMax.to(canvas, 1, {
            top: -25 + "%",
            left: 0 + "%"
        });
    }

    if (("04" === month && ("21" <= day && day <= "31")) ||
        ("05" === month && ("01" <= day && day <= "20"))) {
        star.innerHTML = "Taurus"
        setStarImg("Taurus");
        TweenMax.to(canvas, 1, {
            top: -25 + "%",
            left: -33 + "%"
        });
    }

    if (("05" === month && ("21" <= day && day <= "31")) ||
        ("06" === month && ("01" <= day && day <= "21"))) {
        star.innerHTML = "Gemini"
        setStarImg("Gemini");
        TweenMax.to(canvas, 1, {
            top: -25 + "%",
            left: -100 + "%"
        });
    }

    if (("06" === month && ("22" <= day && day <= "31")) ||
        ("07" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "Cancer"
        setStarImg("Cancer");
        TweenMax.to(canvas, 1, {
            top: -50 + "%",
            left: 0 + "%"
        });
    }

    if (("07" === month && ("23" <= day && day <= "31")) ||
        ("08" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "Leo"
        setStarImg("Leo");
        TweenMax.to(canvas, 1, {
            top: -50 + "%",
            left: -33 + "%"
        });
    }

    if (("08" === month && ("23" <= day && day <= "31")) ||
        ("09" === month && ("01" <= day && day <= "23"))) {
        star.innerHTML = "Virgo"
        setStarImg("Virgo");
        TweenMax.to(canvas, 1, {
            top: -50 + "%",
            left: -100 + "%"
        });
    }
    if (("09" === month && ("23" <= day && day <= "31")) ||
        ("10" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "Libra"
        setStarImg("Libra");
        TweenMax.to(canvas, 1, {
            top: -75 + "%",
            left: 0 + "%"
        });
    }

    if (("10" === month && ("23" <= day && day <= "31")) ||
        ("11" === month && ("01" <= day && day <= "22"))) {
        star.innerHTML = "Scorpius"
        setStarImg("Scorpius");
        TweenMax.to(canvas, 1, {
            top: -75 + "%",
            left: -33 + "%"
        });
    }

    if (("11" === month && ("23" <= day && day <= "31")) ||
        ("12" === month && ("01" <= day && day <= "24"))) {
        star.innerHTML = "Sagittarius"
        setStarImg("Sagittarius");
        TweenMax.to(canvas, 1, {
            top: -100 + "%",
            left: -100 + "%"
        });
    }

    if (("12" === month && ("25" <= day && day <= "31")) ||
        ("01" === month && ("01" <= day && day <= "19"))) {
        star.innerHTML = "Capricornus"
        setStarImg("Capricornus");
        TweenMax.to(canvas, 1, {
            top: 0,
            left: 0 + "%"
        });
    }

    if (("01" === month && ("20" <= day && day <= "31")) ||
        ("02" === month && ("01" <= day && day <= "18"))) {
        star.innerHTML = "Aquarius"
        setStarImg("Aquarius");
        TweenMax.to(canvas, 1, {
            top: 0,
            left: -33 + "%"
        });

    }

    if (("02" === month && ("19" <= day && day <= "31")) ||
        ("03" === month && ("01" <= day && day <= "20"))) {
        star.innerHTML = "Pisces"
        setStarImg("Pisces");
        TweenMax.to(canvas, 1, {
            top: 0,
            left: -100 + "%"
        });
    }
}

function setStarImg(starName) {
    starImg.src = `img/star_${starName}.png`;
    setTimeout(() => {
        starImg.classList.add("show");
        TweenMax.to(starImg, 1, {
            opacity: 1
        });
    }, 500);
}

function outStarImg() {
    setTimeout(() => {
        TweenMax.to(starImg, 0.5, {
            opacity: 0
        });
    }, 0);
    setTimeout(() => {
        starImg.classList.remove("show");
    }, 500);
}

function starImgShow() {
    return (starImg.getAttribute("class") == "starImg show") ? true : false;
}

function init() {

    window.addEventListener("mousemove", () => {
        if (starImgShow()) {
            outStarImg();
        }
    }, false);


    getCntconstella.addEventListener("click", handleDateEvent);
    birthMonth.addEventListener("change", paintDay);
    paintMonth();
    paintDay();
}

init();