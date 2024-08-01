
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.background = "black";
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.position = "static";
    }
}

// ////////////////////////////////////////