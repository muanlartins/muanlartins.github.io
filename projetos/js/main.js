// window.onscroll = function() {scrollFunction()};

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