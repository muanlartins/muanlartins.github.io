window.onscroll = function() {scrollFunction()};
window.onload = function() {imagePicker()};

function imagePicker(){
    let index = Math.floor(Math.random()*2) + 1;
    switch (index){
        case 1:
            document.getElementById("piece-1").src="img/black-king.png";
            document.getElementById("piece-2").src = "img/white-queen.png";
            document.getElementById("piece-3").src = "img/black-queen.png";
            document.getElementById("piece-4").src = "img/white-king.png";
            document.getElementById("piece-5").src = "img/white-king.png";
            document.getElementById("piece-6").src = "img/black-queen.png";
            document.getElementById("piece-7").src="img/black-king.png";
            document.getElementById("piece-8").src = "img/white-queen.png";
            document.getElementById("piece-9").src = "img/black-queen.png";
            document.getElementById("piece-10").src = "img/white-king.png";
            document.getElementById("piece-11").src = "img/white-king.png";
            document.getElementById("piece-12").src = "img/black-queen.png";
            break;
        case 2:
            document.getElementById("piece-1").src = "img/leaf-1.png";
            document.getElementById("piece-2").src = "img/leaf-2.png";
            document.getElementById("piece-3").src = "img/leaf-3.png";
            document.getElementById("piece-4").src = "img/leaf-2.png";
            document.getElementById("piece-5").src = "img/leaf-1.png";
            document.getElementById("piece-6").src = "img/leaf-3.png";
            document.getElementById("piece-1").style.width += "60px";
            document.getElementById("piece-2").style.width += "60px";
            document.getElementById("piece-3").style.width += "60px";
            document.getElementById("piece-4").style.width += "60px";
            document.getElementById("piece-5").style.width += "60px";
            document.getElementById("piece-6").style.width += "60px";
            document.getElementById("piece-7").src = "img/leaf-1.png";
            document.getElementById("piece-8").src = "img/leaf-2.png";
            document.getElementById("piece-9").src = "img/leaf-3.png";
            document.getElementById("piece-10").src = "img/leaf-2.png";
            document.getElementById("piece-11").src = "img/leaf-1.png";
            document.getElementById("piece-12").src = "img/leaf-3.png";
            document.getElementById("piece-7").style.width += "60px";
            document.getElementById("piece-8").style.width += "60px";
            document.getElementById("piece-9").style.width += "60px";
            document.getElementById("piece-10").style.width += "60px";
            document.getElementById("piece-11").style.width += "60px";
            document.getElementById("piece-12").style.width += "60px";
            break;
    }
}

function scrollFunction(){
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1){
        document.getElementById("navbar-main").classList.add("navbar-background");
        document.getElementById("logo").style.fontSize ="24px";
    }
    else{
        document.getElementById("navbar-main").classList.remove("navbar-background");
        document.getElementById("logo").style.fontSize ="32px";
    }
}