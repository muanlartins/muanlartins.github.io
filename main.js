window.onload = resizeFunction;
window.onscroll = function() {scrollFunction()};
window.onresize = resizeFunction;

function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("navbar-main").classList.add("navbar-background");
        document.getElementById("logo").style.fontSize ="24px";
    }
    else{
        document.getElementById("navbar-main").classList.remove("navbar-background");
        document.getElementById("logo").style.fontSize ="32px";
    }
}

function resizeFunction(){
    if (window.innerWidth >= 992){
        if (!document.getElementById("text-1").classList.contains("display-4")){
            document.getElementById("text-1").classList.add("display-4");
            document.getElementById("text-1").classList.remove("h1");
        }
        if (!document.getElementById("text-2").classList.contains("h3")){
            document.getElementById("text-2").classList.add("h3");
            document.getElementById("text-2").classList.remove("h4");
        }
        if (!document.getElementById("text-3").classList.contains("h5")){
            document.getElementById("text-3").classList.add("h5");
            document.getElementById("text-3").classList.remove("h6");
        }
        if (!document.getElementById("text-4").classList.contains("h4")){
            document.getElementById("text-4").classList.add("h4");
            document.getElementById("text-4").classList.remove("h5");
        }
    }
    else{
        document.getElementById("text-1").classList.remove("display-4");
        document.getElementById("text-1").classList.add("h1");
        document.getElementById("text-2").classList.remove("h3");
        document.getElementById("text-2").classList.add("h4");
        document.getElementById("text-3").classList.remove("h5");
        document.getElementById("text-3").classList.add("h6");
        document.getElementById("text-4").classList.remove("h4");
        document.getElementById("text-4").classList.add("h5");
    }
}