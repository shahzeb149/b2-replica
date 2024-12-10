let btn = document.querySelector(".menuBtn");
let menu = document.querySelector(".menu");
let count = 0;
btn.onclick = () => {
    if(count==0)
    {
        menu.style.visibility = "visible";
        count = 1;
    }
    else{
        menu.style.visibility = "hidden";
        count = 0;
    }
}