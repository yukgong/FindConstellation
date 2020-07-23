const canvas = document.querySelector('.background');
const context = canvas.getContext('2d');


// 창크기에 맞추기 캔버스 이미지 세팅하기
function setImages() {
    let widthValue = window.innerWidth;
    let heightValue = window.innerHeight;

    canvas.width = widthValue * 2;
    canvas.height = heightValue * 2;
    canvas.style.height = heightValue * 2 + "px";
    canvas.style.width = widthValue * 2 + "px";

    let verticalImg = new Image();
    verticalImg.src = "../findConstellation/img/background_vertical.jpg";
    let horizontalImg = new Image();
    horizontalImg.src = "../findConstellation/img/background_horizontal.jpg";
    let rectangleImg = new Image();
    rectangleImg.src = "../findConstellation/img/background_rectangle.jpg";


    if (-100 <= parseInt(widthValue - heightValue) && parseInt(widthValue - heightValue) <= 100) {

        rectangleImg.onload = function() {
            context.drawImage(rectangleImg, 0, 0, widthValue * 2, widthValue * 2);
        }
    } else {
        if (widthValue < heightValue) {
            // 캔버스보다 브라우저 창이 홀쭉한 경우

            verticalImg.onload = function() {
                console.log(verticalImg.width);
                context.drawImage(verticalImg, 0, 0, widthValue * 2, heightValue * 2);
            }
        } else {
            // 캔버스보다 브라우저 창이 납작한 경우

            horizontalImg.onload = function() {
                console.log(horizontalImg.height);
                context.drawImage(horizontalImg, 0, 0, widthValue * 2, heightValue * 2);
            }
        }
    }
}

window.addEventListener('load', setImages);
window.addEventListener('resize', setImages);

function touches(e) {
    var x = e.touches ? e.touches[0].clientX : e.clientX,
        y = e.touches ? e.touches[0].clientY : e.clientY;
    var w = window.innerWidth / 10;
    var h = window.innerHeight / 10;

    // console.log("w : " + w);
    // console.log("h : " + h);
    // console.log(10 / (y - (h / 2)) * 100);

    var l = -(x - w) / (w / 10) - 10;
    var t = -(y - h) / (h / 10) - 10;

    // console.log("l : " + l);
    // console.log("t : " + t);
    TweenMax.to(canvas, 1, {
        top: t + "%",
        left: l + "%"
    });

}

window.addEventListener("mousemove", touches);
window.addEventListener("touchstart", touches);
window.addEventListener("touchmove", touches);