const canvas = document.querySelector('.background');
const context = canvas.getContext('2d');


// 창크기에 맞추기 캔버스 이미지 세팅하기
function setImages() {
    let verticalImg = new Image();
    verticalImg.src = "../img/background_vertical.png";
    let horizontalImg = new Image();
    horizontalImg.src = "../img/background_horizontal.png";
    let rectangleImg = new Image();
    rectangleImg.src = "../img/background_rectangle.png";

    let widthValue = window.innerWidth;
    let heightValue = window.innerHeight;
    // console.log("w " + widthValue);
    // console.log("h " + heightValue);

    if (-100 <= parseInt(widthValue - heightValue) && parseInt(widthValue - heightValue) <= 100) {
        canvas.style.height = heightValue * 3 + "px";
        canvas.style.width = "auto";
        rectangleImg.onload = function() {
            context.drawImage(rectangleImg, 0, 0);
        }
    } else {
        if (widthValue < heightValue) {
            // 캔버스보다 브라우저 창이 홀쭉한 경우
            canvas.style.height = heightValue * 3 + "px";
            canvas.style.width = "auto";
            verticalImg.onload = function() {
                context.drawImage(verticalImg, 0, 0);
            }
        } else {
            // 캔버스보다 브라우저 창이 납작한 경우
            canvas.style.width = widthValue * 3 + "px";
            canvas.style.height = "auto";
            horizontalImg.onload = function() {
                context.drawImage(horizontalImg, 0, 0);
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

    var l = -(x - w) / (w / 10) - 10;
    var t = -(y - h) / (h / 10) - 10;
    //10 / (y - (h / 2)) * 100;             
    // console.log(y + ' | ' + h + ' | ' + t);
    // console.log(x);
    // console.log(t);
    TweenMax.to(canvas, 1, {
        top: t + "%",
        left: l + "%"
    });

}

window.addEventListener("mousemove", touches);
window.addEventListener("touchstart", touches);
window.addEventListener("touchmove", touches);


//----
