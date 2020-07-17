const canvas = document.querySelector('.background');
const context = canvas.getContext('2d');


// 캔버스 이미지 세팅하기
function setImages() {
    let imgElem = new Image();
    imgElem.src = "../findConstellation/img/background.png";

    imgElem.onload = function() {
        context.drawImage(imgElem, 0, 0);

    }
}


// 캔버스를 창크기에 맞추기
function setLayout() {
    const widthRatio = window.innerWidth / canvas.width;
    const heightRatio = window.innerHeight / canvas.height;

    if (widthRatio <= heightRatio) {
        // 캔버스보다 브라우저 창이 홀쭉한 경우
        canvas.style.height = "500%";
    } else {
        // 캔버스보다 브라우저 창이 납작한 경우
        canvas.style.width = "500%";
    }
}

window.addEventListener('load', () => {
    setImages();
    setLayout();
});

window.addEventListener('resize', () => {
    setImages();
    setLayout();
});

function touches(e) {
    var x = e.touches ? e.touches[0].clientX : e.clientX,
        y = e.touches ? e.touches[0].clientY : e.clientY;
    var w = window.innerWidth / 10;
    var h = window.innerHeight / 10;

    var l = -(x - w) / (w / 10) - 10;
    var t = -(y - h) / (h / 10) - 10;
    //10 / (y - (h / 2)) * 100;             
    // console.log(y + ' | ' + h + ' | ' + t);
    // console.log(x);

    TweenMax.to(canvas, 1, {
        top: t + "%",
        left: l + "%"
    });

}

window.addEventListener("mousemove", touches);
window.addEventListener("touchstart", touches);
window.addEventListener("touchmove", touches);


//----